import React from "react";
import classes from "./DropdownMenu.module.css";
import { useContext } from "react";
import AllContext from "../../context/AllContext";
import IconCheck from "../../../assets/shared/icon-check.svg";
function DropdownMenu() {
  const { dropdown, mutateCategory } = useContext(AllContext);
  return (
    <div className={classes.wrapper} style={{ display: dropdown || "none" }}>
      <p onClick={mutateCategory}>
        Feature <img src={IconCheck} alt="img" />
      </p>
      <p onClick={mutateCategory}>UI</p>
      <p onClick={mutateCategory}>UX</p>
      <p onClick={mutateCategory}>Enhancement</p>
      <p onClick={mutateCategory}>Bug</p>
    </div>
  );
}

export default DropdownMenu;
