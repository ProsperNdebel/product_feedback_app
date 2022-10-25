import React from "react";
import classes from "./SortComponent.module.css";
import { useContext } from "react";
import AllContext from "../../context/AllContext";
function SortComponent() {
  const { mutateStatus } = useContext(AllContext);
  return (
    <div className={classes.wrapper}>
      <p onClick={mutateStatus}>Most Upvotes</p>
      <p onClick={mutateStatus}>Least Upvotes</p>
      <p onClick={mutateStatus}>Most Comments</p>
      <p onClick={mutateStatus}>Least Comments</p>
    </div>
  );
}

export default SortComponent;
