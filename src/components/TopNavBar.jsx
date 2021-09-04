import React from "react";
import Button from "./commons/Button";
import MemeUploader from "./MemeUploader";

const TopNavBar = () => {
  return(
    <nav>
      <header>Meme Gallery</header>
      <Button>See Stats</Button>
      <MemeUploader />
    </nav>
  )
};

export default TopNavBar;