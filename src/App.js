import "./App.css";
import { HashRouter, Routes, Route  } from "react-router-dom";
import Materials from "./pages/materials/Materials";
import Cart from "./pages/cart/Cart";

function App() {
 

  return (
    <>
    <HashRouter>
        <Routes>
            <Route path="/" element={<Materials />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </HashRouter>
      
    </>
  );
}

export default App;
