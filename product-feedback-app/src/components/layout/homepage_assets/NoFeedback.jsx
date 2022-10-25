import React from "react";
import classes from "./NoFeedback.module.css";
import NoFeedbackIcon from "../../../assets/suggestions/illustration-empty.svg";

function NoFeedback() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <img src={NoFeedbackIcon} alt="img" className={classes.img} />
        <h4>There is no feedback yet</h4>
        <p className={classes.descriptive}>
          Got a suggestion? Found a bug that needs to be squashed?
          <br />
          We love hearing about new ideas to improve our app
        </p>
        <button className={classes.btn}>+ Add Feedback</button>
      </div>
    </div>
  );
}

export default NoFeedback;
