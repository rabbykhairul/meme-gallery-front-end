import React, { useEffect, useState } from "react";
import Button from "./commons/Button";
import FileInput from "./commons/FileInput";
import NotificationCard from "./commons/NotificationCard";
import TextInput from "./commons/TextInput";

const UPLOAD_NOTIFICATION_INFO = {
  inProgress: {
    type: "loading",
    message: "Uploading your meme"
  },

  success: {
    type: "success",
    message: "Upload successful. Scroll to top to see your new meme."
  },

  error: {
    type: "error",
    message: "Upload failed. Please try again."
  }
};

const MemeUploader = () => {
  const [ memeLink, setMemeLink ] = useState("");
  const [ memeFile, setMemeFile ] = useState(null);

  const [ shouldDisplayNotification, setShouldDisplayNotification ] = useState(false);
  const [ notificationInfo, setNotificationInfo ] = useState(UPLOAD_NOTIFICATION_INFO.inProgress);

  const handleMemeLinkInput = (e) => {
    console.log("link: ", e.target.value);
    setMemeLink(e.target.value);
  };

  const handleMemeFileSelection = (e) => {
    setMemeFile(e.target?.files?.[0]);
    console.log("file: ", e.target?.files?.[0]);
  };

  return (
    <div className="meme-uploader-container">
      <div className="meme-link-upload">
        <TextInput 
          className="link-input" 
          placeholder="Paste a link here.."
          value={memeLink}
          onChange={handleMemeLinkInput} 
        />
        <Button className="round-button" >Add meme</Button>
      </div>

      <FileInput 
        id="upload-meme" 
        displayTitle="Upload" 
        accept="image/*"
        onChange={handleMemeFileSelection} 
      />

      {
        shouldDisplayNotification && 
        <NotificationCard
          type={notificationInfo.type}
          message={notificationInfo.message} 
        />
      }
    </div>
  );
};

export default MemeUploader;