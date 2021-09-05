import React from "react";
import Button from "./commons/Button";
import MemeUploader from "./MemeUploader";

const TopNavBar = (props) => {
  const { onUploadSuccess } = props;

  return(
    <nav>
      <header>Meme Gallery</header>
      <Button>See Stats</Button>
      <MemeUploader onUploadSuccess={onUploadSuccess} />
    </nav>
  )
};

export default TopNavBar;