import { useState } from "react";
import { useAuth } from "../../context/AuthContexts";
import styles from "./signInForm.module.css";
import ROUTES from "../../consts/index";
import { Link } from "react-router-dom";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function clickSignIn(e) {
    e.preventDefault();
    login({ username, password }).then((data) => console.log(data));
  }

  return (
    <div className={styles.some}>
      <form className={styles.form}>
        <div>
          <label htmlFor="username" className={styles.inputs}>
            Username
            <input
              value={username}
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password" className={styles.inputs}>
            Password
            <input
              value={password}
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button
          className={styles.button}
          type="submit"
          onClick={(e) => clickSignIn(e)}
        >
          Log In
        </button>
        <Link to={ROUTES.PAGE_SIGN_UP}>
          <button className={styles.button}>Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default SignInForm;
