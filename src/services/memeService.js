import axios from "axios";

const MEME_API_URL = `${process.env.REACT_APP_API_BASE_URL}/memes`;

export const uploadMeme = async (memeUrl, memeFile) => {
  const formData = new FormData();
  formData.append("url", memeUrl);
  if (memeFile) formData.append("memeFile", memeFile, memeFile?.name);
  
  try {
    const { data } = await axios.post(MEME_API_URL, formData);
    return data;
  } catch (err) {
    return { success: false };
  }
};

const memeService = { uploadMeme };
export default memeService;