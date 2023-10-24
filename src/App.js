import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/products";
import Cart from "./pages/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="redirect">
                <a href="https://store-phi-one.vercel.app/products">
                  Go to products page!
                </a>
              </div>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
