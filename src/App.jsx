import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:productId" element={<ProductDetails />}></Route>
            </Routes>
        </>
    );
}

export default App;
