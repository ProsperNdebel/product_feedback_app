import React from "react";
import classes from "./Navigation.module.css";
import { useContext } from "react";
import AllContext from "../../context/AllContext";
import { Link } from "react-router-dom";
import IconArrowLeft from "../../../assets/shared/icon-arrow-left.svg";
function Navigation() {
  const { redirectEditFeedback, redirectHome } = useContext(AllContext);
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftWing} onClick={redirectHome}>
        <img src={IconArrowLeft} alt="img" />
        <span>Go back</span>
      </div>
      <button className={classes.btn} onClick={redirectEditFeedback}>
        Edit Feedback
      </button>
    </div>
  );
}

export default Navigation;
