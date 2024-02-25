import "./App.css";
import { Navbar } from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
