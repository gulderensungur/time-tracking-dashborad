import React from "react";
import styles from "./styles.module.css";
import ellipsis from "../../../assets/images/icon-ellipsis.svg";
function Status(props) {
  return (
    <div
      className={styles.background}
      style={{ backgroundColor: props.statusBackgroundColor }}
    >
      <div className={styles.workImg}>
        <img src={props.statusIcon} />
      </div>

      <div className={styles.statusInfo}>
        <div className={styles.statusHeader}>
          <h3>{props.header}</h3>
          <div className={styles.icon}>
            <img src={ellipsis} />
          </div>
        </div>
        <div className={styles.statusTime}>
          <h2>{props.hours}</h2>
          <p>
            Last Week- <span>{props.lastTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Status;
