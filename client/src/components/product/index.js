import React from "react";
import NavBar from "../layout/Navbar";
import { useParams } from "react-router-dom";
import { useGetproductsbyIdQuery } from "../../app/api/userApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slices/cartSlice";

const Product = () => {
  const id = useParams();
  const dispatch = useDispatch();

  const { data: result, isLoading, error } = useGetproductsbyIdQuery(id.id);
  const product = result?.product;

  const [disable, setDisable] = React.useState(false);
  

  const handleCart = () => {
    const itemToAdd = {
      name: product.name,
      brand: product.brand,
      size: product.size,
      price: product.price,
      quantity: 1,
      image: product.image.url,
      product: product._id,
    }
    dispatch(addToCart(itemToAdd));
  };

  return (
    <div className="bg-bgcolor min-h-screen text-color">
      <NavBar />
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <div> Products are getting loaded! </div>
        ) : (
          <div className="flex flex-col md:flex-row md:my-10 md:space-x-4 space-y-2">
            <div className="flex-1 flex justify-center items-start p-5">
              <img
                src={product.image.url}
                className="h-1/2 md:h-[70vh] rounded-xl"
              />
            </div>
            <div className="flex-1 flex flex-col space-y-2 items-start justify-start p-5">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                  ₹ {product.price}
                </p>
              </div>

              <div className="w-full flex flex-col justify-between pt-5 pb-2">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-medium">
                  Description
                </h1>
                <p className="font-base py-2 text-slate-300 text-justify">
                  {product.description}
                </p>
              </div>

              <div className="w-full flex flex-col justify-between py-2 ">
                <p className="text-lg sm:text-xl lg:text-2xl font-medium pb-2">
                  Size
                </p>
                <div className="flex flex-row items-center space-x-2">
                  <button className="bg-inherit border border-primary text-secondary font-bold py-2 px-4 rounded-full">
                    {product.size}
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col justify-between py-2 ">
                <div className="flex flex-row items-center space-x-4">
                  <button className="bg-primary text-secondary font-semibold py-2.5 px-4 rounded-lg">
                    Buy Now
                  </button>
                  <button
                    className="bg-inherit text-primary border-2 border-primary font-semibold py-2 px-4 rounded-lg"
                    disabled={disable}
                    onClick={() => {
                      handleCart();
                      setDisable(true);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
