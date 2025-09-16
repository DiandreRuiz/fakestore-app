import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import AddJunkForm from "./components/AddJunkForm";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:productId" element={<ProductDetails />}></Route>
                <Route path="/add-junk" element={<AddJunkForm />}></Route>
            </Routes>
        </>
    );
}

export default App;
