import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const categories = [
  {
    name: "Indoor Favorites",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 2,
        name: "Monstera Deliciosa",
        price: 28,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1601176219373-a88e4ab82b0b?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  {
    name: "Low-Light Plants",
    plants: [
      {
        id: 4,
        name: "ZZ Plant",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 5,
        name: "Pothos",
        price: 16,
        image:
          "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 6,
        name: "Calathea",
        price: 26,
        image:
          "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  {
    name: "Tropical Collection",
    plants: [
      {
        id: 7,
        name: "Bird of Paradise",
        price: 35,
        image:
          "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 8,
        name: "Rubber Plant",
        price: 30,
        image:
          "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 9,
        name: "Areca Palm",
        price: 27,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80"
      }
    ]
  }
];

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartIds = new Set(
    cartItems.map((item) => item.id)
  );

  return (
    <main className="page-container">
      <h1 className="page-title">Our Plants</h1>

      <p className="page-subtitle">
        Choose from our collection of beautiful plants
        for your home.
      </p>

      {categories.map((category) => (
        <section
          className="category"
          key={category.name}
        >
          <h2 className="category-title">
            {category.name}
          </h2>

          <div className="product-grid">
            {category.plants.map((plant) => {
              const added = cartIds.has(plant.id);

              return (
                <article
                  className="product-card"
                  key={plant.id}
                >
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />

                  <div className="product-info">
                    <h3 className="product-name">
                      {plant.name}
                    </h3>

                    <p className="product-price">
                      ${plant.price.toFixed(2)}
                    </p>

                    <button
                      className="add-button"
                      disabled={added}
                      onClick={() =>
                        dispatch(addItem(plant))
                      }
                    >
                      {added
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}