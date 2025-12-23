import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group relative">
      {/* Image */}
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        {product.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
            {product.badge}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1 text-black">
        <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
        <p className="text-sm line-clamp-2">{product.name}</p>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">₹{product.price}</span>
          <span className="line-through text-gray-400 text-xs">
            ₹{product.mrp}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <span className="bg-green-600 text-white px-1.5 rounded">
            {product.rating} ★
          </span>
          <span className="text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}
