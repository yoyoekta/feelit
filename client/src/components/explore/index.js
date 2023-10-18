import React, { useState } from "react";
import NavBar from "../layout/Navbar";
import { FaSearch } from "react-icons/fa";
import {
  useGetfilteredProdsQuery,
  useGetproductsQuery,
  useGetproductsbyBrandQuery,
  useGetproductsbyCategoryQuery,
} from "../../app/api/userApi";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFilters } from "../../app/slices/userSlice";
import ProductView from "./ProductView";

const Explore = () => {
  const { data: products, isLoading } = useGetproductsQuery();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const params = new URLSearchParams();

  const searchHandler = (search, products, setSearchResults) => {
    if (search === "") {
      setSearchResults([]);
    }
    if (search === null || search === "") return;
    setSearchResults([]);
    let results = [];
    const pattern = new RegExp(search, "gi");
    for (const product of products.products) {
      const productName = product.name;
      const productCategory = product.category;
      const productBrand = product.brand;
      if (
        productName.match(pattern) ||
        productCategory.match(pattern) ||
        productBrand.match(pattern)
      ) {
        results.push(product);
      }
    }
    setSearchResults(results);
  };

  const handleCategoryFilter = (e) => {
    if (e.target.checked) {
      setFilters((prev) => ({
        ...prev,
        category: [...prev.category, e.target.id],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        category: prev.category.filter((cat) => cat !== e.target.id),
      }));
    }
  };

  const handleBrandFilter = (e) => {
    if (e.target.checked) {
      setFilters((prev) => ({ ...prev, brand: [...prev.brand, e.target.id] }));
    } else {
      setFilters((prev) => ({
        ...prev,
        brand: prev.brand.filter((br) => br !== e.target.id),
      }));
    }
  };

  dispatch(addFilters(filters));
  const { data: filteredProds } = useGetfilteredProdsQuery(filters);

  const currentCategory = queryParams.get("category");
  const currentBrand = queryParams.get("brand");

  const { data: catprods, isLoading: loading } =
    useGetproductsbyCategoryQuery(currentCategory);
  const { data: brandprods, loadBrand } =
    useGetproductsbyBrandQuery(currentBrand);

  // console.log(catprods);

  return (
    <div className="bg-bgcolor min-h-screen">
      <NavBar />
      <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl font-serif sm:my-10 text-secondary">
        <span className="text-primary font-serif">Explore</span> Our Products
      </h1>

      <div className="max-w-7xl mx-auto flex items-center space-x-2 font-bold font-serif text-xl sm:text-2xl lg:text-3xl text-secondary border-2 border-primary rounded-xl p-2 sm:my-10 bg-inherit">
        <input
          type="text"
          placeholder="Find your fragrance type"
          className="w-full outline-none bg-inherit px-4 placeholder:font-medium"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) =>
            searchHandler(e.target.value, products, setSearchResults)
          }
          required
        />
        <FaSearch className="text-color font-medium m-1 left-1" />
      </div>

      <div className="flex gap-2">
        <div className="ml-2 basis-1/5 border-r border-grey-100 text-secondary pl-8">
          <h3 className="text-xl font-bold text-primary">Filters</h3>
          <h4 className="text-lg font-bold mt-4">Categories</h4>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="Perfume"
              onChange={handleCategoryFilter}
            />
            <label for="Perfume">Perfumes</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="Deodorant"
              onChange={handleCategoryFilter}
            />
            <label for="Deodorant">Deodorants</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="Room Freshener"
              onChange={handleCategoryFilter}
            />
            <label for="Room Freshener">Room Fresheners</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="Attar"
              onChange={handleCategoryFilter}
            />
            <label for="Attar">Attars</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="Combo"
              onChange={handleCategoryFilter}
            />
            <label for="Combo">Combos</label>
          </div>

          <h4 className="text-lg font-bold mt-4">Brands</h4>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="AeroCare"
              onChange={handleBrandFilter}
            />
            <label for="AeroCare">AeroCare</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="Viwa"
              onChange={handleBrandFilter}
            />
            <label for="Viwa">Viwa</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="S&P"
              onChange={handleBrandFilter}
            />
            <label for="S&P">S&P</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="OSSA"
              onChange={handleBrandFilter}
            />
            <label for="OSSA">OSSA</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="OSR"
              onChange={handleBrandFilter}
            />
            <label for="OSR">OSR</label>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 accent-primary"
              id="WindSong"
              onChange={handleBrandFilter}
            />
            <label for="WindSong">WindSong</label>
          </div>
        </div>

        <div className="basis-4/5 grid grid-cols-4 text-color justify-center items-center gap-5 space-y-4 lg:space-y-0">
          {currentBrand &&
          filters.category.length === 0 &&
          filters.brand.length === 0 ? (
            loadBrand ? (
              <div> Loading products! </div>
            ) : brandprods?.products?.length > 0 ? (
              brandprods?.products?.map((product, index) => {
                return (
                  <div className="grid grid-cols-1 bg-bgcolor my-4 text-color">
                    <ProductView product={product} key={index} />
                  </div>
                );
              })
            ) : (
              <div>No products found!</div>
            )
          ) : currentCategory &&
            filters.brand.length === 0 &&
            filters.category.length === 0 ? (
            loading ? (
              <div> Loading products! </div>
            ) : catprods?.products?.length > 0 ? (
              catprods?.products?.map((product, index) => {
                return (
                  <div className="grid grid-cols-1 bg-bgcolor my-4 text-color">
                    <ProductView product={product} key={index} />
                  </div>
                );
              })
            ) : (
              <div>No products found!</div>
            )
          ) : isLoading ? (
            <div> Products are getting loaded! </div>
          ) : search?.length > 0 ? (
            searchResults?.length > 0 ? (
              searchResults.map((product, index) => {
                return (
                  <div className="grid grid-cols-1 bg-bgcolor my-4 text-color">
                    <ProductView product={product} key={index} />
                  </div>
                );
              })
            ) : (
              <div> No results found! </div>
            )
          ) : filters.brand.length > 0 || filters.category.length > 0 ? (
            filteredProds?.products?.length > 0 ? (
              filteredProds?.products?.map((product, index) => {
                return (
                  <div className="grid grid-cols-1 bg-bgcolor my-4 text-color">
                    <ProductView product={product} key={index} />
                  </div>
                );
              })
            ) : (
              <div>No results found!</div>
            )
          ) : (
            products?.products?.map((product, index) => {
              return (
                <div className="grid grid-cols-1 bg-bgcolor my-4 text-color">
                  <ProductView product={product} key={index} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
