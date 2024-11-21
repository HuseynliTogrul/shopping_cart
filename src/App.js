import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/header";
import Heart from "./pages/Heart";

function App() {
  return (
    <div className="App px-5">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/Cart"
          element={<Cart />}
        />
        <Route
          path="/Heart"
          element={<Heart />}
        />
      </Routes>
    </div>
  );
}

export default App;
