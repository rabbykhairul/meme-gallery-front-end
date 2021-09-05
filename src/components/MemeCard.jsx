import React, { useState } from "react";
import ContentLoadingCard from "./commons/ContentLoadingCard";

const MemeCard = (props) => {
  const { memeId, onDelete } = props;
  const [ showLoadingSkeleton, setShowLoadingSkeleton ] = useState(true);

  const renderLoadingSkeleton = () => <ContentLoadingCard />;

  return (
    <div className="meme-card">
      { showLoadingSkeleton && renderLoadingSkeleton() }
    </div>
  );
};

export default MemeCard;