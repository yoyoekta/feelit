import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/home";
import Admin from "./components/admin";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Explore from "./components/explore";
import Contact from "./components/contact";
import Product from "./components/product";
import OrderDetails from "./components/orderDetails";
import Users from "./components/admin/Users";
import Products from "./components/admin/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "./app/slices/authSlice";
import { setCart } from "./app/slices/cartSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const cart = localStorage.getItem("cart");
    if (user) {
      dispatch(setCredentials({ user: JSON.parse(user) }));
    }
    if (cart) {
      dispatch(setCart({ cart: JSON.parse(cart) }));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Admin />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/explore/:id" element={<Product />} />
        <Route path="/payment/info" element={<OrderDetails />} />
        <Route path="/payment/gateway" element={<OrderDetails />} />
        <Route path="/payment/confirmation" element={<OrderDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
