import "./App.css";
import CrocsList from "./components/CrocsList/CrocsList";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import CrocCardId from "./components/CrocCardId/CrocCardId";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crocs-list" element={<CrocsList />} />
        <Route path="/croc/:id" element={<CrocCardId />} />
      </Routes>
    </div>
  );
}

export default App;
