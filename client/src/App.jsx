import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Outlet />
      </>
    </div>
  );
}

export default App;
