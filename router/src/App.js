import { Routes, Route } from "react-router-dom";
import React, { createContext, useState, useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import PortalDemo from "./components/PortalDemo";
import PortalsWorking from "./components/PortalsWorking";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { AuthProvider } from "./components/Auth";
const LazyAbout = React.lazy(() => import("./components/About"));

export const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <AuthProvider>
      <themeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="about"
              element={
                <React.Suspense fallback="Loading....">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="products" element={<Products />}>
              <Route index element={<FeaturedProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<NewProducts />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path=":Id" element={<UserDetails />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <PortalDemo />
          <PortalsWorking />
        </div>
      </themeContext.Provider>
    </AuthProvider>
  );
}

export default App;
