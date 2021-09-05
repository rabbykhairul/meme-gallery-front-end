import { useEffect, useState } from 'react';
import './App.css';
import MemeGallerySkeleton from './components/commons/MemeGallerySkeleton';
import MemeGallery from './components/MemeGallery';
import TopNavBar from "./components/TopNavBar";
import { getMemes } from './services/memeService';

function App() {
  const [ memeIds, setMemeIds ] = useState([]);
  const [ isMemeIdsLoading, setIsMemeIdsLoading ] = useState(true);

  useEffect(() => loadMemeIds(), []);

  const loadMemeIds = async() => {
    const { success, memes = [] } = await getMemes();
    if (success) setMemeIds(memes);
    setIsMemeIdsLoading(false);
  };

  return (
    <>
      <TopNavBar />
      { isMemeIdsLoading && <MemeGallerySkeleton /> }
      { !isMemeIdsLoading && <MemeGallery memeIds={memeIds} /> }
    </>
  );
}

export default App;
