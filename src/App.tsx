import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="wrapper">
        {/* Routes */}
        <Routes>
          <Route path="/" Component=""></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
