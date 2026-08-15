import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

// Calculate the total cost of all plants in the cart
function calculateTotalCartAmount(items) {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// Calculate the total number of plants in the cart
function calculateTotalCartQuantity(items) {
  return items.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

export default function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  // Dedicated functions for cart totals
  const totalCartAmount = calculateTotalCartAmount(items);
  const totalCartQuantity = calculateTotalCartQuantity(items);

  // Increase plant quantity
  const handleIncrease = (id) => {
    dispatch(
      updateQuantity({
        id: id,
        change: 1
      })
    );
  };

  // Decrease plant quantity
  const handleDecrease = (id, quantity) => {
    if (quantity === 1) {
      // Remove the item completely when quantity reaches zero
      dispatch(removeItem(id));
    } else {
      dispatch(
        updateQuantity({
          id: id,
          change: -1
        })
      );
    }
  };

  // Delete plant from cart
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  // Empty cart display
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

      {/* Cart Summary */}
      <div className="cart-summary">
        <h1>Shopping Cart</h1>

        <p>
          <strong>Total Plants:</strong>{" "}
          {totalCartQuantity}
        </p>

        <p>
          <strong>Total Cart Amount:</strong>{" "}
          ${totalCartAmount.toFixed(2)}
        </p>
      </div>

      {/* Cart Items */}
      {items.map((item) => {

        const itemTotal =
          item.price * item.quantity;

        return (
          <article
            className="cart-row"
            key={item.id}
          >

            {/* Plant Thumbnail */}
            <img
              className="cart-image"
              src={item.image}
              alt={item.name}
            />

            {/* Plant Details */}
            <div>
              <h3>{item.name}</h3>

              <p>
                Unit Price: $
                {item.price.toFixed(2)}
              </p>

              <p>
                Quantity: {item.quantity}
              </p>

              <p>
                Item Total:{" "}
                <strong>
                  ${itemTotal.toFixed(2)}
                </strong>
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="quantity-controls">

              <button
                className="quantity-button"
                aria-label={`Decrease ${item.name}`}
                onClick={() =>
                  handleDecrease(
                    item.id,
                    item.quantity
                  )
                }
              >
                −
              </button>

              <strong>
                {item.quantity}
              </strong>

              <button
                className="quantity-button"
                aria-label={`Increase ${item.name}`}
                onClick={() =>
                  handleIncrease(item.id)
                }
              >
                +
              </button>

            </div>

            {/* Delete Button */}
            <button
              className="danger-button"
              onClick={() =>
                handleDelete(item.id)
              }
            >
              Delete
            </button>

          </article>
        );
      })}

      {/* Cart Actions */}
      <div className="cart-actions">

        <Link to="/plants">
          <button className="secondary-button">
            Continue Shopping
          </button>
        </Link>

        <button
          className="primary-button"
          onClick={() =>
            alert("Coming Soon")
          }
        >
          Checkout
        </button>

      </div>

    </main>
  );
}