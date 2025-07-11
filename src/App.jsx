import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

import Hero from "./Components/Hero/Hero";
import Offers from "./Components/Offers/Offers";
import Popular from "./Components/Popular/Popular";
import Newsletter from "./Components/NewsLetter/NewsLetter";
import Basic from "./Components/basic/Basic";

import ProtectedRoute from "./ProtectedRoute";

import men_banner from "./assets/banner.jpg";
import women_banner from "./assets/women_banner.avif";
import kids_banner from "./assets/kids_banner.jpg";
import NotFound from "./Pages/NotFound";
import About from "./Pages/FooterPages/About";
import ProductsFooter from "./Pages/FooterPages/ProductsFooter";
import Contact from "./Pages/FooterPages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Route - Only Hero visible */}
        <Route path="/" element={<Hero />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginSignup />} />
        
        {/*Footer Page Route*/}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsFooter />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Route - Home with Offers, Popular, Newsletter */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <div>
                <Hero />
                <Offers />
                <Popular />
                <Newsletter />
              </div>
            </ProtectedRoute>
          }
        />

        {/* Protected Routes */}
        <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>}
        />
        <Route path="/mens" element={<ProtectedRoute><ShopCategory banner={men_banner} category="men" /></ProtectedRoute>}
        />
        <Route path="/womens" element={<ProtectedRoute><ShopCategory banner={women_banner} category="women" /></ProtectedRoute>}
        />
        <Route path="/kids"element={<ProtectedRoute><ShopCategory banner={kids_banner} category="kid" /></ProtectedRoute>}
        />
        <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>}
        />
        <Route path="/product/:productId" element={<ProtectedRoute><Product /></ProtectedRoute>}
        />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}
        />
        <Route path="/basic" element={<ProtectedRoute><Basic /></ProtectedRoute>}
        />
        <Route path="/offers" element={<ProtectedRoute><Offers /></ProtectedRoute>}
        />
        <Route path="*" element={<NotFound />} 
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;