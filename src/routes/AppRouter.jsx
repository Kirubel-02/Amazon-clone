import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import SignIn from "../Pages/Auth/SignIn";
import Payment from "../Pages/Payment/Payment";
import Cart from "../Pages/Cart/Cart";
import Orders from "../Pages/Orders/Orders";
import Results from "../Pages/Results/Results";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Product from "../components/Product/Product";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<Product />} />

        // TODO: add page not found page
      </Routes>
    </Router>
  );
}

export default AppRouter;
