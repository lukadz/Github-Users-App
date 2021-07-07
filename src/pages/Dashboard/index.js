/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FetchUsers } from "../../api/FetchUsers";
import { useAuth } from "../../context/AuthContexts";
import Card from "../../components/Card";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(20);

  useEffect(() => {
    FetchUsers(count).then((data) => setUsers([...users, data]));
  }, [count]);

  return (
    <div className={styles.background}>
      <div className={styles.container1}>
        {users.length != 0 ? (
          <>
            {users[users.length - 1].map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </>
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
      <div className={styles.button}>
        <button className={styles.load} onClick={() => setCount(count + 20)}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
