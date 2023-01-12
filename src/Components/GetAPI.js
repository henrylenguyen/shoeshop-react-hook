import axios from "axios";

const endpoint = "https://639c3dee16d1763ab1438a00.mockapi.io/Products";
export const GetDataFromAPI = async () => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    // xử trí khi bị lỗi
    console.log(error);
  }
};
