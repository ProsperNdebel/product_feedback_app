import React from "react";
import classes from "./Containers.module.css";
function Containers({ children, numItems, type }) {
  return (
    <div className={classes.wrapper}>
      <h4 className={classes.header}>
        {type}({numItems})
      </h4>
      <p className={classes.description}>Ideas prioritize for research</p>
      <div>{children}</div>
    </div>
  );
}

export default Containers;
