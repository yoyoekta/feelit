import React from "react";
import { Link } from "react-router-dom";
import Deodorant from "../../images/Deo.jpeg";
import RoomFreshener from "../../images/RoomFreshener.jpg";
import Combo from "../../images/Combo.jpeg";

const FeatCategories = () => {
  return (
    <div className="bg-secondary sm:pb-10">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl font-serif sm:my-10">
          <span className="text-primary font-serif">Explore</span> Our
          Categories
        </h1>
        <Link to="/explore?category=Perfume">
          <div className="flex flex-col-reverse sm:flex-row bg-bgcolor my-4 border rounded-md text-color cursor-pointer">
            <div className="flex flex-grow flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-left sm:p-5 sm:m-5 space-y-2">
              <h3 className=" text-primary text-xl sm:text-2xl lg:text-4xl font-serif font-semibold">
                Perfumes
              </h3>
              <p className="lg:text-xl">
                Find the best fragrance that suits your style and taste.
              </p>
              <p className="text-secondary font-medium lg:text-xl">
                Price ranging from Rs.50 to Rs.800
              </p>
            </div>
            <div className="flex justify-end p-2">
              <img
                src="https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163109.jpg?size=626&ext=jpg"
                alt="Perfume-img"
                className="border-0 rounded-md md:h-96 md:w-96 md:object-cover object-contain"
              ></img>
            </div>
          </div>
        </Link>

        <Link to="/explore?category=Deodorant">
          <div className="flex flex-col sm:flex-row bg-bgcolor my-12 border rounded-md text-color cursor-pointer">
            <div className="flex justify-start p-2">
              <img
                src={Deodorant}
                alt="Deo-img"
                className="border-0 rounded-md md:h-96 object-contain"
              ></img>
            </div>
            <div className="flex flex-grow flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-left sm:p-5 sm:m-5 space-y-2">
              <h3 className=" text-primary text-xl sm:text-2xl lg:text-4xl font-serif font-semibold">
                Deodorant
              </h3>
              <p className="lg:text-xl">
                Find the best deodorant that suits your style and taste.
              </p>
              <p className="text-secondary font-medium lg:text-xl">
                Price ranging from Rs.150 to Rs.500
              </p>
            </div>
          </div>
        </Link>

        <Link to="/explore?category=Room Freshener">
          <div className="flex flex-col-reverse sm:flex-row bg-bgcolor my-12 border rounded-md text-color cursor-pointer">
            
            <div className="flex flex-grow flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-left sm:p-5 sm:m-5 space-y-2">
              <h3 className=" text-primary text-xl sm:text-2xl lg:text-4xl font-serif font-semibold">
                Room Freshener
              </h3>
              <p className="lg:text-xl">
                Find the best room freshener to freshen the vibes of your place.
              </p>
              <p className="text-secondary font-medium lg:text-xl">
                Price ranging from Rs.150 to Rs.500
              </p>
            </div>

            <div className="p-2 flex justify-end">
              <img
                src={RoomFreshener}
                alt="RommFreshener-img"
                className="border-0 rounded-md md:h-96 object-contain "
              ></img>
            </div>
          </div>
        </Link>

        <Link to="/explore?category=Combos">
          <div className="flex flex-col sm:flex-row bg-bgcolor my-12 border rounded-md text-color cursor-pointer">
            <div className="flex justify-start p-2">
              <img
                src={Combo}
                alt="Deo-img"
                className="border-0 rounded-md md:h-96 md:object-cover md:object-contain"
              ></img>
            </div>
            <div className="flex flex-grow flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-left sm:p-5 sm:m-5 space-y-2">
              <h3 className=" text-primary text-xl sm:text-2xl lg:text-4xl font-serif font-semibold">
                Combos
              </h3>
              <p className="lg:text-xl">
                Find the best combo that suits your style and taste, <br/> It contains a perfume, a deodorant and a roll on.
              </p>
              <p className="text-secondary font-medium lg:text-xl">
                Prices above Rs. 800
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeatCategories;
