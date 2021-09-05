import React from "react";
import MemeCard from "./MemeCard";

const MemeGallery = (props) => {
  const { memeIds, onDelete } = props;

  return (
    <div className="meme-gallery">
      {memeIds.map( id => <MemeCard key={id} memeId={id} onDelete={onDelete} />)}
    </div>
  );
};

export default MemeGallery;