import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { AssetInfo } from "@/hook/useLuksoAssets";

interface TokenCardProps {
  asset: AssetInfo;
  onClaim: (address: string) => void;
}

export function TokenCard({ asset, onClaim }: TokenCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <CardContent className="flex items-center space-x-3 p-0">
        <div className="relative">
          <img
            src={asset.image}
            alt={asset.symbol}
            className="w-12 h-12 rounded-lg object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/48/6366f1/ffffff?text=${asset.symbol}`;
            }}
          />
          {asset.type === "LSP8" && (
            <div className="absolute -bottom-1 -right-1 bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded-md font-medium">
              {asset.type}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="font-bold text-lg text-gray-900">{asset.balance}</div>
          <div className="font-semibold text-sm text-gray-700 truncate">
            {asset.name}{" "}
            <span className="text-gray-500 font-medium">{asset.symbol}</span>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700 font-semibold"
          onClick={() => onClaim(asset.address)}
        >
          Claim
        </Button>
      </CardContent>
    </Card>
  );
}
