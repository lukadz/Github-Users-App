/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FetchEachUser } from "../../api/FetchUsers";
import { useInfo } from "../../context/UserContext";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/index";

function Card({ item }) {
  const [followers, setFollowers] = useState("");

  const [followings, setfollowings] = useState("");

  const { setUserInfo } = useContext(useInfo);

  useEffect(() => {
    FetchEachUser(item.login).then((data) => {
      setFollowers(data.followers), setfollowings(data.following);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={item.avatar_url} alt={"users avatar"} />
      </div>
      <div>Username : {item.login}</div>
      <div>Followers : {followers}</div>
      <div>Followings: {followings}</div>
      <Link
        to={`/user/${item.login}`}
        onClick={() =>
          setUserInfo({
            username: item.login,
            url: item.avatar_url,
            followers: followers,
            followings: followings,
          })
        }
      >
        <div>show more</div>
      </Link>
    </div>
  );
}

export default Card;
