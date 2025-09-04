import "./App.css";
import { useLuksoAssets } from "./hook/useLuksoAssets";
import { useContext } from "react";
import { LuksoAuthContext } from "./context/LuksoAuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@/components/ui/button";
import { TokenCard } from "@/components/TokenCard";

function App() {
  const { assets, loading, contextAccounts } = useLuksoAssets();
  const authContext = useContext(LuksoAuthContext);

  // Debug info
  console.log("App render - contextAccounts:", contextAccounts);
  console.log("App render - walletConnected:", authContext?.walletConnected);

  // Claim handler mock
  const handleClaim = (assetAddress: string) => {
    alert(`Claim asset ${assetAddress}`);
  };
  const handleClaimAll = () => {
    alert("Claim all assets");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header Card */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Claim your tokens
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              You are eligible for (<b>{assets.length}</b>) claims
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Assets Section */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Assets to claim ({assets.length})
            </CardTitle>
            {/* Debug info - rimuovi in produzione */}
            {/* <CardDescription className="text-xs text-gray-500">
              Debug - accounts: {JSON.stringify(accounts)}
              <br />
              walletConnected: {authContext?.walletConnected ? "true" : "false"}
            </CardDescription> */}
          </CardHeader>

          <CardContent className="pt-0">
            {loading ? (
              <div className="text-center text-gray-500 py-8">Loading...</div>
            ) : assets.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                No assets available to claim
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {assets.map((asset) => (
                  <TokenCard
                    key={asset.address}
                    asset={asset}
                    onClaim={handleClaim}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        {assets.length > 0 && (
          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="flex-1" disabled>
              Set up claim
            </Button>
            <Button
              size="lg"
              className="flex-1 bg-slate-800 hover:bg-slate-700"
              onClick={handleClaimAll}
            >
              Claim all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
