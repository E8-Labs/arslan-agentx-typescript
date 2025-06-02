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
  Alert,
  Box,
  CircularProgress,
  Fade,
  Modal,
  Snackbar,
} from "@mui/material";
import SendVerificationCode from "../services/AuthVerification/AuthService";
import SnackMessages from "../services/AuthVerification/SnackMessages";
import { getLocalLocation } from "../services/apisServices/ApiService";
import { GetCampaigneeNameIfAvailable } from "@/utilities/UserUtility";
import { PersistanceKeys } from "@/constants/Constants";
import { setCookie } from "@/utilities/cookies";

// Props type
interface DebtCollerterAgentSignUpProps {
  handleContinue: () => void;
  handleWaitList: () => void;
  handleSolarAgentBack: () => void;
  length?: number;
  onComplete?: (code: string) => void;
}

interface ApiResponse {
  status?: boolean;
  message?: string;
  data?: any;
}

const DebtCollerterAgentSignUp: React.FC<DebtCollerterAgentSignUpProps> = ({
  handleContinue,
  handleWaitList,
  handleSolarAgentBack,
  length = 6,
  onComplete,
}) => {
  const verifyInputRef = useRef<Array<HTMLInputElement | null>>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [response, setResponse] = useState<ApiResponse>({});
  const [sendcodeLoader, setSendcodeLoader] = useState(false);

  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);
  const [registerLoader, setRegisterLoader] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userFarm, setUserFarm] = useState("");
  const [userBrokage, setUserBrokage] = useState("");
  const [userTransaction, setUserTransaction] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] =
    useState(false);
  const [VerifyCode, setVerifyCode] = useState<string[]>(Array(length).fill(""));
  const [emailLoader, setEmailLoader] = useState(false);
  const [emailCheckResponse, setEmailCheckResponse] = useState<ApiResponse | null>(null);
  const [validEmail, setValidEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [phoneNumberLoader, setPhoneNumberLoader] = useState(false);
  const [checkPhoneResponse, setCheckPhoneResponse] = useState<ApiResponse | null>(null);
  const [locationLoader, setLocationLoader] = useState(false);
  const [shouldContinue, setShouldContinue] = useState(true);

  const [customerService, setCustomerService] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [installationVolume, setInstallationVolume] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [ClientType, setClientType] = useState<string | null>(null);

  const primaryClientTypes = [
    {
      id: 1,
      title: "Soft Collections",
    },
    {
      id: 2,
      title: "Hard Collections",
    },
    {
      id: 3,
      title: "Hybrid Approach",
    },
    {
      id: 4,
      title: "Other",
    },
  ];

  useEffect(() => {
    const loc = getLocalLocation();
    setCountryCode(loc);
  }, []);

  useEffect(() => {
    if (
      userName &&
      userEmail &&
      userPhoneNumber &&
      customerService &&
      companyName &&
      installationVolume &&
      ClientType &&
      emailCheckResponse?.status === true &&
      checkPhoneResponse?.status === true
    ) {
      setShouldContinue(false);
    } else {
      setShouldContinue(true);
    }
  }, [
    userName,
    userEmail,
    userPhoneNumber,
    checkPhoneResponse,
    emailCheckResponse,
    customerService,
    companyName,
    installationVolume,
    projectSize,
    ClientType,
  ]);

  useEffect(() => {
    const storedData = localStorage.getItem(PersistanceKeys.RegisterDetails);
    if (storedData) {
      const data = JSON.parse(storedData);
      setUserData(data);
    }
  }, []);

  useEffect(() => {
    if (showVerifyPopup && verifyInputRef.current[0]) {
      verifyInputRef.current[0].focus();
    }
  }, [showVerifyPopup]);

  const handlePhoneNumberChange = (phone: string) => {
    setUserPhoneNumber(phone);
    validatePhoneNumber(phone);

    if (!phone) {
      setErrorMessage("");
    }
  };

  const handleSelectClientType = (item: { id: number; title: string }) => {
    setClientType(item.title);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const parsedNumber = parsePhoneNumberFromString(
      `+${phoneNumber}`,
      countryCode?.toUpperCase()
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

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (/\.\./.test(email)) {
      return false;
    }
    return emailPattern.test(email);
  };

  const handleVerifyPopup = async () => {
    try {
      setSendcodeLoader(true);
      const response = await SendVerificationCode(userPhoneNumber, true);
      setResponse(response);
      setIsVisible(true);
    } catch (error) {
      console.error("Error occurred while sending verification code:", error);
    } finally {
      setSendcodeLoader(false);
    }
    setShowVerifyPopup(true);
    setTimeout(() => {
      if (verifyInputRef.current[0]) {
        verifyInputRef.current[0].focus();
      }
    }, 100);
  };

  const handleClose = () => {
    setShowVerifyPopup(false);
  };

  const handleVerifyInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
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

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
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

  const handleVerifyCode = () => {
    setPhoneVerifiedSuccessSnack(true);
    handleRegister();
  };

  const handleRegister = async () => {
    try {
      setRegisterLoader(true);

      const agentTitle = userData?.userTypeTitle;

      const formData = new FormData();
      const ApiPath = Apis.register;
      const campainee = GetCampaigneeNameIfAvailable(window);
      if (campainee) {
        formData.append("campaignee", campainee);
      }

      formData.append("name", userName);
      formData.append("email", userEmail);
      formData.append("phone", userPhoneNumber);
      formData.append("agentService", JSON.stringify(userData?.serviceID));
      formData.append("areaOfFocus", JSON.stringify(userData?.focusAreaId));
      formData.append("userType", agentTitle);
      formData.append("areaOfService", customerService);
      formData.append("company", companyName);
      formData.append("projectSizeKw", installationVolume);
      formData.append("projectsPerYear", projectSize);
      formData.append("collectionStrategies", ClientType || "");
      formData.append("login", "false");
      formData.append("verificationCode", VerifyCode.join(""));
      formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);

      const response = await axios.post(ApiPath, formData);
      if (response) {
        setResponse(response.data);
        setIsVisible(true);

        if (response.data.status === true) {
          localStorage.setItem("User", JSON.stringify(response.data.data));
          if (typeof document !== "undefined") {
            setCookie(response.data.data.user, document);
          }

          let screenWidth = window.innerWidth;
          const SM_SCREEN_SIZE = 640;

          if (screenWidth <= SM_SCREEN_SIZE) {
            // You can trigger any mobile behavior here if needed
          } else {
            handleContinue();
          }
        }
      }
    } catch (error) {
      console.error("Error occurred in register API:", error);
    } finally {
      setRegisterLoader(false);
    }
  };

  const checkEmail = async (value: string) => {
    try {
      setValidEmail("");
      setEmailLoader(true);

      const ApiPath = Apis.CheckEmail;
      const ApiData = { email: value };

      const response = await axios.post(ApiPath, ApiData, {
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

      const response = await axios.post(ApiPath, ApiData, {
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
    className="overflow-y-hidden flex flex-row justify-center items-center"
  >
    <div className="bg-white rounded-2xl mx-2 w-full md:w-10/12 max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple">
      <div className="h-[82svh]">
        {/* Header */}
        <div className="h-[10%]">
          <Header />
        </div>

        {/* Body */}
        <div className="flex flex-col items-center px-4 w-full h-[90%]">
          <div
            className="mt-6 w-11/12 md:text-4xl text-lg font-[600]"
            style={{ textAlign: "center" }}
          >
            Your Contact Information
          </div>

          <div
            className="mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Name */}
            <div style={{ fontSize: 16, fontWeight: 600 }}>
              What's your full name
            </div>
            <input
              placeholder="Name"
              className="border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0"
              style={{ fontSize: 15, fontWeight: 500, borderRadius: "7px", marginTop: "8px" }}
              value={userName}
              onChange={(e) => {
                const input = e.target.value;
                const formattedName = input
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                setUserName(formattedName);
              }}
            />

            {/* Email */}
            <div className="flex flex-row items-center w-full justify-between mt-6">
              <div style={{ fontSize: 16, fontWeight: 600 }}>
                What's your email address
              </div>
              <div>
                {emailLoader ? (
                  <p style={{ fontSize: 12, fontWeight: 500, color: "black" }}>
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
                    {emailCheckResponse.message?.charAt(0).toUpperCase() +
                      emailCheckResponse.message?.slice(1)}
                  </p>
                ) : null}
              </div>
            </div>

            <input
              placeholder="Email address"
              className="border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0"
              style={{ fontSize: 15, fontWeight: 500, borderRadius: "7px", marginTop: "8px" }}
              value={userEmail}
              onChange={(e) => {
                const value = e.target.value;
                setUserEmail(value);

                if (timerRef.current) clearTimeout(timerRef.current);
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
            />

            {/* Phone Number */}
            <div className="flex flex-row items-center justify-between w-full mt-6">
              <div style={{ fontSize: 16, fontWeight: 600 }}>
                What's your phone number
              </div>
              <div>
                {locationLoader && (
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "purple",
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
                    {checkPhoneResponse.message?.charAt(0).toUpperCase() +
                      checkPhoneResponse.message?.slice(1)}
                  </p>
                ) : null}
              </div>
            </div>

            <div style={{ marginTop: "8px" }}>
              <PhoneInput
                className="border outline-none bg-white"
                country={"us"}
                onlyCountries={["us"]}
                disableDropdown
                countryCodeEditable={false}
                disableCountryCode={false}
                value={userPhoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder={
                  locationLoader ? "Loading location ..." : "Enter Phone Number"
                }
                disabled={loading}
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

            {/* Debt Collection Location */}
            <div style={{ fontSize: 16, fontWeight: 600 }} className="mt-6">
              Where do you primarily collect debts?
            </div>
            <input
              placeholder="Specific cities, counties, or regions"
              className="border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0"
              style={{ fontSize: 15, fontWeight: 500, borderRadius: "7px", marginTop: "8px" }}
              value={customerService}
              onChange={(e) => setCustomerService(e.target.value)}
            />

            {/* Company Name */}
            <div style={{ fontSize: 16, fontWeight: 600 }} className="mt-6">
              Name of the company or collection agency you work with, if any.
            </div>
            <input
              placeholder="Name"
              className="border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0"
              style={{ fontSize: 15, fontWeight: 500, borderRadius: "7px", marginTop: "8px" }}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            {/* Typical Balance Size */}
            <div style={{ fontSize: 16, fontWeight: 600 }} className="mt-6">
              What is the typical balance size of debts you recover?
            </div>
            <input
              placeholder="Type here"
              className="border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0"
              style={{ fontSize: 15, fontWeight: 500, borderRadius: "7px", marginTop: "8px" }}
              value={installationVolume}
              type="number"
              onChange={(e) => setInstallationVolume(e.target.value)}
            />

            {/* Client Type */}
            <div style={{ fontSize: 16, fontWeight: 600 }} className="mt-6">
              Typical Collection Strategy
            </div>
            <div
              className="flex w-full flex-wrap flex-row items-center gap-4 border"
              style={{ marginTop: "8px" }}
            >
              {primaryClientTypes.map((item) => (
                <div key={item.id} className="w-full">
                  <button
                    onClick={() => handleSelectClientType(item)}
                    className="border border-[#00000010] rounded px-4 h-[70px] outline-none focus:outline-none focus:ring-0 w-full"
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      borderRadius: "30px",
                      paddingInline: item.id === 3 ? "40px" : undefined,
                      border: ClientType === item.title ? "2px solid #7902DF" : "",
                      backgroundColor: ClientType === item.title ? "#7902DF20" : "",
                    }}
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>

            {/* Modal */}
            <Modal
              open={showVerifyPopup}
              closeAfterTransition
              BackdropProps={{
                timeout: 1000,
                sx: {
                  backgroundColor: "#00000020",
                },
              }}
            >
              <Box
                className="lg:w-8/12 sm:w-full w-8/12"
                sx={{
                  height: "auto",
                  bgcolor: "transparent",
                  mx: "auto",
                  my: "50vh",
                  transform: "translateY(-55%)",
                  borderRadius: 2,
                  border: "none",
                  outline: "none",
                }}
              >
                <div className="flex flex-row justify-center w-full">
                  <div
                    className="sm:w-7/12 w-full"
                    style={{
                      backgroundColor: "#ffffff",
                      padding: 20,
                      borderRadius: "13px",
                    }}
                  >
                    <div className="flex flex-row justify-end">
                      <button onClick={handleClose}>
                        <Image
                          src={"/assets/crossIcon.png"}
                          height={40}
                          width={40}
                          alt="Close"
                        />
                      </button>
                    </div>
                    <div style={{ fontSize: 26, fontWeight: 700 }}>
                      Verify phone number
                    </div>
                    <div
                      className="mt-8"
                      style={{ fontSize: 15, fontWeight: 500, color: "#00000060" }}
                    >
                      Enter code that was sent to number ending with *{userPhoneNumber.slice(-4)}.
                    </div>

                    {/* Verify Code Inputs */}
                    <div
                      className="mt-8"
                      style={{ display: "flex", gap: "8px" }}
                    >
                      {Array.from({ length }).map((_, index) => (
                        <input
                          key={index}
                          ref={(el) => (verifyInputRef.current[index] = el)}
                          type="tel"
                          inputMode="numeric"
                          maxLength={1}
                          value={VerifyCode[index]}
                          onChange={(e) => handleVerifyInputChange(e, index)}
                          onKeyDown={(e) => handleBackspace(e, index)}
                          onKeyUp={(e) => {
                            if (
                              e.key === "Enter" &&
                              VerifyCode.every((v) => v.trim() !== "")
                            ) {
                              handleVerifyCode();
                            }
                          }}
                          onPaste={handlePaste}
                          placeholder="-"
                          style={{
                            width: "40px",
                            height: "40px",
                            textAlign: "center",
                            fontSize: "20px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                          }}
                          className="focus:outline-none focus:ring-0"
                        />
                      ))}
                    </div>

                    {/* Resend */}
                    <div
                      className="mt-8 flex flex-row items-center gap-2"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Didn't receive code?
                      {sendcodeLoader ? (
                        <CircularProgress size={17} />
                      ) : (
                        <button
                          className="outline-none border-none text-purple"
                          onClick={handleVerifyPopup}
                        >
                          Resend
                        </button>
                      )}
                    </div>

                    {/* Continue Button */}
                    {registerLoader ? (
                      <div className="flex flex-row items-center justify-center mt-8">
                        <CircularProgress size={35} />
                      </div>
                    ) : (
                      <button
                        className="text-white bg-purple outline-none rounded-xl w-full mt-8"
                        style={{ height: "50px" }}
                        onClick={handleVerifyCode}
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              </Box>
            </Modal>

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

      {/* ProgressBar and Footer */}
      <div className="h-[10%]">
        <div>
          <ProgressBar value={80} />
        </div>
        <Footer
          handleContinue={handleVerifyPopup}
          handleBack={handleSolarAgentBack}
          registerLoader={registerLoader}
          shouldContinue={shouldContinue}
        />
      </div>
    </div>
  </div>
);
};

export default DebtCollerterAgentSignUp;
