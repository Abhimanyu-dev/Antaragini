import { useContext, useState } from "react";
import "./signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const SignUp = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"SIGNUP", payload:user})
        navitage("/login")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <Link to="/login">Login?</Link>
        <button type="submit">Sign Up</button>
        {error && <span>Something Went Wrong</span>}
      </form>
    </div>
  );
};

export default SignUp;
