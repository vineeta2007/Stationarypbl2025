import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.in_stock && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
            <Check className="w-3 h-3 mr-1" />
            In Stock
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition flex items-center font-semibold shadow-md">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
