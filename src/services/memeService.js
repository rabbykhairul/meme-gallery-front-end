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
    return data;
  } catch (err) {
    return { success: false };
  }
};

export const getMemeById = async (memeId) => {
  try {
    console.log("url: ", `${MEME_API_URL}/${memeId}`);
    const { data } = await axios.get(`${MEME_API_URL}/${memeId}`);
    return data;
  } catch (err) {
    return { success: false };
  }
};

export const deleteMemeById = async (memeId) => {
  try {
    console.log("url: ", `${MEME_API_URL}/${memeId}`);
    const { data } = await axios.delete(`${MEME_API_URL}/${memeId}`);
    return data;
  } catch (err) {
    return { success: false };
  }
}

const memeService = { uploadMeme, getMemes, getMemeById, deleteMemeById };
export default memeService;