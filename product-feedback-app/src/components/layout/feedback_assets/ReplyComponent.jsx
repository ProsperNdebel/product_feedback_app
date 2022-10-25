import React from "react";
import classes from "./ReplyComponent.module.css";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AllContext from "../../context/AllContext";
import DATA from "../../../data.json";
function ReplyComponent({ comment }) {
  //I pass in the comment as a prop so that I can get the user
  const [text, setText] = useState("");
  const {
    openFeedback,
    setOpenFeeddback,
    data,
    setData,
    feedData,
    setFeedData,
  } = useContext(AllContext);

  const [intComment, setInitComment] = useState(comment);

  //help useEffect run when onSubmit runs
  const [submitHelper, setOnSubmitHelper] = useState(false);
  const comments = feedData.comments; //this array always exists

  //destructure comment to get the user
  const replyTo = comment.user; //that is a nested object

  const onChange = (e) => {
    setText(e.target.value);
  };

  const switchState = () => {
    setOnSubmitHelper((prevState) => {
      return !prevState;
    });
  };

  //useEffect triggered when the comment state changes
  // useEffect(() => {
  //   if (submitHelper) {
  //     setOpenFeeddback((prevState) => {
  //       return { ...prevState, comments: prevState.comments.concat(comment) };
  //     });
  //     setFeedData((prevState) => {
  //       return { ...prevState, comments: prevState.comments.concat(comment) };
  //     });
  //     console.log(comment);
  //     setData(
  //       data.map((feed) =>
  //         feed.id + "" === feedData.id ? { ...feed, comments } : feed
  //       )
  //     );
  //   }
  // }, [submitHelper]);

  const onSubmit = (e) => {
    e.preventDefault();
    //to create a reply I need
    //content, owner of the of comment being replied, user from the json file
    let content = text;
    let { currentUser: user } = DATA;
    //to get the comment to which we are replying  to
    let replyingTo = replyTo;
    let reply = { content, replyingTo, user };
    console.log(reply);
    //Now I need to check if this comment has any replies , if not I have to create it
    let replies = comment.replies;
    if (replies) {
      replies = [...replies, reply];
    } else {
      replies = [reply];
    }

    //Now I update this comment and I have to change this comment's state, then add it as a dependency in the useEffect
    comment = { ...comment, replies };

    //set the state of the comment and see
    setOpenFeeddback((prevState) => {
      return { ...prevState, comments: prevState.comments.concat(comment) };
      // let comments = prevState.comments;
      // comments.map((comm) =>
      //   comm.id + "" === comment.id ? { ...comm, ...comment } : comm
      // );
      // console.log(comments);
      // return { ...prevState, comments };
    });

    // set the data and see
    setData(
      data.map((feed) =>
        feed.id + "" === openFeedback.id ? { ...feed, comments } : feed
      )
    );

    //setComment state, this will trigger the useEffect

    //switchState();
  };
  return (
    <div className={classes.wrapper1}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className={classes.comment}
          style={{ height: "60px", width: "100%" }}
          value={text}
          onChange={onChange}
        />
        <button type="submit" className={classes.btn}>
          Post Reply
        </button>
      </form>
    </div>
  );
}

export default ReplyComponent;
