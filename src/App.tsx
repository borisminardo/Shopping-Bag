import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ShoppingBag from "./components/shopping-bag/ShoppingBag";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
function App() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const handleLogin = (username: string, password: string) => {
    setUsername(username);
    setLogged(true);
  };
  AOS.init();
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      {/**  {!logged ? <LoginFrom handleLogin={handleLogin} /> : null}
      {logged ? (
        <Header userName={username} onLogout={() => setLogged(false)} />
      ) : null}
      {logged ? <ShoppingBag /> : null}*/}
      <ShoppingBag />
    </div>
  );
}

export default App;
