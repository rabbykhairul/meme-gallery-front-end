import { useEffect, useState } from 'react';
import './App.css';
import MemeGallerySkeleton from './components/commons/MemeGallerySkeleton';
import Footer from './components/Footer';
import MemeGallery from './components/MemeGallery';
import TopNavBar from "./components/TopNavBar";
import { deleteMemeById, getMemes } from './services/memeService';

function App() {
  const [ memeIds, setMemeIds ] = useState([]);
  const [ isMemeIdsLoading, setIsMemeIdsLoading ] = useState(true);

  useEffect(() => loadMemeIds(), []);

  const loadMemeIds = async() => {
    const { success, memes = [] } = await getMemes();
    if (success) setMemeIds(memes);
    setIsMemeIdsLoading(false);
  };

  const handleMemeDelete = async(memeId) => {
    const remainingMemeIds = memeIds.filter( id => id !== memeId );
    setMemeIds(remainingMemeIds);
    deleteMemeById(memeId);
  };

  const addUploadedMeme = (meme) => {
    const newMemeIds = [ meme._id, ...memeIds ];
    setMemeIds(newMemeIds);
  }

  return (
    <>
      <TopNavBar onUploadSuccess={addUploadedMeme} />
      { isMemeIdsLoading && <MemeGallerySkeleton /> }
      { !isMemeIdsLoading && <MemeGallery memeIds={memeIds} onDelete={handleMemeDelete} /> }
      <Footer />
    </>
  );
}

export default App;
