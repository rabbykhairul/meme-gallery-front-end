import React from "react";

const TextInput = (props) => {
  const { 
    type = "text",
    placeholder, 
    className = "",
    value = "",
    onChange
  } = props;

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className={className}
      value={value}
      onChange={onChange}
    />
  )
};

export default TextInput;