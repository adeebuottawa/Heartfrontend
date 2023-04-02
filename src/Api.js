import axios from "axios";

const BASE_URL = "https://baba-1.herokuapp.com"; // replace with your deployed model URL

export const predictDisease = async (patientData) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict`, patientData);
    return response.data.prediction;
  } catch (error) {
    console.error(error);
  }
};
