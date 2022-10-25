import React from "react";
import classes from "./Header.module.css";
import IconArrowDown from "../../../assets/shared/icon-arrow-down.svg";
import IconSugestions from "../../../assets/suggestions/concept.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AllContext from "../../context/AllContext";
import SortComponent from "../universal_assets/SortComponent";

function Header() {
  const { showSortOptions, displaySort, sortState } = useContext(AllContext);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/newfeedback");
  };
  return (
    <>
      {showSortOptions && <SortComponent />}
      <div className={classes.wrapper}>
        <div className={classes.leftContent}>
          <img src={IconSugestions} alt="img" />
          {/* this will be updated per state later on */}
          <p className={classes.suggestions} style={{ color: "#fff" }}>
            6 suggestions
          </p>
          <div className={classes.sorting} style={{ color: "#fff" }}>
            <span style={{ color: "#fff" }}>Sort by : </span>
            <p style={{ color: "#fff" }}>{sortState}</p>
            <img src={IconArrowDown} alt="dropdwon" onClick={displaySort} />
          </div>
        </div>
        {/**/}
        <button
          onClick={redirect}
          className={classes.btn}
          style={{ fontWeight: "bold" }}
        >
          + Add Feedback
        </button>
      </div>
    </>
  );
}

export default Header;
