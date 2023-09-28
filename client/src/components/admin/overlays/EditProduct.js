import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useEditproductMutation } from "../../../app/api/adminApi";
import { useGetproductsbyIdQuery } from "../../../app/api/userApi";

const EditProduct = ({ id, overlayOpen, closeOverlay }) => {
  const { data: result, isLoading, error } = useGetproductsbyIdQuery(id);
  const [editproduct] = useEditproductMutation();
  console.log(id);

  const product = result?.product;
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(product.category);
  const [brand, setBrand] = useState(product.brand);

  const onImageChange = (e) => {
    const file = e.target.files[0];
    Transform(file);
  };

  const Transform = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleBrandChange = (e) => {
    const { value } = e.target;
    setBrand(value);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    // const category = e.target[1].value;
    const brand = e.target[2].value;
    const description = e.target[3].value;
    const price = e.target[5].value;
    const size = e.target[6].value;
    const qty = e.target[7].value;

    try {
      const product = await editproduct({
        id,
        name,
        category,
        brand,
        description,
        image,
        price,
        size,
        qty,
      });
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
      <div className="max-w-3xl mx-auto relative p-2 bg-slate-700 text-color rounded-xl w-full">
        <div className="my-1">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex flex-col space-y-4 m-4">
              <div
                className="flex justify-between"
                onClick={() => closeOverlay()}
              >
                <h1 className="text-xl font-semibold">Edit Product</h1>
                <button className="text-xl font-semibold">
                  <FaXmark />
                </button>
              </div>
              <hr className="border-2 border-color" />
              <form onSubmit={handleAdd}>
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between space-x-4">
                    <div className="w-full flex flex-col space-y-2">
                      <label>Product Name</label>
                      <input
                        type="text"
                        placeholder="Enter product name"
                        className="rounded-lg p-2 text-black"
                        value={product.name}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2 flex flex-col space-y-4">
                      <div className="w-full flex flex-col space-y-2">
                        <label>Product Category</label>
                        <select className="rounded-lg p-2 text-black" value={category} onChange={handleCategoryChange}>
                          <option value="none">Select an Option</option>
                          <option value="Perfume">Perfume</option>
                          <option value="Deodorant">Deodorant</option>
                          <option value="Room Freshener">Room Freshener</option>
                          <option value="Attar">Attar</option>
                          <option value="Combos">Combos</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-1/2 flex flex-col space-y-4">
                      <div className="w-full flex flex-col space-y-2">
                        <label>Product Brand</label>
                        <select className="rounded-lg p-2 text-black" value={brand} onChange={handleBrandChange}>
                          <option value="none">Select an Option</option>
                          <option value="AeroCare">AeroCare</option>
                          <option value="Viwa">Viwa</option>
                          <option value="S&P">S&P</option>
                          <option value="OSSA">OSSA</option>
                          <option value="OSR">OSR</option>
                          <option value="WindSong">WindSong</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="w-full flex flex-col space-y-2">
                      <label>Product Description</label>
                      <textarea
                        type="text"
                        placeholder="Enter product description"
                        rows={3}
                        className="rounded-lg p-2 text-black"
                        value={product.description}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div className="w-full flex flex-col space-y-2">
                      <label>Product Image</label>
                      <input
                        type="file"
                        className="rounded-lg p-2"
                        onChange={onImageChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between space-x-4">
                    <div className="w-full flex flex-col space-y-2">
                      <label>Product Price</label>
                      <input
                        type="text"
                        placeholder="Enter product price"
                        className="rounded-lg p-2 text-black"
                        value={product.price}
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                      <label>
                        Size <span className="text-sm">(in ml)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter product size"
                        className="rounded-lg p-2 text-black"
                        value={product.size}
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                      <label>Quantity</label>
                      <input
                        type="text"
                        placeholder="Enter quantity"
                        className="rounded-lg p-2 text-black"
                        value={product.qty}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white text-lg font-semibold rounded-lg mt-6 p-3"
                >
                  Edit Product
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
