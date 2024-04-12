import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <div>
      <div className="flex items-center p-5 justify-between bg-gray-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item?.image} alt={item.title} className="h-28 rounded-lg" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{item?.title}</h1>
            <p className="text-white font-extrabold">{item?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemove}
            className="flex items-center justify-center bg-blue-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
