import React from "react";
import classes from "./DropdownMenu.module.css";
import { useContext } from "react";
import AllContext from "../../context/AllContext";
import IconCheck from "../../../assets/shared/icon-check.svg";
function DropdownMenu() {
  const { dropdown } = useContext(AllContext);
  return (
    <div className={classes.wrapper} style={{ display: dropdown || "none" }}>
      <p>
        Feature <img src={IconCheck} alt="img" />
      </p>
      <p>UI</p>
      <p>UX</p>
      <p>Enhancement</p>
      <p>Bug</p>
    </div>
  );
}

export default DropdownMenu;
