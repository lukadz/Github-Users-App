import React, { useContext, useEffect, useState } from "react";
import { FetchEachUser, FetchOrgs, FetchRepos } from "../../api/FetchUsers";
import { useInfo } from "../../context/UserContext";
import styles from "./User.module.css";
import ToggleFavorite from "../../components/ToggleFavorite";
import { useParams } from "react-router";

function User() {
  const { userInfo, setUserInfo } = useContext(useInfo);

  const { id } = useParams();

  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (userInfo.username != id) {
      FetchEachUser(id).then((data) =>
        setUserInfo({
          username: data.login,
          url: data.avatar_url,
          followings: data.following,
          followers: data.followers,
        })
      );
      FetchRepos(id).then((data) => setRepos(data));
      FetchOrgs(id).then((data) => setOrgs(data));
    }

    FetchOrgs(userInfo.username).then((data) => setOrgs(data));

    FetchRepos(userInfo.username).then((data) => setRepos(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.margin}>
        <div className={styles.image}>
          <img src={userInfo.url} alt="user" />
        </div>
        <div className={styles.h1s}>
          <h4>username - {userInfo.username}</h4>
          <h4>followers - {userInfo.followers}</h4>
          <h4>followings - {userInfo.followings}</h4>
        </div>
        <div>
          <ToggleFavorite />
        </div>
        <div>
          <h1 className={styles.h1s}>Organisations</h1>
          {orgs.length != 0 ? (
            <div className={styles.imgCont}>
              {orgs.map((item) => (
                <img key={item.avatar_url} src={item.avatar_url} alt="user" />
              ))}
            </div>
          ) : (
            <h1 className={styles.h1s}>loading...</h1>
          )}
        </div>
        <div>
          {repos.length != 0 ? (
            <h3 className={styles.h1s}>
              {" "}
              {repos.map((item) => (
                <div className={styles.h1s} key={item.full_name}>
                  <a href={item.html_url}>{item.full_name}</a>
                </div>
              ))}{" "}
            </h3>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
