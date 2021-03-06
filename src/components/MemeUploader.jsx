import React, { useEffect, useState } from "react";
import Button from "./commons/Button";
import FileInput from "./commons/FileInput";
import NotificationCard from "./commons/NotificationCard";
import TextInput from "./commons/TextInput";
import { uploadMeme } from "./../services/memeService";

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

let timer = null;

const MemeUploader = (props) => {
  const { onUploadSuccess } = props;

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
  };

  const handleMemeUpload = async () => {
    if (verifyMemeUploadInputData()) {
      setShouldDisplayNotification(true);
      setNotificationInfo(UPLOAD_NOTIFICATION_INFO.inProgress);

      const result = await uploadMeme(memeLink, memeFile);
      if (result?.success) {
        setNotificationInfo(UPLOAD_NOTIFICATION_INFO.success);
        resetMemeInputs();
        onUploadSuccess(result.meme);
      } else setNotificationInfo(UPLOAD_NOTIFICATION_INFO.error);

      setShouldDisplayNotification(true);
      clearTimeout(timer);
      timer = setTimeout(() => resetNotification(), 8500);
    }
  };

  const verifyMemeUploadInputData = () => {
    return memeFile || memeLink;
  };

  const resetMemeInputs = () => {
    setMemeFile(null);
    setMemeLink("");
  };

  const resetNotification = () => {
    setShouldDisplayNotification(false);
    setNotificationInfo(UPLOAD_NOTIFICATION_INFO.inProgress);
    clearTimeout(timer);
  };

  // eslint-disable-next-line
  useEffect(() => handleMemeUpload(), [memeFile]);

  return (
    <div className="meme-uploader-container">
      <div className="meme-link-upload">
        <TextInput 
          className="link-input" 
          placeholder="Paste a link here.."
          value={memeLink}
          onChange={handleMemeLinkInput} 
        />
        <Button className="round-button" onClick={handleMemeUpload} >Add meme</Button>
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
          onClose={() => setShouldDisplayNotification(false)}
        />
      }
    </div>
  );
};

export default MemeUploader;