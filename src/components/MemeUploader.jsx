import React from "react";
import Button from "./commons/Button";
import FileInput from "./commons/FileInput";
import TextInput from "./commons/TextInput";

const MemeUploader = () => {
  return (
    <div className="meme-uploader-container">
      <div className="meme-link-upload">
        <TextInput className="link-input" placeholder="Paste a link here.." />
        <Button className="round-button" >Add meme</Button>
      </div>

      <FileInput id="upload-meme" displayTitle="Upload" accept="image/*" />
    </div>
  );
};

export default MemeUploader;