import Apis from "@/component/apis/Apis";
import axios from "axios";

type VerificationResponse = {
  status: boolean;
  message: string;
  error?: any;
  data: any;
};

const SendVerificationCode = async (
  phone: string,
  login: boolean = true,
  verifyApiResponse?: VerificationResponse
): Promise<VerificationResponse> => {
  try {
    const ApiData = {
      login,
      phone,
    };

    const ApiPath = Apis.sendVerificationCode;
    const result :any = await axios.post(ApiPath, ApiData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response: VerificationResponse = result.data;
    verifyApiResponse = response; // though this is not used externally
    return response;
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
      error,
      data: null,
    };
  }
};

export default SendVerificationCode;
