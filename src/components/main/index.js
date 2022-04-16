import React, { useState } from "react";
import styles from "./styles.module.css";
import Status from "./status";
import User from "./user";
import work from "../../assets/images/icon-work.svg";
import play from "../../assets/images/icon-play.svg";
import study from "../../assets/images/icon-study.svg";
import exercise from "../../assets/images/icon-exercise.svg";
import social from "../../assets/images/icon-social.svg";
import selfCare from "../../assets/images/icon-self-care.svg";

const records = {
  daily: [
    {
      id: 0,
      color: "hsl(15, 100%, 70%)",
      icon: work,
      header: "Work",
      hours: "32hrs",
      lastTime: "36hrs",
    },
    {
      id: 1,
      color: "hsl(195, 74%, 62%",
      icon: play,
      header: "Play",
      hours: "10hrs",
      lastTime: "8hrs",
    },
    {
      id: 2,
      color: "hsl(348, 100%, 68%)",
      icon: study,
      header: "Study",
      hours: "4hrs",
      lastTime: "7hrs",
    },
    {
      id: 3,
      color: "hsl(145, 58%, 55%)",
      icon: exercise,
      header: "Exercise",
      hours: "4hrs",
      lastTime: "5hrs",
    },
    {
      id: 4,
      color: "hsl(264, 64%, 52%)",
      icon: social,
      header: "Social",
      hours: "5hrs",
      lastTime: "10hrs",
    },
    {
      id: 5,
      color: "--soft-orange-self-care",
      icon: selfCare,
      header: "Self Care",
      hours: "2hrs",
      lastTime: "2hrs",
    },
  ],
  weekly: [
    {
      id: 0,
      color: "hsl(15, 100%, 70%)",
      icon: work,
      header: "Work",
      hours: "32hrs",
      lastTime: "36hrs",
    },
    {
      id: 1,
      color: "hsl(195, 74%, 62%",
      icon: play,
      header: "Play",
      hours: "10hrs",
      lastTime: "8hrs",
    },
    {
      id: 2,
      color: "hsl(348, 100%, 68%)",
      icon: study,
      header: "Study",
      hours: "4hrs",
      lastTime: "7hrs",
    },
    {
      id: 3,
      color: "hsl(145, 58%, 55%)",
      icon: exercise,
      header: "Exercise",
      hours: "4hrs",
      lastTime: "5hrs",
    },
    {
      id: 4,
      color: "hsl(264, 64%, 52%)",
      icon: social,
      header: "Social",
      hours: "5hrs",
      lastTime: "10hrs",
    },
    {
      id: 5,
      color: "--soft-orange-self-care",
      icon: selfCare,
      header: "Self Care",
      hours: "2hrs",
      lastTime: "2hrs",
    },
  ],
  monthly: [
    {
      id: 0,
      color: "hsl(15, 100%, 70%)",
      icon: work,
      header: "Work",
      hours: "32hrs",
      lastTime: "36hrs",
    },
    {
      id: 1,
      color: "hsl(195, 74%, 62%",
      icon: play,
      header: "Play",
      hours: "10hrs",
      lastTime: "8hrs",
    },
    {
      id: 2,
      color: "hsl(348, 100%, 68%)",
      icon: study,
      header: "Study",
      hours: "4hrs",
      lastTime: "7hrs",
    },
    {
      id: 3,
      color: "hsl(145, 58%, 55%)",
      icon: exercise,
      header: "Exercise",
      hours: "4hrs",
      lastTime: "5hrs",
    },
    {
      id: 4,
      color: "hsl(264, 64%, 52%)",
      icon: social,
      header: "Social",
      hours: "3hrs",
      lastTime: "7hrs",
    },
    {
      id: 5,
      color: "--soft-orange-self-care",
      icon: selfCare,
      header: "Self Care",
      hours: "12hrs",
      lastTime: "12hrs",
    },
  ],
};

function Main() {
  const [filterType, setFilterType] = useState("weekly");
  const clickHandler = (filterType) => {
    setFilterType(filterType);
  };

  return (
    <main className={styles.main}>
      <div className={styles.user}>
        <User onFilter={clickHandler} />
      </div>
      <div className={styles.status}>
        {records[filterType].map((card) => (
          <Status
            key={card.id}
            statusBackgroundColor={card.color}
            statusIcon={card.icon}
            header={card.header}
            hours={card.hours}
            lastTime={card.lastTime}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
