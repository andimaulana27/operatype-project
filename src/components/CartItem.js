// src/components/CartItem.js
import Image from 'next/image';

const CartItem = ({ imageUrl, name, license, price }) => {
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
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium text-[#3F3F3F]">${price.toFixed(2)}</p>
        <button className="text-sm text-red-500 hover:underline font-light">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;