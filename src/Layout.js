import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./pages/OrderSummary";
import NoMatch from "./pages/NoMatch";
import Products from "./pages/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default Layout;
