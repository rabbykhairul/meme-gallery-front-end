import React from "react";

const FileInput = (props) => {
  const { id = "upload", displayTitle = "Upload", accept = "*", onChange } = props;
  return (
    <>
      <input type="file" id={id} accept={accept} onChange={onChange} hidden />
      <label htmlFor={id}>
        <span className="round-button file-upload" >{displayTitle}</span>
      </label>
    </>
  )
};

export default FileInput;