import React from "react";
import classes from "./StatusDropdown.module.css";
function StatusDropdown() {
  return (
    <div className={classes.wrapper}>
      <p>Suggestion</p>
      <p>Planned</p>
      <p>In-Progress</p>
      <p>Live</p>
    </div>
  );
}

export default StatusDropdown;
