import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ShoppingBag from "./components/shoppingbag/ShoppingBag";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <ShoppingBag />
    </div>
  );
}

export default App;
