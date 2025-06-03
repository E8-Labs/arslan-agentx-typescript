"use client";

import Body from "@/components/onboarding/Body";
import Header from "@/components/onboarding/Header";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "@/components/onboarding/ProgressBar";
import { useRouter } from "next/navigation";
import Footer from "@/components/onboarding/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Apis from "@/components/apis/Apis";
import axios from "axios";
import {
  CircularProgress,
  Modal,
  Box,
} from "@mui/material";
import SendVerificationCode from "../services/AuthVerification/AuthService";
import SnackMessages from "../services/AuthVerification/SnackMessages";
import { setCookie } from "@/utilities/cookies";
import { getLocalLocation } from "../services/apisServices/ApiService";
import { GetCampaigneeNameIfAvailable } from "@/utilities/UserUtility";
import { PersistanceKeys } from "@/constants/Constants";

// Props interface
interface BasicDetailsProps {
  handleContinue: () => void;
  handleBack: () => void;
  length?: number;
  onComplete?: (code: string) => void;
  handleDetails: (name: string, email: string, phone: string) => void;
  userDetails: {
    name: string;
    email: string;
    phone: string;
  };
}

interface ApiResponse {
  status?: boolean;
  message?: string;
  data?: any;
}

const BasicDetails: React.FC<BasicDetailsProps> = ({
  handleContinue,
  handleBack,
  length = 6,
  onComplete,
  handleDetails,
  userDetails,
}) => {
  const verifyInputRef = useRef<Array<HTMLInputElement | null>>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const inputsFields = useRef<Array<HTMLInputElement | null>>([]);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const [userName, setUserName] = useState<string>("");
  const [showVerifyPopup, setShowVerifyPopup] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [response, setResponse] = useState<ApiResponse>({});
  const [registerLoader, setRegisterLoader] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userFarm, setUserFarm] = useState<string>("");
  const [userBrokage, setUserBrokage] = useState<string>("");
  const [userTransaction, setUserTransaction] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sendcodeLoader, setSendcodeLoader] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);
  const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] = useState<boolean>(false);
  const [VerifyCode, setVerifyCode] = useState<string[]>(Array(length).fill(""));
  const [emailLoader, setEmailLoader] = useState<boolean>(false);
  const [emailCheckResponse, setEmailCheckResponse] = useState<ApiResponse | null>(null);
  const [validEmail, setValidEmail] = useState<string>("");
  const [phoneNumberLoader, setPhoneNumberLoader] = useState<boolean>(false);
  const [checkPhoneResponse, setCheckPhoneResponse] = useState<ApiResponse | null>(null);
  const [locationLoader, setLocationLoader] = useState<boolean>(false);
  const [shouldContinue, setShouldContinue] = useState<boolean>(true);
  const [congratsPopup, setCongratsPopup] = useState<boolean>(false);

  const handlePhoneNumberChange = (phone: string) => {
    setUserPhoneNumber(phone);
    validatePhoneNumber(phone);

    if (!phone) {
      setErrorMessage("");
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const parsedNumber = parsePhoneNumberFromString(
      `+${phoneNumber}`
    );
    if (!parsedNumber || !parsedNumber.isValid()) {
      setErrorMessage("Invalid");
    } else {
      setErrorMessage("");

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        checkPhoneNumber(phoneNumber);
      }, 300);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (/\.\./.test(email)) {
      return false;
    }
    return emailPattern.test(email);
  };

  const handleVerifyPopup = async () => {
    handleContinue();
    return;
  };

  const handleClose = () => {
    setShowVerifyPopup(false);
  };

  const handleVerifyInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (!/[0-9]/.test(value) && value !== "") return;

    const newValues = [...VerifyCode];
    newValues[index] = value;
    setVerifyCode(newValues);

    if (value && index < length - 1) {
      verifyInputRef.current[index + 1]?.focus();
    }

    if (newValues.every((num) => num !== "") && onComplete) {
      onComplete(newValues.join(""));
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (VerifyCode[index] === "" && index > 0) {
        verifyInputRef.current[index - 1]?.focus();
      }
      const newValues = [...VerifyCode];
      newValues[index] = "";
      setVerifyCode(newValues);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text").slice(0, length);
    const newValues = pastedText
      .split("")
      .map((char) => (/[0-9]/.test(char) ? char : ""));
    setVerifyCode(newValues);

    newValues.forEach((char, index) => {
      if (verifyInputRef.current[index]) {
        verifyInputRef.current[index]!.value = char;
      }
      if (index === newValues.length - 1) {
        verifyInputRef.current[index]?.focus();
      }
    });

    if (newValues.every((num) => num !== "") && onComplete) {
      onComplete(newValues.join(""));
    }
  };

  const checkEmail = async (value: string) => {
    try {
      setValidEmail("");
      setEmailLoader(true);

      const ApiPath = Apis.CheckEmail;
      const ApiData = { email: value };

      const response :any = await axios.post(ApiPath, ApiData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response) {
        setEmailCheckResponse(response.data);
      }
    } catch (error) {
      console.error("Error occurred in check email API:", error);
    } finally {
      setEmailLoader(false);
    }
  };

  const checkPhoneNumber = async (value: string) => {
    try {
      setPhoneNumberLoader(true);

      const ApiPath = Apis.CheckPhone;
      const ApiData = { phone: value };

      const response:any = await axios.post(ApiPath, ApiData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response) {
        setCheckPhoneResponse(response.data);
      }
    } catch (error) {
      console.error("Error occurred in check phone API:", error);
    } finally {
      setPhoneNumberLoader(false);
    }
  };

