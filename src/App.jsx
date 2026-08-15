import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home({ onGetStarted }) {
  return (
    <main className="landing-page background-image">
      <div className="landing-overlay">
        <section className="hero-card">
          <p className="eyebrow">Bring Nature Home</p>

          <h1>Welcome to Paradise Nursery</h1>

          <AboutUs />

          <button
            className="primary-button"
            onClick={onGetStarted}
          >
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowProducts(true);
    navigate("/plants");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home onGetStarted={handleGetStarted} />
          }
        />

        <Route
          path="/plants"
          element={
            <>
              <Header />
              {showProducts ? (
                <ProductList />
              ) : (
                <ProductList />
              )}
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartItem />
            </>
          }
        />

        <Route
          path="*"
          element={
            <Home onGetStarted={handleGetStarted} />
          }
        />
      </Routes>
    </>
  );
}