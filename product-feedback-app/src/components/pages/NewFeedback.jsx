import React from "react";
import NewFeedbaclForm from "../layout/newfeedback_assets/NewFeedbaclForm";
import DropdownMenu from "../layout/newfeedback_assets/DropdownMenu";
function NewFeedback() {
  return (
    <div style={{ position: "relative" }}>
      <NewFeedbaclForm />
      <DropdownMenu />
    </div>
  );
}

export default NewFeedback;
