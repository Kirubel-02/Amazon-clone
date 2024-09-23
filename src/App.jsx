import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
function App() {
  const [user, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
