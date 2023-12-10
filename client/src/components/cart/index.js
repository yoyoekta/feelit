import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../../app/slices/cartSlice";
import { FaXmark } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [promo, setPromo] = useState(false);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleDelete = (item) => {
    dispatch(deleteFromCart({ product: item.product }));
  };

  const handleMinus = (item) => {
    dispatch(removeFromCart({ product: item.product }));
  };

  const handlePlus = (item) => {
    dispatch(addToCart({ product: item.product }));
  };

  useEffect(() => {
    setSubtotal(cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0));
    setShipping(total ? 50 : 0);
    setDiscount(promo ? 50 : 0);
    setTotal(subtotal + shipping - discount);
  }, [cartItems, promo, total, subtotal, shipping, discount]);

  return (
    <div className="bg-bgcolor">
      <NavBar />

      <div className="min-h-screen flex flex-col text-white ">
        <div className="m-10">
          <div className="flex flex-row justify-between space-x-12 p-8">
            <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
              <h1 className="text-4xl font-semibold text-primary">Your Cart</h1>
              <hr className="border-2 border-black" />
              {cartItems.length === 0 ? (
                <h3 className="text-xl"> Your Cart is empty! </h3>
              ) : (
                <>
                  {cartItems.map((item, index) => {
                    return (
                      <div
                        className="grid grid-cols-5 bg-color text-black rounded-md"
                        key={index}
                      >
                        <div className="col-span-1 p-2 pr-0">
                          <img
                            src={item.image}
                            alt="item-image"
                            className="rounded-md h-full w-full"
                          ></img>
                        </div>

                        <div className="col-span-3 flex flex-col p-2 pl-4">
                          <p className="font-bold text-lg">{item.name}</p>
                          <p className="text-slate-500 text-base font-medium">
                            {item.brand}
                          </p>
                          <p className="text-slate-500 text-base ">
                            {item.size}ml
                          </p>
                          <p className="text-primary text-base font-bold">
                            ₹ {item.price}
                          </p>
                        </div>

                        <div className="col-span-1 flex flex-col items-end p-2 gap-4">
                          <button
                            className="text-grey text-sm font-thin rounded-md p-1"
                            onClick={() => handleDelete(item)}
                          >
                            <FaXmark />
                          </button>
                          <div className="flex gap-2">
                            <button
                              className="bg-secondary text-grey text-sm font-thin rounded-md p-1"
                              onClick={() => handleMinus(item)}
                            >
                              <FaMinus />
                            </button>
                            {item.quantity}
                            <button
                              className="bg-primary text-color text-sm font-thin rounded-md p-1"
                              onClick={() => handlePlus(item)}
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            <div className="h-max flex-1 basis-1/3 border border-primary rounded-lg cursor-pointer text-white">
              <div className="p-4 m-2 flex flex-col space-y-2">
                <h3 className="text-3xl font-semibold text-primary">Cart Total</h3>
                <div className="flex flex-col justify-between space-y-2">
                  <div className="flex justify-between my-4">
                    <div>Subtotal</div>
                    <div>Rs. {subtotal}</div>
                  </div>
                  <hr />
                  <div className="flex flex-col justify-between py-2 space-y-2">
                    <div className="flex justify-between">
                      <div>Shipping</div>
                      <div>Rs. {shipping}</div>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between py-2">
                    <div>Total</div>
                    <div>Rs. {total}</div>
                  </div>
                </div>

                <Link to="/payment/info">
                  <div className="flex flex-row justify-center items-center bg-primary text-white rounded-lg">
                    <p className="p-4 font-medium">Continue to Payment</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
