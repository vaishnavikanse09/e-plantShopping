import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <Link className="logo" to="/">Paradise Nursery</Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart">
          <ShoppingCart size={21} />
          Cart
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}