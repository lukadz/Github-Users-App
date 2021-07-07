import { useState } from "react";
import { userSignUp } from "../../api/auth";
import { useHistory } from "react-router-dom";
import ROUTES from "../../consts/index";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const history = useHistory();

  function clickSignUp(e) {
    e.preventDefault();
    userSignUp(user)
      .then(() => history.push(ROUTES.PAGE_SIGN_IN, { success: true }))
      .catch(() => console.log(user));
  }

  return (
    <form className={styles.all}>
      <div className={styles.box}>
        <div>
          <label htmlFor="username" className={styles.inputs}>
            Username
            <input
              className={styles.lables}
              value={user.username}
              type="text"
              id="username"
              name="username"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="firstName" className={styles.inputs}>
            First Name
            <input
              className={styles.lables}
              value={user.firstName}
              type="text"
              id="firstName"
              name="firstName"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName" className={styles.inputs}>
            Last Name
            <input
              className={styles.lables}
              value={user.lastName}
              type="text"
              id="lastName"
              name="lastName"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="email" className={styles.inputs}>
            Email
            <input
              className={styles.lables}
              value={user.email}
              type="email"
              id="email"
              name="email"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="birthDate" className={styles.inputs}>
            Date Of Birth
            <input
              className={styles.lables}
              value={user.birthDate}
              type="date"
              id="birthDate"
              name="birthDate"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password" className={styles.inputs}>
            Password
            <input
              className={styles.lables}
              value={user.password}
              type="password"
              id="password"
              name="password"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <button
          className={styles.button}
          type="submit"
          onClick={(e) => clickSignUp(e)}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
