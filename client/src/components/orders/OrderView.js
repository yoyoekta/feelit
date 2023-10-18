import React from "react";
import NavBar from "../layout/Navbar";
import { useGetorderByIdQuery } from "../../app/api/userApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderView = () => {
  const id = useParams();
  const user = useSelector((state) => state.auth.user);
  const { data: orderDetails, isLoading } = useGetorderByIdQuery(id.id);
  console.log(orderDetails?.order);

  return (
    <div className="bg-bgcolor">
      <NavBar />

      <div className="min-h-screen flex flex-col text-white ">
        <div className="m-10">
          <div className="flex flex-row justify-between space-x-12 p-8">
            {isLoading ? (
              <h3 className="text-xl font-semibold text-color">Loading...</h3>
            ) : (
              <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
                <h1 className="text-4xl font-semibold text-primary">
                  Order ID : {orderDetails.order._id}
                </h1>
                <hr className="border-2 border-primary" />
                <div className="p-4 my-4 bg-secondary rounded-md">
                  <div className="flex justify-between items-center pb-4 border-b-2 border-primary">
                    <h3 className="text-xl font-semibold text-primary">
                      Payment Method
                    </h3>
                    <h3 className="text-xl font-semibold text-primary">Card</h3>
                  </div>
                  <div className="flex flex-col justify-between py-4 border-b-2 border-primary">
                    <h3 className="text-xl font-semibold text-primary">
                      Shipping Address
                    </h3>
                    <h3 className="text-xl font-semibold text-grey">
                      {orderDetails.order.address}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3 pt-4">
                    <h3 className="text-xl font-semibold text-primary">
                      Items Ordered
                    </h3>
                    {orderDetails?.order?.items?.map((item, index) => {
                      return (
                      <div
                        className="grid grid-cols-8  text-black rounded-md "
                        key={index}
                      >
                        <div className="col-span-1 p-2 pr-0">
                          <img
                            src={item.image}
                            alt="image"
                            className="rounded-md h-24 w-24"
                          ></img>
                        </div>

                        <div className="col-span-6 flex flex-col p-2 pl-4">
                          <p className="font-bold text-lg">{item.name}</p>
                          <p className="text-slate-500 text-base font-medium">
                            {item.brand}
                          </p>
                          <p className="text-slate-500 text-base ">{item.size} ml</p>
                        </div>

                        <div className="col-span-1 flex flex-col justify-start items-end p-2">
                          <p className="text-primary text-lg font-bold">
                            {item.quantity}x
                          </p>
                          <p className="text-primary text-lg font-bold">
                            ₹ {item.price}
                          </p>
                        </div>
                      </div>
                    )})}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderView;
