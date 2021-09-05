import React from "react";
import { Link } from "react-router-dom";
import Button from "./commons/Button";
import MemeUploader from "./MemeUploader";

const TopNavBar = (props) => {
  const { onUploadSuccess } = props;

  return(
    <nav>
      <Link to="/">
        <header>Meme Gallery</header>
      </Link>
      <Link to="stats">
        <Button>See Stats</Button>
      </Link>
      <MemeUploader onUploadSuccess={onUploadSuccess} />
    </nav>
  )
};

export default TopNavBar;