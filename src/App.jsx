import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="hero-card">
          <p className="eyebrow">Bring nature home</p>
          <h1>Paradise Nursery</h1>
          <AboutUs />
          <button className="primary-button" onClick={() => navigate("/plants")}>
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/plants"
        element={
          <>
            <Header />
            <ProductList />
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
      <Route path="*" element={<Home />} />
    </Routes>
  );
}