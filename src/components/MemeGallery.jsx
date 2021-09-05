import React from "react";
import MemeCard from "./MemeCard";

const MemeGallery = (props) => {
  const { memeIds } = props;

  return (
    <div className="meme-gallery">
      {memeIds.map( id => <MemeCard key={id} memeId={id} />)}
    </div>
  );
};

export default MemeGallery;