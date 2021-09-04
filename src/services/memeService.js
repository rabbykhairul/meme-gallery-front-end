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

export const getMemes = async () => {
  try {
    const { data } = await axios.get(MEME_API_URL);
    console.log("\n---");
    console.log('data: ', data);
    console.log("---\n");
  } catch (err) {
    return { success: false };
  }
};

const memeService = { uploadMeme, getMemes };
export default memeService;