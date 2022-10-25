import React from "react";
import { useState } from "react";

function FilterBtn({ text }) {
  const [isActive, setIsActive] = useState(false);

  const alterActivityState = () => {
    setIsActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <p
      onClick={alterActivityState}
      style={{
        backgroundColor: isActive
          ? `rgba(70, 97, 230, 1)`
          : `rgba(242, 244, 254, 1)`,
        color: isActive ? "#fff" : `rgba(70, 97, 230, 1)`,
      }}
    >
      {text}
    </p>
  );
}

export default FilterBtn;
