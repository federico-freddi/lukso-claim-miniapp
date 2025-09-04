import "./App.css";
import { useLuksoAssets } from "./hook/useLuksoAssets";
import { CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { TokenCard } from "@/components/TokenCard";

function App() {
  const { assets, loading } = useLuksoAssets();

  // Claim handler mock
  const handleClaim = (assetAddress: string) => {
    alert(`Claim asset ${assetAddress}`);
  };
  const handleClaimAll = () => {
    alert("Claim all assets");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Claim your tokens
          </h1>
          <p className=" text-lg">
            You are eligible for (
            <span className="font-semibold">{assets.length}</span>) claims
          </p>
        </div>

        {/* Assets Section */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-left">
            Assets to claim ({assets.length})
          </h2>

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

          {/* Action Buttons */}
          {assets.length > 0 && (
            <div className="flex gap-4 pt-6 border-t border-gray-100">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-white border-gray-200 text-gray-600 font-semibold py-4 rounded-2xl hover:bg-gray-50"
                disabled
              >
                Set up claim
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-slate-700 hover:bg-slate-800 text-white font-semibold py-4 rounded-2xl"
                onClick={handleClaimAll}
              >
                Claim all
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
