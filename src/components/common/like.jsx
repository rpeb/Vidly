import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "Pointer" }}
      onClick={() => props.onLike(props.movie)}
      className={classes}
    />
  );
};

export default Like;
