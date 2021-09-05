import axios from "axios";

const STATS_API_URL = `${process.env.REACT_APP_API_BASE_URL}/stats`;

export const getStats = async () => {
  try {
    const { data } = await axios.get(STATS_API_URL);
    console.log("\n---");
    console.log('data: ', data);
    console.log("---\n");
    return data;
  } catch (err) {
    return { success: false };
  }
};

const statsService = { getStats };
export default statsService;