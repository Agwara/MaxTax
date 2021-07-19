import axios from "axios"

export const startFetchData = async (url) => {
  try {
    let response = await axios.get(url);
    let data = response.data;
    return data
  } catch (error) {
    throw Error ("Error in fetching data");
  }
}