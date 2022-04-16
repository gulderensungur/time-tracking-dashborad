import React from "react";
import styles from "./styles.module.css";
import jeremy from "../../../assets/images/image-jeremy.png";

function User(props) {
  return (
    <div className={styles.main}>
      <div class={styles.menu}>
        <div class={styles.user}>
          <div class={styles.profilePicture}>
            <img src={jeremy} />
          </div>
          <div class={styles.profileName}>
            <span>Report for</span>
            <h2>
              Jeremy <br />
              Robson
            </h2>
          </div>
        </div>
        <div class={styles.filter}>
          <ul>
            <li>
              <p onClick={() => props.onFilter("daily")}>Daily</p>
            </li>
            <li>
              <p onClick={() => props.onFilter("weekly")}>Weekly</p>
            </li>
            <li>
              <p onClick={() => props.onFilter("monthly")}>Monthly</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User;
