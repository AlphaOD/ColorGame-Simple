import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Box.css";
const Box = props => {
  const style = {
    background: "rgb(" + props.red + "," + props.green + "," + props.blue + ")",
    border: "1px solid #c3c3c3",
    display: "-webkit-flex",
    display: "flex"
  };
  return (
    <span
      className="span shadow p-5 mb-10 rounded border-1"
      key={props.id}
      style={style}
      onClick={props.click}
    />
  );
};

export default Box;
