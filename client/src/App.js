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
import Cart from "./components/cart";
import { setInfo, setPaymentInfo } from "./app/slices/detailsSlice";
import OrdersPage from "./components/orders";
import OrderView from "./components/orders/OrderView";
import Orders from "./components/admin/Orders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const cart = localStorage.getItem("cart");
    const info = sessionStorage.getItem("info");
    const payment = sessionStorage.getItem("payment");
    if (user) {
      dispatch(setCredentials({ user: JSON.parse(user) }));
    }
    if (cart) {
      dispatch(setCart({ cart: JSON.parse(cart) }));
    }
    if (info) {
      dispatch(setInfo({ info: JSON.parse(info) }));
    }
    if (payment) {
      dispatch(setPaymentInfo({ payment: JSON.parse(payment) }));
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
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/explore/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment/info" element={<OrderDetails />} />
        <Route path="/payment/gateway" element={<OrderDetails />} />
        <Route path="/payment/confirmation" element={<OrderDetails />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
