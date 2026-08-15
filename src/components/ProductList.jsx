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
          "https://loremflickr.com/700/500/snakeplant?lock=1"
      },
      {
        id: 2,
        name: "Monstera Deliciosa",
        price: 28,
        image:
          "https://loremflickr.com/700/500/monstera,plant?lock=2"
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 22,
        image:
          "https://loremflickr.com/700/500/peacelily,plant?lock=3"
      },
      {
        id: 4,
        name: "Spider Plant",
        price: 17,
        image:
          "https://loremflickr.com/700/500/spiderplant?lock=4"
      },
      {
        id: 5,
        name: "Chinese Evergreen",
        price: 25,
        image:
          "https://loremflickr.com/700/500/aglaonema,plant?lock=5"
      },
      {
        id: 6,
        name: "Boston Fern",
        price: 20,
        image:
          "https://loremflickr.com/700/500/bostonfern,plant?lock=6"
      }
    ]
  },

  {
    name: "Low-Light Plants",
    plants: [
      {
        id: 7,
        name: "ZZ Plant",
        price: 24,
        image:
          "https://loremflickr.com/700/500/zzplant?lock=7"
      },
      {
        id: 8,
        name: "Pothos",
        price: 16,
        image:
          "https://loremflickr.com/700/500/pothos,plant?lock=8"
      },
      {
        id: 9,
        name: "Calathea",
        price: 26,
        image:
          "https://loremflickr.com/700/500/calathea,plant?lock=9"
      },
      {
        id: 10,
        name: "Cast Iron Plant",
        price: 23,
        image:
          "https://loremflickr.com/700/500/castironplant?lock=10"
      },
      {
        id: 11,
        name: "Parlor Palm",
        price: 29,
        image:
          "https://loremflickr.com/700/500/parlorpalm,plant?lock=11"
      },
      {
        id: 12,
        name: "Lucky Bamboo",
        price: 15,
        image:
          "https://loremflickr.com/700/500/luckybamboo,plant?lock=12"
      }
    ]
  },

  {
    name: "Tropical Collection",
    plants: [
      {
        id: 13,
        name: "Bird of Paradise",
        price: 35,
        image:
          "https://loremflickr.com/700/500/birdofparadise,plant?lock=13"
      },
      {
        id: 14,
        name: "Rubber Plant",
        price: 30,
        image:
          "https://loremflickr.com/700/500/rubberplant?lock=14"
      },
      {
        id: 15,
        name: "Areca Palm",
        price: 27,
        image:
          "https://loremflickr.com/700/500/arecapalm,plant?lock=15"
      },
      {
        id: 16,
        name: "Fiddle Leaf Fig",
        price: 32,
        image:
          "https://loremflickr.com/700/500/fiddleleaffig,plant?lock=16"
      },
      {
        id: 17,
        name: "Croton",
        price: 21,
        image:
          "https://loremflickr.com/700/500/croton,plant?lock=17"
      },
      {
        id: 18,
        name: "Dieffenbachia",
        price: 26,
        image:
          "https://loremflickr.com/700/500/dieffenbachia,plant?lock=18"
      }
    ]
  }
];

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total number of items in cart
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Get IDs of products already added to cart
  const cartIds = new Set(
    cartItems.map((item) => item.id)
  );

  return (
    <main className="page-container">

      <h1 className="page-title">
        Paradise Nursery Plants
      </h1>

      <p className="page-subtitle">
        Explore our collection of beautiful houseplants.
      </p>

      {/* Dynamic cart quantity */}
      <div className="cart-status">
        Total Items in Cart: {totalCartQuantity}
      </div>

      {/* Product Categories */}
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

              const isAdded = cartIds.has(
                plant.id
              );

              return (
                <article
                  className="product-card"
                  key={plant.id}
                >

                  {/* Plant Thumbnail */}
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />

                  <div className="product-info">

                    {/* Plant Name */}
                    <h3 className="product-name">
                      {plant.name}
                    </h3>

                    {/* Plant Price */}
                    <p className="product-price">
                      ${plant.price.toFixed(2)}
                    </p>

                    {/* Add to Cart */}
                    <button
                      className="add-button"
                      disabled={isAdded}
                      onClick={() =>
                        dispatch(addItem(plant))
                      }
                    >
                      {isAdded
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