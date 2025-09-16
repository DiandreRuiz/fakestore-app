import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import AddJunkForm from "./components/AddJunkForm";
import MyJunk from "./components/MyJunk";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:productId" element={<ProductDetails />}></Route>
                <Route path="/add-junk" element={<AddJunkForm />}></Route>
                <Route path="/my-junk" element={<MyJunk />}></Route>
            </Routes>
        </>
    );
}

export default App;
