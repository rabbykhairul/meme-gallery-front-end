import React, { useEffect, useState } from "react";
import { getMemeById } from "../services/memeService";
import ContentLoadingCard from "./commons/ContentLoadingCard";
import Button from "./commons/Button";

const MemeCard = (props) => {
  const { memeId, onDelete } = props;
  const [ showLoadingSkeleton, setShowLoadingSkeleton ] = useState(true);
  const [ meme, setMeme ] = useState({});

  // eslint-disable-next-line
  useEffect(() => loadMeme(), []);

  const loadMeme = async () => {
    const { success, meme } = await getMemeById(memeId);

    if (success) {
      setMeme(meme);
      setShowLoadingSkeleton(false);
    }
  }

  const renderLoadingSkeleton = () => <ContentLoadingCard />;

  const renderMemeCardContent = () => {
    return (
      <>
        <div className="meme-image">
          <img src={meme.url || meme.base64Image} alt="" />
        </div>
        <div className="meme-action">
          <Button className="meme-delete" onClick={() => onDelete(memeId)} >Delete</Button>
        </div>
      </>
    );
  };

  return (
    <div className="meme-card">
      { showLoadingSkeleton && renderLoadingSkeleton() }
      { !showLoadingSkeleton && renderMemeCardContent() }
    </div>
  );
};

export default MemeCard;