import React from "react";
import { useDeleteproductMutation } from "../../../app/api/adminApi";

const DeleteProduct = ({ id, overlayOpen, closeOverlay }) => {
  const [deleteproduct] = useDeleteproductMutation(id);
  console.log(id);

  const handleDelete = async () => {
    try {
      const product = await deleteproduct(id);
      console.log(product);
      closeOverlay();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute -inset-8 bg-grey opacity-75"></div>

      {/* Dialog */}
      <div className="w-1/4 mx-auto relative p-2 bg-slate-700 text-color rounded-xl">
        <div className="my-1">
          <div className="flex flex-col space-y-8 m-4">
            <h1 className="text-xl font-semibold">
              Are you sure to delete this product?
            </h1>
            <div className="flex justify-end space-x-4 mr-4">
              <button
                className="text-xl font-semibold bg-color text-grey p-2 rounded-lg"
                onClick={() => closeOverlay()}
              >
                Cancel
              </button>
              <button
                className="text-xl font-semibold bg-red-500 text-white p-2 rounded-lg"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
