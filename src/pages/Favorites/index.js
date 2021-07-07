import React, { useContext } from "react";
import { useInfo } from "../../context/UserContext";
import FavCard from "../../components/FavCard";
import styles from "./favs.module.css";

function Favorites() {
  const { favorites } = useContext(useInfo);

  return (
    <div className={styles.favs}>
      {favorites.map((item) => (
        <div key={item.username}>
          <FavCard property={item} key={item.id} />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
