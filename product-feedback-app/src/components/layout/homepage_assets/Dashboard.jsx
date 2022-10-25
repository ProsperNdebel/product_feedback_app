import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AllContext from "../../context/AllContext";

function Dashboard() {
  const [btnState, setBtnState] = useState({
    active: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
  });

  const textArr = ["All", "UI", "UX", "Enhancemet", "Bug", "Feature"];

  const toggleActive = (index) => {
    setBtnState({ ...btnState, active: btnState.objects[index] });
    console.log("dog");
  };

  const toggleActiveStyles = (index) => {
    if (btnState.objects[index] === btnState.active) {
      return "active";
    } else {
      return "regular";
    }
  };

  const {
    data: { productRequests },
    filterCategory,
    btnShade,
  } = useContext(AllContext);
  return (
    <div className="dashboard">
      <div className="upperpart">
        <h3>Frontend Mentor</h3>
        <p style={{ color: "#fff" }}>Feedback Board</p>
      </div>
      <div className="midpart" style={{ height: "170px" }}>
        {btnState.objects.map((btn, i) => (
          <p
            key={i}
            className={toggleActiveStyles(i)}
            onClick={(e) => {
              toggleActive(i);
              filterCategory(e);
            }}
          >
            {textArr[i]}
          </p>
        ))}
      </div>
      <div className="bottompart">
        <div className="header">
          <h4>Roadmap</h4>
          <Link to="/roadmap">View</Link>
        </div>
        <ul className="listIts">
          <li className="listIt">
            <div className="roadMapIt">
              <span className="circle1"></span>
              <p>Planned</p>
            </div>
            <p>2</p>
          </li>
          <li className="listIt">
            <div className="roadMapIt">
              <span className="circle2"></span>
              <p>In-Progress</p>
            </div>
            <p>3</p>
          </li>
          <li className="listIt">
            <div className="roadMapIt">
              <span className="circle3"></span>
              <p>Live</p>
            </div>
            <p>1</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
