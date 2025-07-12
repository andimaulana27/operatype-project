// src/components/CartItem.js
import Image from 'next/image';

const CartItem = ({ imageUrl, name, license, price, quantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={imageUrl || "/placeholder-image.jpg"}
            alt={`Thumbnail for ${name}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4 className="text-lg font-medium text-[#3F3F3F]">{name}</h4>
          <p className="text-sm font-light text-gray-500">{license}</p>
          {/* Tampilkan jumlah jika lebih dari 1 */}
          {quantity > 1 && (
            <p className="text-xs font-light text-gray-500">Quantity: {quantity}</p>
          )}
        </div>
      </div>
      <div className="text-right">
        {/* Harga dikalikan dengan kuantitas */}
        <p className="text-lg font-medium text-[#3F3F3F]">${(price * quantity).toFixed(2)}</p>
        <button 
          onClick={onRemove} // Panggil fungsi onRemove saat diklik
          className="text-sm text-red-500 hover:underline font-light"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;