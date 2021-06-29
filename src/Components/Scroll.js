import React from "react";
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid #0a454a",
        height: "23em",
        boxShadow: "2px 12px 7px -4px rgba(0,0,0,0.45) ",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
