import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
    <AppRouter/>
   </>
  );
}

export default App;
