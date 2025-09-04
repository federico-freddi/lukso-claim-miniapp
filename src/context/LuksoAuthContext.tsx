import { createContext, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import { createClientUPProvider } from "@lukso/up-provider";
import type { UPClientProvider } from "@lukso/up-provider";

interface LuksoAuthContextProps {
  provider: UPClientProvider | null;
  accounts: string[];
  contextAccounts: string[];
  chainId: number | null;
  walletConnected: boolean;
}

const LuksoAuthContext = createContext<LuksoAuthContextProps | undefined>(
  undefined
);

export const LuksoAuthProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<UPClientProvider | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contextAccounts, setContextAccounts] = useState<string[]>([]);
  const [chainId, setChainId] = useState<number | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);

  const updateConnected = useCallback(
    (acc: string[], _ctxAcc: string[], chId: number | null) => {
      // Consideriamo connesso solo se ci sono accounts (connessione dal grid)
      setWalletConnected(acc.length > 0 && !!chId);
    },
    []
  );

  useEffect(() => {
    const upProvider = createClientUPProvider();
    setProvider(upProvider);

    async function init() {
      try {
        const _chainId = await upProvider.request({ method: "eth_chainId" });
        const chainIdNum = parseInt(_chainId as string, 16);
        setChainId(chainIdNum);

        const _accounts = await upProvider.request({ method: "eth_accounts" });
        setAccounts(_accounts as string[]);

        // I contextAccounts potrebbero essere vuoti inizialmente
        const _contextAccounts = upProvider.contextAccounts || [];
        console.log("Initial contextAccounts:", _contextAccounts);
        console.log("Initial accounts:", _accounts);
        setContextAccounts(_contextAccounts);

        updateConnected(_accounts as string[], _contextAccounts, chainIdNum);
      } catch (error) {
        console.error("Errore durante l'inizializzazione:", error);
        // Se c'è un errore, resettiamo tutto
        setAccounts([]);
        setContextAccounts([]);
        setChainId(null);
        setWalletConnected(false);
      }
    }

    init();

    const handleAccountsChanged = (_accounts: string[]) => {
      console.log("accountsChanged:", _accounts);
      setAccounts(_accounts);
      updateConnected(_accounts, contextAccounts, chainId);
    };

    const handleContextAccountsChanged = (_contextAccounts: string[]) => {
      console.log("contextAccountsChanged:", _contextAccounts);
      setContextAccounts(_contextAccounts);
      updateConnected(accounts, _contextAccounts, chainId);
    };

    const handleChainChanged = (_chainId: number) => {
      setChainId(_chainId);
      updateConnected(accounts, contextAccounts, _chainId);
    };

    upProvider.on("accountsChanged", handleAccountsChanged);
    upProvider.on("contextAccountsChanged", handleContextAccountsChanged);
    upProvider.on("chainChanged", handleChainChanged);

    return () => {
      upProvider.removeListener("accountsChanged", handleAccountsChanged);
      upProvider.removeListener(
        "contextAccountsChanged",
        handleContextAccountsChanged
      );
      upProvider.removeListener("chainChanged", handleChainChanged);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LuksoAuthContext.Provider
      value={{ provider, accounts, contextAccounts, chainId, walletConnected }}
    >
      {children}
    </LuksoAuthContext.Provider>
  );
};

export { LuksoAuthContext };
