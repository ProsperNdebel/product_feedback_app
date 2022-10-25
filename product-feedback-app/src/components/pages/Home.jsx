import React from "react";
import Header from "../layout/homepage_assets/Header";
import ActualFeed from "../layout/homepage_assets/ActualFeed";
import classes from "./Home.module.css";
import Dashboard from "../layout/homepage_assets/Dashboard";
import NoFeedback from "../layout/homepage_assets/NoFeedback";
import AllContext from "../context/AllContext";
import ReplyComponent from "../layout/feedback_assets/ReplyComponent";
import SortComponent from "../layout/universal_assets/SortComponent";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect } from "react";
function Home() {
  const { data, sortState, setData } = useContext(AllContext);
  //this function swaps elements
  function swap(arr, j) {
    let prevEl = arr[j - 1].upvotes;
    let currentEl = arr[j].upvotes;
    console.log(arr);
    while (currentEl < prevEl && j >= 0) {
      arr[j - 1] = arr[j];

      j -= 1;
    }
  }

  //this function arranges the elements as many times as there feedbacks in the array
  function ins_sort(arr) {
    let upvotes = "upvotes";
    let i = 1;

    while (i < arr.length) {
      swap(arr, i);
      i += 1;
    }
  }

  //whenever the sort state changes I wanna run some function that will sort the feedbacks
  // useEffect(() => {
  //   if (sortState === "Most Upvotes") {
  //     ins_sort(changeArr);
  //   }
  // }, [sortState]);

  return (
    <div className={classes.body}>
      <Dashboard />
      <div>
        <Header />
        {data.length ? (
          <>
            {data.map((feed) => {
              return <ActualFeed key={feed.id} feedData={feed} id={feed.id} />;
            })}
          </>
        ) : (
          <NoFeedback />
        )}

        {/* <NoFeedback /> */}
      </div>
    </div>
  );
}

export default Home;
