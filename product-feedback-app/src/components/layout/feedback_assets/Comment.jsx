import React from "react";
import classes from "./Comment.module.css";
import DummyImage from "../../../assets/user-images/image-anne.jpg";
import ReplyComponent from "./ReplyComponent";
import { useContext, useState } from "react";
import AllContext from "../../context/AllContext";

function Comment({ comment }) {
  const [showForm, setShowForm] = useState(false);
  //puting a conditional for either a reply or actual comment
  //const replies = comment.replies?comment;

  //this function adjusts the visbility of the form
  const revealForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <div className={classes.wrapper}>
        <img src={DummyImage} alt="img" className={classes.img} />
        <div>
          <div className={classes.upper}>
            <p>
              <span className={classes.userName}>{comment.user?.name}</span>
              <br />
              <span className={classes.atUserName}>
                @{comment.user?.username}
              </span>
            </p>
            <p
              className={classes.col}
              onClick={revealForm}
              style={{ position: "absolute", left: "100%" }}
            >
              Reply
            </p>
          </div>
          <p className={classes.descriptive}>
            <span
              style={{
                color: "rgba(173, 31, 234, 1)",
                fontWeight: "bold",
                paddingRight: "5px",
              }}
            >
              {comment.replyingTo ? "@" + comment.replyingTo : ""}
            </span>
            {comment.content}
          </p>
          <div className={classes.nonInherit}>
            {showForm && <ReplyComponent comment={comment} />}{" "}
            {/*I wanna use this  */}
          </div>
          {/* put the reply component */}
        </div>
      </div>
    </>
  );
}

export default Comment;
