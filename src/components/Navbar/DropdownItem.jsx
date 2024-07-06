import React from "react";
import { useState } from "react";

const DropdownItem = (props) => {
  return (
    <div className="dropdownItem" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", cursor: "pointer" }} onClick={props.onClick}>
      <img src={props.img} alt="" />
      <div> {props.text}</div>
    </div>
  );
};

export default DropdownItem;
