import React from "react";
import Navigation from "../feedback_assets/Navigation";
import classes from "./NewFeedbackForm.module.css";
import IconPlus from "../../../assets/shared/icon-new-feedback.svg";
import IconArrowDown from "../../../assets/shared/arrow-down.svg";
//will be used when we switch the state in the category field
import IconArrowUp from "../../../assets/shared/icon-arrow-up.svg";
import { useContext, useState } from "react";
import AllContext from "../../context/AllContext";
import DropdownMenu from "./DropdownMenu";
import { v4 as uuidv4 } from "uuid";

function NewFeedbaclForm() {
  //retrieving needed values from the API context
  const {
    createFeedback,
    changeDropdownState,
    dropdown,
    redirectHome,
    text,
    mutateCategory,
  } = useContext(AllContext);

  //inititializing the data to be updated when typing into the fiels
  const [formFields, setFormFields] = useState({
    id: 0,
    title: "",
    category: text, //I have to do this so that what ever is in category field is put in
    description: "",
    upvotes: 0,
    status: "",
    comments: [],
  });

  //updates the values of the title, category and feedbackmdetail with one function in the form fields

  const handleFormInputChanges = (e) => {
    setFormFields((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  //this is for submitting a the feedback form
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = formFields;
    obj.id = uuidv4();
    console.log(formFields);
    createFeedback(formFields);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <img src={IconPlus} alt="img" className={classes.img} />

        <h2 className={classes.heading}>Create New Feedback</h2>
        <form autoComplete="off" onSubmit={onSubmit}>
          <div>
            <label htmlFor="title" className={classes.labels}>
              Feedback Title
            </label>
            <p>Add a short, descriptive headline</p>
            <input
              type="text"
              id="title"
              value={formFields.title}
              onChange={handleFormInputChanges}
            />
          </div>
          <div className={classes.categoryDiv}>
            <label htmlFor="category" className={classes.labels}>
              Category
            </label>
            <p>Choose a category for your feedback</p>
            <img
              src={dropdown ? IconArrowDown : IconArrowUp}
              alt="img"
              className={classes.dropDownImage}
            />
            <input
              type="text"
              id="category"
              onClick={changeDropdownState}
              value={text}
              onChange={handleFormInputChanges}
            />
          </div>
          <div>
            <label htmlFor="description" className={classes.labels}>
              Feedback Detail
            </label>
            <p>
              Include any specific comments on what should be improved, added,
              etc
            </p>
            <input
              type="text"
              id="description"
              className={classes.lastInput}
              style={{ height: "57px", marginBottom: "15px" }}
              value={formFields.description}
              onChange={handleFormInputChanges}
            />
          </div>
          <div className={classes.btnContainer}>
            <div className={classes.emptyDiv}></div>
            <button className={classes.cancelBtn} onClick={redirectHome}>
              Cancel
            </button>
            <button type="submit" className={classes.addBtn}>
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewFeedbaclForm;
