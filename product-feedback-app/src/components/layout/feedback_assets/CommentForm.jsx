import React from "react";
import classes from "./CommentForm.module.css";
import { useContext, useState, useEffect } from "react";
import AllContext from "../../context/AllContext";
import { v4 as uuidv4 } from "uuid";
import DATA from "../../../data.json";
import { useNavigate } from "react-router-dom";

function CommentForm() {
  const [leftChars, updateLeftChars] = useState(250);
  const [comment, setComment] = useState("");

  //getting the current user from the original json file
  //get the user for the comment object
  const user = DATA.currentUser;

  const navigate = useNavigate();

  const { openFeedback, setOpenFeeddback, data, setData, openId, setFeedData } =
    useContext(AllContext);

  const onChange = (e) => {
    setComment(e.target.value);
  };

  //updating the charectars in for type
  const remainingChars = () => {
    return 250 - comment.length;
  };

  useEffect(() => {
    setFeedData(openFeedback);
    setData(
      data.map((feedback) => {
        return feedback.id + "" === openId
          ? { ...feedback, ...openFeedback } //this wont work too
          : feedback;
      })
    );
  }, [openFeedback]);

  //submitting the comment: I have to append to the open feedback object's array
  const onSubmit = (e) => {
    e.preventDefault();
    //I wanna first create the new comment and then
    //make sure I add to the comments array in the openFeed
    //then update the data state
    //Step I:generate the id and the comment
    const id = uuidv4();
    const content = comment;

    //if the comment is empty do nothing
    if (!comment) return;
    //create the comment object
    const processedComment = { id, content, user };
    //getting the comments object from the open feedback
    const commentsArr = openFeedback.comments;

    //updating the comments array
    if (commentsArr) {
      //this takes care of the fact that if there are no comments in the current openFeedback we wont get an error of commentsArr is undefined
      var comments = [...commentsArr, processedComment];
    } else {
      var comments = [processedComment]; // I create an array of 1 comments, then on any other runs we execute the first if statement
    }

    //setOpen feedback so the comments are update on all pages that use this state
    setOpenFeeddback({ ...openFeedback, comments });
    //setData with this new open feedback based on the id

    //updatting the feedData for the comments page to update
    // setFeedData((prevState) => {
    //   return { ...prevState, openFeedback };//this wont work because withe the scope of the submit function we are still using the old openFeedback
    // });
    //emptying the form
    setComment("");
  };

  //updatting the feedData for the comments page to update
  //I do this is in the useEffect

  return (
    <div className={classes.wrapper}>
      <h3>Add Comment</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type your comment here"
          onChange={onChange}
          value={comment}
        />
        <div className={classes.lastcontainer}>
          <p className={classes.remainingChars}>
            {remainingChars()} Charectars left
          </p>
          <button type="submit" className={classes.btn}>
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
