import { Routes, Route } from "react-router-dom";
import Produto from "../Pages/Produto/Produto";
import Home from "../Pages/Home/Home";
import ProductPage from "../Pages/Product/ProductPage";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import NotFound from "../Pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cadastrar-produto" element={<Produto />} />
      {/* Rota para 404 - deve ser a última */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
