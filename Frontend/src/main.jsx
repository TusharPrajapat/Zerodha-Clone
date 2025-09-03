import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./Landing_Page/home/HomePage";
import Signup from "./Landing_Page/signup/Signup";
import AboutPage from "./Landing_Page/about/AboutPage";
import PricingPage from "./Landing_Page/Pricing/PricingPage";
import ProductPage from "./Landing_Page/products/ProductPage";
import SupportPage from "./Landing_Page/support/SupportPage";
import NavBar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
