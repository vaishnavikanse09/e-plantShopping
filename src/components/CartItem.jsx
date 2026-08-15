import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalCost = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            Add some beautiful plants to your cart.
          </p>

          <Link to="/plants">
            <button className="primary-button">
              Continue Shopping
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-summary">
        <h1>Shopping Cart</h1>

        <p>
          <strong>Total Plants:</strong>{" "}
          {totalQuantity}
        </p>

        <p>
          <strong>Total Cost:</strong>{" "}
          ${totalCost.toFixed(2)}
        </p>
      </div>

      {items.map((item) => (
        <article
          className="cart-row"
          key={item.id}
        >
          <img
            className="cart-image"
            src={item.image}
            alt={item.name}
          />

          <div>
            <h3>{item.name}</h3>

            <p>
              Unit Price: $
              {item.price.toFixed(2)}
            </p>

            <p>
              Item Total:{" "}
              <strong>
                $
                {(
                  item.price * item.quantity
                ).toFixed(2)}
              </strong>
            </p>
          </div>

          <div className="quantity-controls">
            <button
              className="quantity-button"
              aria-label={`Decrease ${item.name}`}
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    change: -1
                  })
                )
              }
            >
              −
            </button>

            <strong>{item.quantity}</strong>

            <button
              className="quantity-button"
              aria-label={`Increase ${item.name}`}
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    change: 1
                  })
                )
              }
            >
              +
            </button>
          </div>

          <button
            className="danger-button"
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </article>
      ))}

      <div className="cart-actions">
        <Link to="/plants">
          <button className="secondary-button">
            Continue Shopping
          </button>
        </Link>

        <button
          className="primary-button"
          onClick={() => alert("Coming Soon")}
        >
          Checkout
        </button>
      </div>
    </main>
  );
}