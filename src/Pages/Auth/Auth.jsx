import React, { useState, useContext, useEffect } from "react";
import classes from "./auth.module.css";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import { ClipLoader } from "react-spinners";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
import amazon_letter_logo from "../../assets/images/logo/amazon_letter_logo.png";
import { DataContext } from "../../components/DataProvider/DataProvider";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation(); // Added useLocation hook

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      // Firebase sign-in
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER", // Fixed to use string instead of Type.SET_USER
            user: userInfo.user,
          });

          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER", // Fixed to use string instead of Type.SET_USER
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to="/">
        <img src={amazon_letter_logo} alt="Amazon Logo" />
      </Link>

      {/* Form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#36d7b7" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of use &
          Sale. Please see our Privacy Notice, Cookies Notice, and
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registereButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#36d7b7" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
