import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../../utils/hooks/useWishlist";

export default function ProductCard({ product }) {
  const { wishlistItems, toggleWishlistItem } = useWishlist();
  const itemExists = wishlistItems.find((item) => item.id === product.id);

  return (
    <div className="relative z-0">
      <FontAwesomeIcon
        icon={itemExists ? icons.heartFull : icons.heart}
        onClick={() => toggleWishlistItem(product)}
        className="absolute right-2 top-2 h-4 w-4 cursor-pointer rounded-full bg-white p-1 transition-all duration-300 ease-in-out hover:bg-gray-100"
      />
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square">
          <img
            src={product.image}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <p>{product.brand}</p>
          <h3 className="font-bold">{product.name}</h3>
          {product.price.discount ? (
            <div>
              <p className="line-through">DKK {product.price.default}</p>
              <p className="text-red-700">
                DKK {product.price.default * (1 - product.price.discount)}
              </p>
            </div>
          ) : (
            <p>DKK {product.price.default}</p>
          )}
        </Link>
      </div>
    </div>
  );
}

export function ProductCardSearch({ product, close }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="relative z-0"
      onClick={close}
    >
      <div className="aspect-square">
        <img
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <p>{product.brand}</p>
        <h3 className="font-bold">{product.name}</h3>
      </div>
    </Link>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-52 rounded bg-gray-300"></div>
      <div className="mx-auto mt-2 h-2 w-1/4 rounded bg-gray-300"></div>
      <div className="mx-auto mt-2 h-3 w-1/3 rounded bg-gray-300"></div>
      <div className="mx-auto mt-2 h-2 w-1/5 rounded bg-gray-300"></div>
    </div>
  );
}
