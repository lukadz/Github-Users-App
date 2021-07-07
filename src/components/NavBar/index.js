import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/index";
import { useAuth } from "../../context/AuthContexts";

function NavBar() {
  const { logout } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Link to={ROUTES.PAGE_DASHBOARD}>
          <h1>Dashboard</h1>
        </Link>
        <Link to={ROUTES.PAGE_SEARCH}>
          <h1>Search</h1>
        </Link>
        <Link to={ROUTES.PAGE_FAVORITE}>
          <h1>Favorite</h1>
        </Link>
      </div>
      <div className={styles.left}>
        <button className={styles.button} onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default NavBar;
