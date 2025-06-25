# Auction Gallery Project Overview

## Project Information

- **Name**: Auction Gallery
- **Version**: 0.0.1
- **Repository**: [GitHub Link](https://github.com/programming-hero-web-course1/b11a7-auction-gallery-shauncuier)
- **Live Demo**: [Live Link](https://auction-gallery-a7.netlify.app/)

## Project Structure

The project is structured as follows:

```
auction-gallery/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public/
│   ├── auction.json
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── FavItems.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Item.jsx
│   │   ├── Items.jsx
│   │   └── Nav.jsx
│   └── utils/
│       └── toast.js
```

## Key Files and Their Roles

### `package.json`

The `package.json` file defines the project dependencies and scripts:

- **Dependencies**:
  - `@tailwindcss/vite`: Tailwind CSS integration for Vite.
  - `daisyui`: Component library for Tailwind CSS.
  - `react` and `react-dom`: React library for building user interfaces.
  - `react-toastify`: Notification library for React.
  - `remixicon`: Icon library.
  - `tailwindcss`: Utility-first CSS framework.

- **Dev Dependencies**:
  - `@eslint/js`: ESLint parser for modern ECMAScript.
  - `@types/react` and `@types/react-dom`: TypeScript types for React.
  - `@vitejs/plugin-react`: Vite plugin for React.
  - `eslint`: Linting tool for identifying and reporting on patterns in JavaScript.
  - `eslint-plugin-react-hooks`: ESLint plugin for React hooks.
  - `eslint-plugin-react-refresh`: ESLint plugin for React Fast Refresh.
  - `globals`: Global identifiers for JavaScript.
  - `vite`: Next-generation frontend tooling.

- **Scripts**:
  - `dev`: Start the development server.
  - `build`: Build the project for production.
  - `lint`: Lint the project files.
  - `preview`: Preview the production build.

### `vite.config.js`

The `vite.config.js` file configures Vite for the project:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### `index.html`

The `index.html` file serves as the entry point for the HTML structure:

```html
<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <link rel="shortcut icon" href="https://img.icons8.com/?size=80&id=OLf3WK9ioebI&format=png" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Auction Gallery</title>
</head>
<body class="poppins">
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### `src/main.jsx`

The `src/main.jsx` file is the entry point for the React application:

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### `src/App.jsx`

The `src/App.jsx` file defines the main application component:

```javascript
import "remixicon/fonts/remixicon.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Footer from "./components/Footer";
import FavItems from "./components/FavItems";
import { useState, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import { notifyAdded, notifyRemove } from "./utils/toast";

function App() {
  const [favItems, setFavItems] = useState([]);
  const [itemPrice, setItemPrice] = useState("0000");

  const handleItem = useCallback(
    (item) => {
      const isAlreadyAdded = favItems.some((fav) => fav.id === item.id);
      if (!isAlreadyAdded) {
        const newItem = [...favItems, item];
        setFavItems(newItem);
        const newPrice = parseInt(itemPrice) + parseInt(item.currentBidPrice);
        setItemPrice(newPrice);
        notifyAdded();
      }
    },
    [favItems, itemPrice]
  );

  const handleRemoveItem = useCallback(
    (removeItem, id) => {
      const removePrice =
        parseInt(itemPrice) - parseInt(removeItem.currentBidPrice);
      setItemPrice(removePrice);
      const remaining = favItems.filter((item) => item.id !== id);
      setFavItems(remaining);
      notifyRemove();
    },
    [favItems, itemPrice]
  );

  return (
    <>
      <Nav favItems={favItems} />
      <Hero />
      <div className="bg-[#C8D4E960] py-14">
        <div className="w-full px-5 md:max-w-[90%] md:px-0 mx-auto">
          <div className="">
            <h2 className="text-[#0E2954] font-medium text-3xl">
              Active Auctions
            </h2>
            <p className="text-xl mt-2">
              Discover and bid on extraordinary items
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="lg:w-[70%] w-full bg-white rounded-xl">
              <ToastContainer />
              <Items handleItem={handleItem} favItems={favItems}></Items>
            </div>
            <div className="lg:w-[30%] w-full h-full bg-white rounded-xl p-5 mx-auto">
              <FavItems
                favItems={favItems}
                itemPrice={itemPrice}
                handleRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
```

## Components

### `Nav`

The navigation bar component.

### `Hero`

The hero section component.

### `Items`

The component displaying the list of auction items.

### `Footer`

The footer component.

### `FavItems`

The component displaying the favorite items.

## Utilities

### `toast.js`

Utility functions for displaying notifications using `react-toastify`.

## Styling

The project uses Tailwind CSS for styling, integrated via the `@tailwindcss/vite` plugin.

## Conclusion

The Auction Gallery project is a React application built with Vite, utilizing Tailwind CSS for styling and various libraries for functionality. The project is well-structured with clear separation of concerns, making it easy to maintain and extend.
