import React from "react";
import Navigation from "../layout/feedback_assets/Navigation";
import ActualFeed from "../layout/homepage_assets/ActualFeed.jsx";
import Comment from "../layout/feedback_assets/Comment";
import CommentForm from "../layout/feedback_assets/CommentForm";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AllContext from "../context/AllContext";
//for generating unique ids for replies
import { v4 as uuidv4 } from "uuid";
function FeedbackDetail() {
  //has the data for rendering the feedback along with its comments and replies
  const { feedData, numComments } = useContext(AllContext);
  const comments = feedData.comments;
  //console.log(comments);

  //At first I had used
  // comments = feedData.comments and the state wasnt updating as quickly as possible

  let totalComments = numComments(comments);

  return (
    <div className="commentSection">
      <Navigation />
      <ActualFeed feedData={feedData} />
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#fff",
          width: "80%",
          borderRadius: "5px",
        }}
      >
        <h3
          style={{
            textAlign: "left",
            paddingTop: "5px",
            paddingLeft: "10px",
          }}
        >
          {totalComments} comments
        </h3>
        {comments === undefined ? ( //conditional rendering because sometimes comments will be undefined
          <p>No comments</p>
        ) : (
          comments.map((comment) => {
            const replies = comment.replies;

            return (
              <div>
                <Comment
                  key={comment.id}
                  comment={comment}
                  type="actualComment" //I will use this type as a tool to tell whether the comment I am replying to has a comments array or not
                />

                <div style={{ marginLeft: "40px", width: "95%" }}>
                  {replies ? (
                    replies.map((reply) => {
                      let id = uuidv4();
                      return <Comment key={id} comment={reply} type="reply" />;
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      <CommentForm />
    </div>
  );
}

export default FeedbackDetail;
