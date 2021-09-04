import axios from "axios";

export const uploadMeme = async (memeUrl, memeFile) => {
  const formData = new FormData();
  formData.append("url", memeUrl);
  if (memeFile) formData.append("memeFile", memeFile, memeFile?.name);
  
  try {
    const url = `${process.env.REACT_APP_API_BASE_URL}/memes`;
    const { data } = await axios.post(url, formData);
    return data;
  } catch (err) {
    return { success: false };
  }
}

const memeService = { uploadMeme };
export default memeService;