import React from "react";
import Button from "./commons/Button";
import TextInput from "./commons/TextInput";

const MemeUploader = () => {
  return (
    <div className="meme-uploader-container">
      <div className="meme-link-upload">
        <TextInput className="link-input" placeholder="Paste a link here.." />
        <Button>Add meme</Button>
      </div>
      <Button>Upload</Button>
    </div>
  );
};

export default MemeUploader;