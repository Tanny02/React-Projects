import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const handleAdd = () => {
    dispatch(addToCart(data));
  };
  const handleRemove = () => {
    dispatch(removeFromCart(data.id));
  };
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-black-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {data?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === data.id)
                ? handleRemove
                : handleAdd
            }
            className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === data.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
