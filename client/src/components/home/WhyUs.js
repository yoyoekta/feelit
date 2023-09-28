import React from "react";
import {FaTag, FaTruckFast} from "react-icons/fa6"

const FeatBrands = () => {
  return (
    <div className="bg-secondary sm:pb-10">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl font-serif sm:my-10">
          <span className="text-primary font-serif">Why</span> Us?
        </h1>
        <div className="flex flex-col sm:flex-row my-4 items-center text-grey font-medium">

          <div className="basis-1/3 flex flex-col items-center">
            <div className="flex-1 p-2 flex flex-col items-center">
              <div className="rounded-full bg-primary h-20 w-20 sm:h-40 sm:w-40 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M26 19a1 1 0 0 0-.11-.46 9.48 9.48 0 0 0-5.9-6.4A.5.5 0 0 0 20 12v-2a1 1 0 0 0-1-1V7.84l1.82 1a2.66 2.66 0 0 0 1.33.36 2.71 2.71 0 0 0 1.34-.37A3.17 3.17 0 0 0 25 6.12a3.15 3.15 0 0 0-1.51-2.75 2.63 2.63 0 0 0-2.67 0l-.32.18a1 1 0 0 0-.37 1.36 1 1 0 0 0 1.37.38l.31-.19a.65.65 0 0 1 .67 0 1.15 1.15 0 0 1 .52 1 1.15 1.15 0 0 1-.52 1 .62.62 0 0 1-.67 0L19 5.54V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h-1a1 1 0 0 0 0 2h1v2a1 1 0 0 0-1 1v2a.7.7 0 0 0 0 .14 9.45 9.45 0 0 0-4.39 3.27 1 1 0 0 0 .22 1.39 1 1 0 0 0 1.39-.21 7.51 7.51 0 0 1 3.5-2.59h6.56a7.5 7.5 0 0 1 4.18 3.77 15.77 15.77 0 0 0-4.67.25 16.36 16.36 0 0 0-3.18 1.06 13.88 13.88 0 0 1-2.82.94 14.07 14.07 0 0 1-4.94.1 8.52 8.52 0 0 1 .15-.88 1 1 0 1 0-1.94-.48A9.44 9.44 0 0 0 12.23 30a1.13 1.13 0 0 0 .32.05h6.9a1.13 1.13 0 0 0 .32-.05A9.65 9.65 0 0 0 22 28.83c.21-.14.41-.29.6-.44a9.23 9.23 0 0 0 1.12-1.05A9.39 9.39 0 0 0 26.2 21a9.52 9.52 0 0 0-.2-2zM15 4h2v5h-2zm-1 8v-1h4v1zm8.26 14a7.65 7.65 0 0 1-.88.83c-.16.12-.31.23-.48.34a7.29 7.29 0 0 1-1.62.83h-6.56a7.46 7.46 0 0 1-4.83-5.86 16.08 16.08 0 0 0 2.17.16 15.58 15.58 0 0 0 3.15-.3 16.48 16.48 0 0 0 3.17-1.06 14.64 14.64 0 0 1 2.83-.94 13.9 13.9 0 0 1 4.91-.1 8.32 8.32 0 0 1 .08 1.1 7.43 7.43 0 0 1-1.94 5z"
                    style={{ fill: "#f1f1f1" }}
                  />
                </svg>
              </div>

              <div className="flex-1 flex flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-center sm:p-5 sm:m-5 space-y-2">
                <h3 className=" text-primary text-xl sm:text-2xl font-serif font-semibold">
                  Fragrance for Everyone
                </h3>
                <p>
                  We offer a wide variety of categories to choose from.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/3 flex flex-col items-center">
            <div className="flex-1 p-2 flex flex-col items-center">
              <div className="rounded-full bg-primary h-20 w-20 sm:h-40 sm:w-40 p-6 sm:p-8">
                <FaTruckFast className="text-color text-4xl sm:text-8xl p-auto" />
              </div>

              <div className="flex-1 flex flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-center sm:p-5 sm:m-5 space-y-2">
                <h3 className=" text-primary text-xl sm:text-2xl font-serif font-semibold">
                  Fast Delivery
                </h3>
                <p>
                  We are known for our fast product delivery services.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/3 flex flex-col items-center">
            <div className="flex-1 p-2 flex flex-col items-center">
              <div className="rounded-full bg-primary h-20 w-20 sm:h-40 sm:w-40 p-4 sm:p-8">
                <FaTag className="text-color text-4xl sm:text-8xl rotate-90" />
              </div>

              <div className="flex-1 flex flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-center sm:p-5 sm:m-5 space-y-2">
                <h3 className=" text-primary text-xl sm:text-2xl font-serif font-semibold">
                  Best Deals
                </h3>
                <p>
                  We offer best deals suitable for your luxury demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatBrands;
