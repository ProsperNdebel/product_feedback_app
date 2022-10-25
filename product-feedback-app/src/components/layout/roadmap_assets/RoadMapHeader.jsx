import React from "react";
import classes from "./RoadMapHeader.module.css";
import IconBackArrow from "../../../assets/shared/icon-arrow-left.svg";
import { useContext } from "react";
import AllContext from "../../context/AllContext";
function RoadMapHeader() {
  const { redirectHome, redirectToNewFeedback } = useContext(AllContext);
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <p onClick={redirectHome}>
          <span>
            <img src={IconBackArrow} alt="" />
          </span>
          Go back
        </p>
        <h4>Roadmap</h4>
      </div>
      <button className={classes.btn} onClick={redirectToNewFeedback}>
        + Add Feedback
      </button>
    </div>
  );
}

export default RoadMapHeader;
