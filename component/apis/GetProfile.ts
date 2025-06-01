import axios from "axios";
import Apis from "./Apis";

const getProfileDetails = async (): Promise<any | null> => {
  try {
    let Authtoken: string | null = null;
    let localDetails: any = null;
    const localData = localStorage.getItem("User");

    if (localData) {
      const Data = JSON.parse(localData);
      localDetails = Data;
      Authtoken = Data.token;
    }

    const ApiPath = Apis.getProfileData;

    const response :any = await axios.get(ApiPath, {
      headers: {
        Authorization: "Bearer " + Authtoken,
        "Content-Type": "application/json",
      },
    });

    if (response) {
      if (response?.data?.status === true) {
        localDetails.user = response.data.data;
        localStorage.setItem("User", JSON.stringify(localDetails));
        return response;
      }
    }
    return response;
  } catch (error) {
    return null;
  }
};

export default getProfileDetails;
