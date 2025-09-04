import { useEffect, useState, useContext } from "react";
import { LuksoAuthContext } from "../context/LuksoAuthContext";

export interface AssetInfo {
  address: string;
  name: string;
  symbol: string;
  image: string;
  balance: string;
  type: "LSP7" | "LSP8";
}

// MOCK: restituisce asset finti per test UI
const MOCK_ASSETS: AssetInfo[] = [
  {
    address: "0x1",
    name: "LUKSO",
    symbol: "LYX",
    image:
      "https://raw.githubusercontent.com/lukso-network/assets/master/token-icons/lyx.svg",
    balance: "12,600",
    type: "LSP7",
  },
  {
    address: "0x2",
    name: "Fish",
    symbol: "FSH",
    image: "https://cryptologos.cc/logos/fish-coin-fsh-logo.png",
    balance: "50,789",
    type: "LSP7",
  },
  {
    address: "0x3",
    name: "Lukso Lil Monsters",
    symbol: "LLM",
    image:
      "https://raw.githubusercontent.com/lukso-network/assets/master/token-icons/llm.png",
    balance: "12,600",
    type: "LSP8",
  },
  {
    address: "0x4",
    name: "FABS",
    symbol: "FAB",
    image:
      "https://raw.githubusercontent.com/lukso-network/assets/master/token-icons/fab.png",
    balance: "100",
    type: "LSP7",
  },
  {
    address: "0x5",
    name: "Lone Ranger",
    symbol: "LNR",
    image:
      "https://raw.githubusercontent.com/lukso-network/assets/master/token-icons/lnr.png",
    balance: "1",
    type: "LSP8",
  },
];

export function useLuksoAssets() {
  const context = useContext(LuksoAuthContext);
  if (!context) {
    throw new Error(
      "useLuksoAssets deve essere usato all'interno di LuksoAuthProvider"
    );
  }
  const { contextAccounts, accounts } = context;
  const [assets, setAssets] = useState<AssetInfo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!accounts || accounts.length === 0) {
      setAssets([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    // Qui in futuro chiamata reale alla blockchain
    setTimeout(() => {
      setAssets(MOCK_ASSETS);
      setLoading(false);
    }, 500);
  }, [accounts]);

  return { assets, loading, contextAccounts, accounts };
}
