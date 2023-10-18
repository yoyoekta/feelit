import React from "react";
import NavBar from "../layout/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetordersQuery } from "../../app/api/userApi";
import { useSelector } from "react-redux";

const OrdersPage = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user?.email);
  const { data: orders, isLoading } = useGetordersQuery(user?.email);
  console.log(orders);

  return (
    <div className="bg-bgcolor">
      <NavBar />

      <div className="min-h-screen flex flex-col text-white ">
        <div className="m-10">
          <div className="flex flex-row justify-between space-x-12 p-8">
            <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
              <h1 className="text-4xl font-semibold text-primary">
                Your Orders
              </h1>
              <hr className="border-2 border-primary" />
              {isLoading ? (
                <h3 className="text-xl font-semibold text-color">Loading...</h3>
              ) : orders?.orders?.length === 0 ||
                orders?.orders?.length === undefined ? (
                <h3 className="text-xl font-semibold text-color">
                  No orders done yet.
                </h3>
              ) : (
                orders?.orders?.map((order, index) => {
                  return (
                    <div
                      className="p-4 my-4 bg-secondary rounded-md flex justify-between items-center"
                      key={index}
                    >
                      <h3 className="text-xl font-semibold text-primary">
                        Order Id {order._id}
                      </h3>
                      <div className="flex gap-8 items-center">
                        <h3 className="text-xl font-semibold text-primary">
                          ₹ {order.total}
                        </h3>
                        <Link to={"/orders/" + order._id}>
                          <h3 className="text-xl font-semibold text-primary">
                            <FaArrowRight />
                          </h3>
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
