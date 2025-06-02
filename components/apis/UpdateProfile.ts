import axios from "axios";
import Apis from "./Apis";
import { PersistanceKeys } from "@/constants/Constants";

// Define a type for apidata — can be expanded based on actual fields used in your app
type ApiData = {
  [key: string]: any;
};

export const UpdateProfile = async (apidata: ApiData): Promise<any | undefined> => {
  let SavedLocation = localStorage.getItem(PersistanceKeys.LocalStorageCompleteLocation);

  if (SavedLocation) {
    let parsedLocation = JSON.parse(SavedLocation);
    apidata.lat = parsedLocation.latitude;
    apidata.lang = parsedLocation.longitude;
  }

  try {
    const data = localStorage.getItem("User");
    if (data) {
      let u = JSON.parse(data);
      let path = Apis.updateProfileApi;

      const response : any = await axios.post(path, apidata, {
        headers: {
          Authorization: "Bearer " + u.token,
          "Content-Type": "application/json",
        },
      });

      if (response) {
        if (response.data.status === true) {
          u.user = response.data.data;
          localStorage.setItem("User", JSON.stringify(u));

          window.dispatchEvent(
            new CustomEvent("UpdateProfile", { detail: { update: true } })
          );

          return response.data.data;
        }
      }
    }
  } catch (e) {
    // Error is silently swallowed here in original code
  }
};
