import React from "react";

const FileInput = (props) => {
  const { id = "upload", displayTitle = "Upload", accept = "*" } = props;
  return (
    <>
      <input type="file" id={id} accept={accept} hidden />
      <label htmlFor={id}>
        <span className="round-button file-upload" >{displayTitle}</span>
      </label>
    </>
  )
};

export default FileInput;