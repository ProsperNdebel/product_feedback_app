import React from "react";
import { createContext, useState, useEffect } from "react";
import DATA from "../../data.json";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const AllContext = createContext();

export const AllContextProvider = ({ children }) => {
  const originalArr = DATA.productRequests;
  const [btnShade, setBtnShade] = useState(false);
  const [data, setData] = useState([]);
  //for the category dropdown
  const [dropdown, setDropdown] = useState(false);
  //for rthe reply form
  const [showForm, setShowForm] = useState(false);

  //for the sorting dropdown
  const [showSortOptions, setShowSortOptions] = useState(false);

  //for update status in the editfeedback form
  const [updateStat, setUpdateStat] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch("/api")
  //       .then((data) => console.log(data))
  //       .then((data) => console.log(data));
  //   };
  //   fetchData();
  // }, []);

  //sets the data of the feedback to be rendered on the comments page
  const [feedData, setFeedData] = useState({
    id: 0,
    title: "",
    category: "",
    upvotes: 0,
    status: "",
    description: "",
    comments: [],
  });

  //this is for storing the currently open feedback id for editing reasons later
  const [openId, setOpenId] = useState("");

  //current open feedback
  const [openFeedback, setOpenFeeddback] = useState({});

  //status dropdown state update: reason for making this is cause I am using it at more than one place
  const [sortState, setSortStatus] = useState("Most Upvotes");
  const mutateStatus = (e) => {
    //inserting the into window
    setSortStatus(e.target.innerHTML);
    //then I remove the dropdown from the window
    setShowSortOptions(false);
  };

  //category doropdown functionality for the create new feedback
  const [text, setText] = useState("Feature");
  const mutateCategory = (e) => {
    setText(e.target.innerHTML);
    setDropdown(false);
  };

  const [text2, setText2] = useState("Feature");
  const mutateCategory2 = (e) => {
    setText2(e.target.innerHTML);
    setDropdown(false);
  };

  //comments state: I have to set the comment we are I am replying to as state so that
  //I change the comment then I update the openFeedback and then update the data
  const [currentTargetComment, setCurrentTargetComment] = useState({});

  //initializing the redirect
  const navigate = useNavigate();

  //initializing location
  const location = useLocation();

  //redirects to the homepage
  const redirectHome = () => {
    navigate("/");
  };

  //redirects to newfeedback
  const redirectToNewFeedback = () => {
    navigate("/newfeedback");
  };

  //redirect to comments
  const redirectComments = (e) => {
    //we only do this if we are home
    console.log(location.pathname);
    const ID = e.target.closest(".ActualFeed_wrapper__q1X-S").id; //lesson dont ever make function that dont work for other cases
    //loop through the array to search for the object with the is needed
    setOpenId(ID);
    for (let item of data) {
      if (item.id + "" === ID) {
        setOpenFeeddback(item);
        setFeedData((prevState) => {
          //I also have to upfate this state from the editfeedback
          return {
            ...prevState,
            id: +ID,
            title: item.title,
            category: item.category,
            upvotes: item.upvotes,
            status: item.status,
            description: item.description,
            comments: item.comments,
          };
        });
      }
    }

    navigate("/feedbackdetail");
  };

  //console.log(openFeedback);

  //redirects to edit feedback
  const redirectEditFeedback = () => {
    navigate("/editfeedback");
  };

  //creating a feedback
  const createFeedback = (feeData) => {
    console.log(originalArr);
    originalArr = [...originalArr, feeData];

    setData(originalArr); //this is how you add to array in react, dont use push
    navigate("/");
  };

  //updating a feedback

  //pull dropdown up or down
  const changeDropdownState = () => {
    setDropdown((prevState) => {
      return !prevState;
    });
  };

  //show sorting dropdown
  const displaySort = () => {
    setShowSortOptions((prevState) => {
      return !prevState;
    });
  };

  //thins function controls the visibility of the status dropdown
  const updateStatVis = () => {
    setUpdateStat((prevState) => {
      return !prevState;
    });
  };
  const filterCategory = (e) => {
    console.log(e.target);
    //renders everything
    if (e.target.innerHTML.toLowerCase() === "all") {
      setData(originalArr);
    } else {
      const filtered = originalArr.filter((item) => {
        return item.category === e.target.innerHTML.toLowerCase();
      });
      setData(filtered);
    }
  };

  // //getting the opened feedback using the
  // const lookingForOpenedFeed = (id) => {
  //   console.log(id, data);
  //   for (const feed of data) {
  //     console.log(feed.id);
  //     if (feed.id === id) {
  //       setOpenFeeddback((prevState) => {
  //         return { ...prevState, feed };
  //       });
  //     }
  //   }
  // };

  //updating the feedback and also update the feedback state to the new state so that
  //with the feedback detail the actualfeed updates
  const updateFeedback = (id, newData) => {
    //update
    setData(
      data.map((feedback) => {
        return feedback.id + "" === id ? { ...feedback, ...newData } : feedback;
      })
    );
    setOpenFeeddback(newData);
    //setting the feeddata to the newly edited data
    setFeedData(newData);
    //redirect to the previous page
    navigate(-1);
  };

  //this tells us the number of all comments at the top of the comments page
  const numComments = (comments) => {
    let i = 0; //this is the number of comments
    let j = 0; //this is the number of replies
    if (comments) {
      for (let comment of comments) {
        i += 1;
        if (comment.replies) {
          j += comment.replies.length;
        } else {
          j += 0;
        }
        //ypu were returning this thing here so it blcked everything you were doing Prosper
        //return i + j;
      }
    }

    return i + j;
  };

  return (
    <AllContext.Provider
      value={{
        data,
        dropdown,
        showSortOptions,
        updateStat,
        feedData,
        openId,
        openFeedback,
        sortState,
        text,
        text2,
        filterCategory,
        redirectToNewFeedback,
        redirectHome,
        redirectComments,
        changeDropdownState,
        redirectEditFeedback,
        displaySort,
        updateStatVis,
        numComments,
        createFeedback,
        updateFeedback,
        setOpenFeeddback,
        setData,
        setFeedData,
        mutateStatus,
        mutateCategory,
        mutateCategory2,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
export default AllContext;
