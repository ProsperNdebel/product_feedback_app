import React from "react";
import RoadMapHeader from "../layout/roadmap_assets/RoadMapHeader";
import RoadMapItem from "../layout/roadmap_assets/RoadMapItem";
import Containers from "../layout/roadmap_assets/Containers";
import { useContext } from "react";
import AllContext from "../context/AllContext";
function RoadMap() {
  const { data } = useContext(AllContext);

  //this function counts the number of feedbacks in each respective feedback
  function countType(arr) {
    let i = 0;
    let planned = 0;
    let inProgress = 0;
    let live = 0;
    //use a switch case later
    while (i < 12) {
      if (arr[i].status === "planned") {
        planned += 1;
      } else if (arr[i].status === "in-progress") {
        inProgress += 1;
      } else if (arr[i].status === "live") {
        live += 1;
      }
      i += 1;
    }
    return [planned, inProgress, live];
  }

  const [planned, inProgress, live] = countType(data);

  return (
    <div>
      <RoadMapHeader />
      {/* <RoadMapItem /> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "80%",
          marginLeft: "10%",
          marginTop: "10px",
        }}
      >
        <Containers numItems={planned} type="Planned">
          {data.map((roadmapItem) => {
            if (roadmapItem.status === "planned") {
              let item = roadmapItem;
              console.log(item);
              return (
                <RoadMapItem item={item} color={`rgba(244, 159, 133, 1)`} />
              );
            }
          })}
        </Containers>
        <Containers numItems={inProgress} type="In-Progress ">
          {data.map((roadmapItem) => {
            if (roadmapItem.status === "in-progress") {
              let item = roadmapItem;
              console.log(item);
              return (
                <RoadMapItem item={item} color={`rgba(173, 31, 234, 1)`} />
              );
            }
          })}
        </Containers>
        <Containers numItems={live} type="Live">
          {data.map((roadmapItem) => {
            if (roadmapItem.status === "live") {
              let item = roadmapItem;
              console.log(item);
              return (
                <RoadMapItem item={item} color={`rgba(98, 188, 250, 1)`} />
              );
            }
          })}
        </Containers>
      </div>
    </div>
  );
}

export default RoadMap;
