import React from "react";
import Navigation from "../feedback_assets/Navigation";
import classes from "./EditFeedbackForm.module.css";
import IconEdit from "../../../assets/shared/icon-edit-feedback.svg";
import IconArrowDown from "../../../assets/shared/arrow-down.svg";
//will be used when we switch the state in the category field
import IconArrowUp from "../../../assets/shared/icon-arrow-up.svg";
import { useContext, useState } from "react";
import AllContext from "../../context/AllContext";
import DropdownMenu2 from "../newfeedback_assets/DropdownMenu2";
import StatusDropdown from "../universal_assets/StatusDropdown";
import { getByTitle } from "@testing-library/react";
function EditFeedbackForm() {
  //getting the item to edit and retrieving its fields
  const {
    openFeedback,
    openId,
    updateFeedback,
    setFeedData,
    feedData,
    setDropdown,
    text2,
    mutateCategory2,
  } = useContext(AllContext);
  const {
    redirectHome,
    dropdown,
    changeDropdownState,
    updateStat,
    updateStatVis,
    redirectComments,
  } = useContext(AllContext);

  const [formFields, setFormfields] = useState(openFeedback);

  //handle changes to the fields of the update form
  const onChange = (e) => {
    setFormfields((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
    setFeedData(formFields);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //updating the comments
    updateFeedback(openId, formFields);
    //returning to the feedback detail page
    //update the state of what is to be shown in the Feedback item at the comments

    //redirectComments();
  };

  //destructure the formfields to get the to prefill the form
  const { title, category, status, description } = formFields;

  return (
    <div className={classes.wrapper} style={{ position: "relative" }}>
      <img src={IconEdit} alt="img" className={classes.img} />

      <h2 className={classes.heading}>Editing 'Add a dark theme option'</h2>
      <form autoComplete="off" onSubmit={onSubmit}>
        {/*autocomplete prevents form from giving sugesstions */}
        <div>
          <label htmlFor="title" className={classes.labels}>
            Feedback Title
          </label>
          <p>Add a short, descriptive headline</p>
          <input type="text" id="title" onChange={onChange} value={title} />
        </div>
        <div className={classes.categoryDiv}>
          <label htmlFor="category" className={classes.labels}>
            Category
          </label>
          <p>Choose a category for your feedback</p>
          <img
            src={IconArrowDown}
            alt="img"
            className={classes.dropDownImage}
          />
          <input
            type="text"
            id="category"
            placeholder="Feature"
            onClick={changeDropdownState}
            onChange={onChange}
            value={category && text2} //this has to be dynamic
          />
        </div>
        <div
          className={classes.categoryDiv}
          style={{ zIndex: "0", position: "relative" }}
        >
          <label htmlFor="category" className={classes.labels}>
            Update Status
          </label>
          <p>Change feedback state</p>
          <img
            src={IconArrowDown}
            alt="img"
            className={classes.dropDownImage}
          />
          <input
            type="text"
            id="status"
            placeholder="Planned"
            onClick={updateStatVis}
            onChange={onChange}
            value={status}
          />
        </div>

        <div>
          <label htmlFor="detail" className={classes.labels}>
            Feedback Detail
          </label>
          <p>
            Include any specific comments on what should be improved, added, etc
          </p>
          <input
            type="text"
            id="description"
            className={classes.lastInput}
            style={{ height: "57px", marginBottom: "15px" }}
            onChange={onChange}
            value={description}
          />
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.delBtn}>Delete</button>
          <div>
            <button className={classes.cancelBtn} onClick={redirectHome}>
              Cancel
            </button>
            <button type="submit" className={classes.addBtn}>
              Add Feedback
            </button>
          </div>
        </div>
      </form>

      {dropdown && <DropdownMenu2 />}
      {updateStat && <StatusDropdown />}
    </div>
  );
}

export default EditFeedbackForm;
