import React from "react";
import { useSelector } from "react-redux";

const OrderInfo = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="px-8 pt-4 pb-10 ml-16 border-2 border-primary rounded-lg">
      <h3 className="py-2 font-semibold text-lg">Order Details</h3>
      <div className="flex flex-col gap-3">
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
              </div>

              <div className="col-span-1 flex flex-col justify-start items-end p-2">
                <p className="text-primary text-lg font-bold">{item.quantity}x</p>
                <p className="text-primary text-lg font-bold">₹ {item.price}</p>
              </div>
            </div>
          );
        })}

        <div className="text-lg font-normal">
          <div className="flex justify-between m-2">
            <p>Subtotal</p>
            <p className="text-slate-300">₹ 750</p>
          </div>
          <div className="flex justify-between m-2">
            <p>Shipping</p>
            <p className="text-slate-300">₹ 50</p>
          </div>
          <div className="flex justify-between m-2">
            <p>Discount</p>
            <p className="text-slate-300">₹ 50</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between m-2">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold text-primary">₹ 800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
