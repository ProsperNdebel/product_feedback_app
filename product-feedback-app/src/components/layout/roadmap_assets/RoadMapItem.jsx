import React from "react";
import classes from "./RoadMapItem.module.css";
import CommmentIcon from "../../../assets/shared/icon-comments.svg";
import IconArrowUp from "../../../assets/shared/icon-arrow-up.svg";
// top border of this component should be determind by a prop which chcks whether the ty[e one of the 3
function RoadMapItem({ item, color }) {
  console.log(item);
  return (
    <div
      className={classes.wrapper}
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div className={classes.topWrapper} style={{ alignContent: "start" }}>
        <span
          className={classes.roundedBall}
          style={{ backgroundColor: color }}
        ></span>
        <span>{item.status}</span>
      </div>

      <h4 className={classes.heading}>{item.title}</h4>
      <p className={classes.description}>{item.description}</p>
      <p className={classes.category}>{item.category}</p>
      <div className={classes.bottomLast}>
        <p>
          <img src={IconArrowUp} alt="img" />
          {item.upvotes}
        </p>
        <div className={classes.innerBottomLast}>
          <img src={CommmentIcon} alt="img" />
          <span>2</span>
        </div>
      </div>
    </div>
  );
}

export default RoadMapItem;
