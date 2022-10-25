import React, { useContext, useState } from "react";
import classes from "./ActualFeed.module.css";
import IconArrowUp from "../../../assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../../assets/shared/icon-comments.svg";

import AllContext from "../../context/AllContext";
function ActualFeed({ feedData }) {
  const { redirectComments, data, setFeedData, setData } =
    useContext(AllContext);

  //for updating the upvotes
  const [upvotes, setUpVotes] = useState(feedData.upvotes);
  //for updating the upvote state within the element supposing its btn is click
  const incrementUpVote = () => {
    for (let feed of data) {
      if (feed.id === feedData.id) {
        console.log(feedData.upvotes);
        let upvotes = feedData.upvotes + 1;
        // let upvotes = setUpVotes(feedData.upvotes + 1);
        // setFeedData({
        //   ...feed,
        //   upvotes: upvotes,
        // });
        console.log(upvotes);
        setData((prevState) => {
          return prevState.map((feed) => {
            return feed.id === feedData.id ? { ...feedData, upvotes } : feed;
          });
        });
      }
    }
    console.log(data);
  };

  return (
    <div className={classes.wrapper} id={feedData.id}>
      <div className={classes.leftSide}>
        <div className={classes.upVotes} onClick={() => incrementUpVote()}>
          <img src={IconArrowUp} alt="img" />
          <p>{upvotes}</p>
        </div>
        <div className={classes.middleContent} onClick={redirectComments}>
          <h4>{feedData.title}</h4>
          <p className={classes.description}>{feedData.description}</p>
          <p className={classes.enhance}>{feedData.category}</p>
        </div>
      </div>
      <div className={classes.rightMost} onClick={redirectComments}>
        <img src={CommentIcon} alt="img" />
        <p style={{ margin: 0, fontWeight: "bold" }}>
          {feedData.comments ? feedData.comments.length : 0}
        </p>
      </div>
    </div>
  );
}

export default ActualFeed;
