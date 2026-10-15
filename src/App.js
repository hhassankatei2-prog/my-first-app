import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import Products from "./pages/Products";
import "./App.css";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import Quiz from "./pages/Quiz";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
const App = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
