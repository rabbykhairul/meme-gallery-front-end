import React from "react";

const TextInput = (props) => {
  const { type = "text", placeholder, className = "" } = props;

  return (
    <input type={type} placeholder={placeholder} className={className} />
  )
};

export default TextInput;