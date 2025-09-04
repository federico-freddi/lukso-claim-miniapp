import Button from "@/components/ui/button";
import type { AssetInfo } from "@/hook/useLuksoAssets";

interface TokenCardProps {
  asset: AssetInfo;
  onClaim: (address: string) => void;
}

export function TokenCard({ asset, onClaim }: TokenCardProps) {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-gray-100 hover:border-gray-200 transition-all duration-200">
      {/* Icon and Info */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-0.5">
            <img
              src={asset.image}
              alt={asset.symbol}
              className="w-full h-full rounded-full object-cover bg-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/48/6366f1/ffffff?text=${asset.symbol}`;
              }}
            />
          </div>
          {asset.type === "LSP8" && (
            <div className="absolute -bottom-1 -right-1 bg-slate-700 text-white text-xs px-1.5 py-0.5 rounded-md font-medium">
              LSP8
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-lg text-gray-900 leading-tight">
            {asset.balance}
          </div>
          <div className="font-semibold text-sm text-gray-900 leading-tight">
            {asset.name}{" "}
            <span className="text-gray-400 font-medium uppercase text-xs">
              {asset.symbol}
            </span>
          </div>
        </div>
      </div>

      {/* Claim Button */}
      <Button
        variant="outline"
        size="sm"
        className="bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg"
        onClick={() => onClaim(asset.address)}
      >
        Claim
      </Button>
    </div>
  );
}
