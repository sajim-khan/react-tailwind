import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PriceList from "./Components/PriceList/PriceList";
import Dashboard from "./Components/Dashboard/Dashboard";
import BarPhone from "./Components/BarPhone/BarPhone";




function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Navbar></Navbar>
      <h1 className="text-7xl text-purple-700">Hello tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
     <BarPhone></BarPhone>
    </div>
  );
}

export default App;