return (
  <div
    style={{ width: "100%" }}
    className="overflow-y-hidden flex flex-col justify-center items-center h-[100svh]"
  >
    <div className="flex flex-col bg-white sm:rounded-2xl sm:mx-2 w-full md:w-10/12 h-[90%] sm:max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple">
      <div className="h-[90svh] sm:h-[82svh]">
        {/* Header */}
        <div className="h-[10%]">
          <Header />
        </div>

        {/* Body */}
        <div className="flex flex-col items-center px-4 w-full h-[90%]">
          <div
            className="mt-6 w-11/12 md:text-4xl text-lg font-[600]"
            style={{ textAlign: "center" }}
            onClick={handleContinue}
          >
            Your Contact Information
          </div>

          <div
            className="mt-4 sm:mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[90%] sm:max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Name Input */}
            <div style={{ fontSize: 16, fontWeight: 600 }}>
              What's your full name
            </div>
            <input
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              enterKeyHint="done"
              placeholder="Name"
              className="border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0"
              ref={(el) => {inputsFields.current[0] = el}}
              style={{
                fontSize: 15,
                fontWeight: 500,
                borderRadius: "7px",
                marginTop: "8px",
              }}
              value={userName}
              onChange={(e) => {
                const input = e.target.value;
                const formattedName = input
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                setUserName(formattedName);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Done") {
                  inputsFields.current[1]?.focus();
                }
              }}
            />
            {/* Email Input */}
            <div className="flex flex-row items-center w-full justify-between mt-6">
              <div style={{ fontSize: 16, fontWeight: 600 }}>
                What's your email address
              </div>
              <div>
                {emailLoader ? (
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Checking...
                  </p>
                ) : emailCheckResponse ? (
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: emailCheckResponse.status ? "green" : "red",
                    }}
                  >
                    {`${emailCheckResponse?.message?.charAt(0).toUpperCase()} ${emailCheckResponse.message?.slice(1)}`}
                  </p>
                ) : null}
                <div style={{ fontSize: 12, fontWeight: 500, color: "red" }}>
                  {validEmail}
                </div>
              </div>
            </div>

            <input
              ref={(el) => {inputsFields.current[1] = el}}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              enterKeyHint="done"
              placeholder="Email address"
              className="border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0"
              style={{
                fontSize: 15,
                fontWeight: 500,
                borderRadius: "7px",
                marginTop: "8px",
              }}
              value={userEmail}
              onChange={(e) => {
                const value = e.target.value;
                setUserEmail(value);

                if (timerRef.current) {
                  clearTimeout(timerRef.current);
                }

                setEmailCheckResponse(null);

                if (!value) {
                  setValidEmail("");
                  return;
                }

                if (!validateEmail(value)) {
                  setValidEmail("Invalid");
                } else {
                  timerRef.current = setTimeout(() => {
                    checkEmail(value);
                  }, 300);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  phoneInputRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  phoneInputRef.current?.focus({ preventScroll: true });
                }
              }}
            />
            {/* Phone Number Input */}
            <div className="flex flex-row items-center justify-between w-full mt-6">
              <div style={{ fontSize: 16, fontWeight: 600 }}>
                What's your phone number
              </div>
              <div>
                {locationLoader && (
                  <p
                    className="text-purple"
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      height: "20px",
                    }}
                  >
                    Getting location...
                  </p>
                )}
                {errorMessage ? (
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "red",
                      height: "20px",
                    }}
                  >
                    {errorMessage}
                  </p>
                ) : phoneNumberLoader ? (
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "black",
                      height: "20px",
                    }}
                  >
                    Checking...
                  </p>
                ) : checkPhoneResponse ? (
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: checkPhoneResponse.status ? "green" : "red",
                      height: "20px",
                    }}
                  >
                    {`${checkPhoneResponse?.message?.charAt(0).toUpperCase()} ${checkPhoneResponse?.message?.slice(1)}`}
                  </p>
                ) : null}
              </div>
            </div>

            <div style={{ marginTop: "8px" }}>
              <PhoneInput
                country={"us"}
                onlyCountries={["us"]}
                disableDropdown={true}
                countryCodeEditable={false}
                disableCountryCode={false}
                value={userPhoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder={
                  locationLoader
                    ? "Loading location..."
                    : "Enter Phone Number"
                }
                disabled={loading}
                inputProps={{
                  ref: phoneInputRef,
                }}
                inputStyle={{
                  width: "100%",
                  borderWidth: "0px",
                  backgroundColor: "transparent",
                  paddingLeft: "60px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "transparent",
                }}
                dropdownStyle={{
                  maxHeight: "150px",
                  overflowY: "auto",
                }}
                defaultMask={loading ? "Loading..." : undefined}
              />
            </div>
            {/* SnackMessages */}
            <SnackMessages
              message={response.message || ""}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              success={response.status || false}
            />
          </div>
        </div>
      </div>
    </div>

    {/* ProgressBar + Footer */}
    <div className="h-[10%] w-full">
      <div>
        <ProgressBar value={70} />
      </div>

      <Footer
        handleContinue={handleVerifyPopup}
        handleBack={handleBack}
        registerLoader={registerLoader}
        shouldContinue={shouldContinue}
      />
    </div>
  </div>
);
};

export default BasicDetails;
