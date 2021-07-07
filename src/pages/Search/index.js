/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FetchEachUser } from "../../api/FetchUsers";
import Card from "../../components/Card";
import styles from "./Search.module.css";

function Search() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState([]);

  function handleClick() {
    FetchEachUser(name).then((data) => setInfo([data]));
  }
  {
    console.log(info);
  }
  return (
    <div className={styles.searching}>
      <input
        className={styles.search}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.button} onClick={handleClick}>
        Search
      </button>
      {info.length != 0 ? (
        <>
          {info.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Search;
