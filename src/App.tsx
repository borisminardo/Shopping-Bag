import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingBag from "./components/shoppingbag/ShoppingBag";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <div className="App">
      <ShoppingBag />
    </div>
  );
}

export default App;
