import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, deleteFromCart, removeFromCart } from "../../app/slices/cartSlice"

const CartInfo = () => {
  const location = useLocation();
  const url = location.pathname;

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cart)
  // console.log(cartItems)

  const handleDelete = (item) => {
    dispatch(deleteFromCart({product: item}));
  }

  const handleMinus = (item) => {
    dispatch(removeFromCart({product: item}));
  }

  const handlePlus = (item) => {
    dispatch(addToCart({product: item}));
  }

  return (
    <div className="px-8 pt-4 pb-10 ml-16 border-2 border-primary rounded-lg">
      <h3 className="py-2 font-semibold text-lg">Cart</h3>
      <div className="flex flex-col gap-3">
        {cartItems.length === 0 ? <div>Your Cart is Empty! </div> : ""}
        {cartItems.map((item, index) => {
          return (
        <div className="grid grid-cols-5 bg-color text-black rounded-md" key={index}>
          <div className="col-span-1 p-2 pr-0">
            <img
              src={item.image.url}
              alt="image"
              className="rounded-md h-full w-full"
            ></img>
          </div>

          <div className="col-span-3 flex flex-col p-2 pl-4">
            <p className="font-bold text-lg">{item.name}</p>
            <p className="text-slate-500 text-base font-medium">{item.brand}</p>
            <p className="text-slate-500 text-base ">{item.size}ml</p>
            <p className="text-primary text-base font-bold">₹ {item.price}</p>
          </div>

          <div className="col-span-1 flex flex-col items-end p-2 gap-4">
            <button className="text-grey text-sm font-thin rounded-md p-1" onClick={() => handleDelete(item)}>
              <FaXmark />
            </button>
            <div className="flex gap-2">
              <button className="bg-secondary text-grey text-sm font-thin rounded-md p-1" onClick={() => handleMinus(item)}>
                <FaMinus />
              </button>
              {item.quantity}
              <button className="bg-primary text-color text-sm font-thin rounded-md p-1" onClick={() => handlePlus(item)}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        )
      })}
      </div>

      {url === "/payment/gateway" ? (
        <fieldset className="mt-4 p-2 border border-primary rounded-md">
          <legend className="px-2 mx-4">Promo Code</legend>
          <div className="">
            <input
              type="text"
              placeholder="SHOP10"
              className="w-2/3 p-3 outline-none bg-inherit"
            />
            <button className="w-1/3 bg-primary p-3 rounded-lg text-lg font-medium">
              Apply
            </button>
          </div>
        </fieldset>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartInfo;
