import React, { useContext, useEffect, useState } from "react";
import { useInfo } from "../../context/UserContext";
import styles from "./togglefav.module.css";

function ToggleFavorite() {
  const { userInfo, favorites, setFavorites } = useContext(useInfo);
  const [isFav, setIsFav] = useState(true);

  useEffect(() => {
    if (
      favorites.filter((item) => item.username == userInfo.username).length > 0
    )
      setIsFav(true);
    else setIsFav(false);
  }, [favorites]);

  function addFavorite() {
    setFavorites((prev) => [
      ...prev,
      { username: userInfo.username, url: userInfo.url },
    ]);
  }

  function removeFavorite() {
    setFavorites((prev) =>
      prev.filter((item) => item.username != userInfo.username)
    );
  }

  return (
    <div>
      {!isFav ? (
        <div>
          <button className={styles.add} onClick={() => addFavorite()}>
            Add to Favorite
          </button>
        </div>
      ) : (
        <div>
          <button className={styles.remove} onClick={() => removeFavorite()}>
            Remove from Favorite
          </button>
        </div>
      )}
    </div>
  );
}

export default ToggleFavorite;
