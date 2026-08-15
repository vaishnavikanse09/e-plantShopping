# Paradise Nursery

Paradise Nursery is a React-based houseplant shopping application. It allows users to browse plants, add them to a shopping cart, change quantities, remove items, and view the total cost.

## Features

- Landing page with company information and background image
- Product listing with three plant categories
- Six unique plants
- Add to Cart functionality
- Dynamic cart quantity in the navigation bar
- Redux Toolkit shopping cart state management
- Increase/decrease item quantities
- Delete items from cart
- Total item count and total cost
- Continue Shopping and Checkout buttons

## Technologies

- React
- Vite
- Redux Toolkit
- React Redux
- CSS

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Project structure

- `src/App.jsx` - Main application and landing page
- `src/App.css` - Application styling and landing-page background
- `src/components/AboutUs.jsx` - Company information
- `src/components/ProductList.jsx` - Product listing
- `src/components/CartItem.jsx` - Shopping cart page
- `src/components/Header.jsx` - Navigation header
- `src/redux/CartSlice.jsx` - Redux shopping cart slice
- `src/redux/store.js` - Redux store configuration
