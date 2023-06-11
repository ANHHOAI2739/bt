import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Id from "./pages/Invoices/Id";
import Productsid from "./pages/Products/Productsid";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/product" element={<Productsid />}></Route>
        <Route path="/invoices" element={<Id />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
