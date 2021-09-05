import React from "react";
import ContentLoadingCard from "./ContentLoadingCard";

const MemeGallerySkeleton = () => {
  return (
    <div className="meme-gallery">
      {[1, 2, 3].map( id => <div key={id} className="meme-card"> <ContentLoadingCard /> </div>)}
    </div>
  );
};

export default MemeGallerySkeleton;