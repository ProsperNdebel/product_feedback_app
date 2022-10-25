import React from "react";
import classes from "./DropdownMenu.module.css";
import { useContext } from "react";
import AllContext from "../../context/AllContext";
import IconCheck from "../../../assets/shared/icon-check.svg";
function DropdownMenu() {
  const { dropdown, mutateCategory2 } = useContext(AllContext);
  return (
    <div className={classes.wrapper} style={{ display: dropdown || "none" }}>
      <p onClick={mutateCategory2}>
        Feature <img src={IconCheck} alt="img" />
      </p>
      <p onClick={mutateCategory2}>UI</p>
      <p onClick={mutateCategory2}>UX</p>
      <p onClick={mutateCategory2}>Enhancement</p>
      <p onClick={mutateCategory2}>Bug</p>
    </div>
  );
}

export default DropdownMenu;
