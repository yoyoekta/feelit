import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useAdduserMutation } from "../../../app/api/adminApi";

const AddUsers = ({ overlayOpen, closeOverlay }) => {

    const [adduser, {isLoading, error}] = useAdduserMutation();

    const handleAdd = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try{
            const user = await adduser({username, email, password});
            console.log(user);
            closeOverlay();
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute -inset-8 bg-grey opacity-75"></div>

      {/* Dialog */}
      <div className="max-w-3xl mx-auto relative p-2 bg-slate-700 text-color rounded-xl w-full">
        <div className="my-1">
          <div className="flex flex-col space-y-4 m-4">
            <div
              className="flex justify-between"
              onClick={() => closeOverlay()}
            >
              <h1 className="text-xl font-semibold">Add Users</h1>
              <button className="text-xl font-semibold">
                <FaXmark />
              </button>
            </div>
            <hr className="border-2 border-color" />
            <form onSubmit={handleAdd}>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between space-x-4">
                  <div className="w-full flex flex-col space-y-2">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      className="rounded-lg p-2 text-black"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between space-x-4">
                  <div className="w-full flex flex-col space-y-2">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="rounded-lg p-2 text-black"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between space-x-4">
                  <div className="w-full flex flex-col space-y-2">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="rounded-lg p-2 text-black"
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white text-lg font-semibold rounded-lg mt-6 p-3"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
