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
import { setCookie } from "@/utilities/cookies";
import { GetCampaigneeNameIfAvailable } from "@/utilities/UserUtility";
import { PersistanceKeys } from "@/constants/Constants";
import { UserTypes } from "@/constants/UserTypes";
import RealEstateOtherDetails from "./RealEstateOtherDetails";
// import RealEstateOtherDetails from "./RealEstateOtherDetails";
// import SolarRepAgentSignUp from "../otherAgentsSignUp/SolarRepAgentSignUp";
// import SolarRepOtherDetails from "./SalesRepOtherDetails";
// import SalesDevRepOtherDetails from "./SolerDevRepOtherDetails";
// import InsuranceOtherDetails from "./InsuranceOtherDetails";
// import MarketerOtherDetails from "./MarketerOtherDetails";
// import RecuiterOtherDetails from "./RecuiterOtherDetails";
// import DebtCollectorOtherDetails from "./DebtCollectorOtherDetails";
// import WebsiteAgentOtherDetails from "./WebsiteAgentOtherDetails";
// import MedSpaAgentOtherDetails from "./MedSpaAgentOtherDetails";
// import LawAgentOtherDetails from "./LawAgentOtherDetails";
// import LoanOfficerOtherDetails from "./LoanOfficerOtherDetails";

// Props Interface
interface OtherDetailsProps {
  handleContinue: () => void;
  handleBack: () => void;
  length?: number;
  onComplete?: (code: string) => void;
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

const OtherDetails: React.FC<OtherDetailsProps> = ({
  handleContinue,
  handleBack,
  length = 6,
  onComplete,
  userDetails,
}) => {
  const verifyInputRef = useRef<Array<HTMLInputElement | null>>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputsFields = useRef<Array<HTMLInputElement | null>>([]);

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

  // Other agent variables
  const [service, setService] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");

  const [installationVolume, setInstallationVolume] = useState<string>("");
  const [projectSize, setProjectSize] = useState<string>("");
  const [ClientType, setClientType] = useState<string | null>(null);
  const [collectionStretigy, setCollectionStretigy] = useState<string | null>(null);

  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [urlErrorMessage, setUrlErrorMessage] = useState<string>("");

  const [territory, setTerritory] = useState<string>("");
  const [firmOrCompanyAffiliation, setFirmOrCompanyAffiliation] = useState<string>("");
  const [averageMonthlyClients, setAverageMonthlyClients] = useState<string>("");

  const [consultation, setConsultation] = useState<string>("");
  const [caseVolume, setCaseVolume] = useState<string>("");

  const primaryClientTypes = [
    { id: 1, title: "Residential clients" },
    { id: 2, title: "Commercial clients" },
    { id: 3, title: "Both" },
  ];
  // Load userData from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem(PersistanceKeys.RegisterDetails);
    if (storedData) {
      const data = JSON.parse(storedData);
      setUserData(data);
    }
  }, []);

  // Focus first input field on mount
  useEffect(() => {
    const registrationDetails = localStorage.getItem(PersistanceKeys.RegisterDetails);
    inputsFields.current[0]?.focus();

    if (registrationDetails) {
      const registrationData = JSON.parse(registrationDetails);
      setUserData(registrationData);
    }
  }, []);

  // Agent validation
  useEffect(() => {
    if (
      userData?.userTypeTitle === UserTypes.SalesDevRep ||
      userData?.userTypeTitle === UserTypes.MarketerAgent
    ) {
      setShouldContinue(service && companyName ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.RealEstateAgent) {
      setShouldContinue(userFarm && userBrokage && userTransaction ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.SolarRep) {
      setShouldContinue(service && companyName && installationVolume && projectSize && ClientType ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.InsuranceAgent) {
      setShouldContinue(userFarm && userBrokage ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.DebtCollectorAgent) {
      setShouldContinue(service && companyName && installationVolume && collectionStretigy ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.WebsiteAgent) {
      setShouldContinue(websiteUrl ? false : true);
    }
    else if (
      userData?.userTypeTitle === UserTypes.RecruiterAgent ||
      userData?.userTypeTitle === UserTypes.TaxAgent
    ) {
      setShouldContinue(service ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.MedSpaAgent) {
      setShouldContinue(territory && firmOrCompanyAffiliation && averageMonthlyClients ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.LawAgent) {
      setShouldContinue(territory && firmOrCompanyAffiliation && caseVolume && consultation && ClientType ? false : true);
    }
    else if (userData?.userTypeTitle === UserTypes.LoanOfficerAgent) {
      setShouldContinue(territory && firmOrCompanyAffiliation && ClientType ? false : true);
    }
    else {
      setShouldContinue(userFarm && userBrokage && userTransaction ? false : true);
    }
  }, [
    userFarm,
    userBrokage,
    userTransaction,
    service,
    companyName,
    installationVolume,
    projectSize,
    ClientType,
    collectionStretigy,
    websiteUrl,
    territory,
    firmOrCompanyAffiliation,
    averageMonthlyClients,
    caseVolume,
    consultation,
  ]);

  // Focus verify input field when popup opens
  useEffect(() => {
    if (showVerifyPopup && verifyInputRef.current[0]) {
      verifyInputRef.current[0]?.focus();
    }
  }, [showVerifyPopup]);

  // Handlers
  const handleSelectClientType = (item: { id: number; title: string }) => {
    setClientType(item.title);
  };

  const handleSelectCollectionStretigy = (item: { id: number; title: string }) => {
    setCollectionStretigy(item.title);
  };

  const handleConsultationFormat = (item: { title: string }) => {
    setConsultation(item.title);
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

  const checkPhoneNumber = async (value: string) => {
    try {
      setPhoneNumberLoader(true);
      const ApiPath = Apis.CheckPhone;
      const ApiData = { phone: value };

      const response: any = await axios.post(ApiPath, ApiData, {
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

  const handleVerifyPopup = async () => {
    try {
      setShowVerifyPopup(true);
      setTimeout(() => {
        if (verifyInputRef.current[0]) {
          verifyInputRef.current[0]?.focus();
        }
      }, 100);

      setSendcodeLoader(true);
      const response = await SendVerificationCode(userDetails.phone, true);
      setResponse(response);
      setIsVisible(true);
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setSendcodeLoader(false);
    }
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

  const handleVerifyCode = () => {
    setPhoneVerifiedSuccessSnack(true);
    handleRegister();
  };

  const handleRegister = async () => {
    try {
      setRegisterLoader(true);

      const agentTitle: string = userData?.userTypeTitle;

      const formData = new FormData();
      const ApiPath = Apis.register;

      let campainee = typeof window !== "undefined" ? GetCampaigneeNameIfAvailable(window) : null;
      if (campainee) {
        formData.append("campaignee", campainee);
      }

      formData.append("name", userDetails.name);
      formData.append("email", userDetails.email);
      formData.append("phone", userDetails.phone);

      // Conditionally append optional fields
      if (userFarm) {
        formData.append("farm", userFarm);
      }
      if (userBrokage) {
        formData.append("brokerage", userBrokage);
      }
      if (userTransaction) {
        formData.append("averageTransactionPerYear", userTransaction);
      }
      if (service) {
        formData.append("areaOfService", service);
      }
      if (companyName) {
        formData.append("company", companyName);
      }
      if (installationVolume) {
        formData.append("projectsPerYear", installationVolume);
      }
      if (projectSize) {
        formData.append("projectSizekw", projectSize);
      }
      if (websiteUrl) {
        formData.append("website", websiteUrl);
      }
      if (collectionStretigy) {
        formData.append("collectionStrategy", collectionStretigy);
      }
      if (ClientType) {
        formData.append("clientType", ClientType);
      }
      if (territory) {
        formData.append("territory", territory);
      }
      if (firmOrCompanyAffiliation) {
        formData.append("firmOrCompanyAffiliation", firmOrCompanyAffiliation);
      }
      if (averageMonthlyClients) {
        formData.append("averageMonthlyClients", averageMonthlyClients);
      }
      if (caseVolume) {
        formData.append("caseVolume", caseVolume);
      }
      if (consultation) {
        formData.append("consultationFormat", consultation);
      }

      // Required fields
      formData.append("agentService", JSON.stringify(userData?.serviceID || []));
      formData.append("areaOfFocus", JSON.stringify(userData?.focusAreaId || []));
      formData.append("userType", agentTitle || "");
      formData.append("login", "false");
      formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
      formData.append("verificationCode", VerifyCode.join(""));

      // Optional: Debug log
      // for (let [key, value] of formData.entries()) {
      //   console.log(`${key}: ${value}`);
      // }

      // Submit the form
      const response: any = await axios.post(ApiPath, formData);

      if (response) {
        const result = response.data;
        setResponse(result);
        setIsVisible(true);

        if (response.data.status === true) {
          // Clear localStorage
          localStorage.removeItem(PersistanceKeys.RegisterDetails);
          localStorage.setItem("User", JSON.stringify(response.data.data));

          // Set cookie
          if (typeof document !== "undefined") {
            setCookie(response.data.data.user, document);
          }

          // Responsive navigation
          const screenWidth = window.innerWidth;
          const SM_SCREEN_SIZE = 640;

          if (screenWidth <= SM_SCREEN_SIZE) {
            setShowVerifyPopup(false);
            setCongratsPopup(true);
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
  const getOtherAgentDetailsComponent = (): React.ReactNode => {
    return (
      <RealEstateOtherDetails
        inputsFields={inputsFields}
        userBrokage={userBrokage}
        userFarm={userFarm}
        userTransaction={userTransaction}
        setUserBrokage={setUserBrokage}
        setUserFarm={setUserFarm}
        setUserTransaction={setUserTransaction}
        handleVerifyPopup={handleVerifyPopup}
      />
    )
  }

  // if (userData?.userTypeTitle) {

  //   if (userData?.userTypeTitle === UserTypes.RealEstateAgent) {
  //     return (
  //       <RealEstateOtherDetails
  //         inputsFields={inputsFields}
  //         userBrokage={userBrokage}
  //         userFarm={userFarm}
  //         userTransaction={userTransaction}
  //         setUserBrokage={setUserBrokage}
  //         setUserFarm={setUserFarm}
  //         setUserTransaction={setUserTransaction}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.SalesDevRep) {
  //     return (
  //       <SalesDevRepOtherDetails
  //         inputsFields={inputsFields}
  //         service={service}
  //         companyName={companyName}
  //         setService={setService}
  //         setCompanyName={setCompanyName}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.SolarRep) {
  //     return (
  //       <SolarRepOtherDetails
  //         inputsFields={inputsFields}
  //         installationVolume={installationVolume}
  //         projectSize={projectSize}
  //         ClientType={ClientType}
  //         setInstallationVolume={setInstallationVolume}
  //         setProjectSize={setProjectSize}
  //         companyName={companyName}
  //         setCompanyName={setCompanyName}
  //         service={service}
  //         setService={setService}
  //         setClientType={setClientType}
  //         handleSelectClientType={handleSelectClientType}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.InsuranceAgent) {
  //     return (
  //       <InsuranceOtherDetails
  //         inputsFields={inputsFields}
  //         userBrokage={userBrokage}
  //         userFarm={userFarm}
  //         setUserBrokage={setUserBrokage}
  //         setUserFarm={setUserFarm}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.MarketerAgent) {
  //     return (
  //       <MarketerOtherDetails
  //         inputsFields={inputsFields}
  //         service={service}
  //         companyName={companyName}
  //         setService={setService}
  //         setCompanyName={setCompanyName}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (
  //     userData?.userTypeTitle === UserTypes.RecruiterAgent ||
  //     userData?.userTypeTitle === UserTypes.TaxAgent
  //   ) {
  //     return (
  //       <RecuiterOtherDetails
  //         inputsFields={inputsFields}
  //         service={service}
  //         setService={setService}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.DebtCollectorAgent) {
  //     return (
  //       <DebtCollectorOtherDetails
  //         inputsFields={inputsFields}
  //         service={service}
  //         setService={setService}
  //         companyName={companyName}
  //         setCompanyName={setCompanyName}
  //         installationVolume={installationVolume}
  //         setInstallationVolume={setInstallationVolume}
  //         handleVerifyPopup={handleVerifyPopup}
  //         collectionStretigy={collectionStretigy}
  //         handleSelectCollectionStretigy={handleSelectCollectionStretigy}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.WebsiteAgent) {
  //     return (
  //       <WebsiteAgentOtherDetails
  //         websiteUrl={websiteUrl}
  //         setWebsiteUrl={setWebsiteUrl}
  //         urlErrorMessage={urlErrorMessage}
  //         setUrlErrorMessage={setUrlErrorMessage}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.MedSpaAgent) {
  //     return (
  //       <MedSpaAgentOtherDetails
  //         inputsFields={inputsFields}
  //         customerService={territory}
  //         setCustomerService={setTerritory}
  //         companyName={firmOrCompanyAffiliation}
  //         setCompanyName={setFirmOrCompanyAffiliation}
  //         installationVolume={averageMonthlyClients}
  //         setInstallationVolume={setAverageMonthlyClients}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.LawAgent) {
  //     return (
  //       <LawAgentOtherDetails
  //         inputsFields={inputsFields}
  //         customerService={territory}
  //         setCustomerService={setTerritory}
  //         companyName={firmOrCompanyAffiliation}
  //         setCompanyName={setFirmOrCompanyAffiliation}
  //         installationVolume={caseVolume}
  //         setInstallationVolume={setCaseVolume}
  //         handleVerifyPopup={handleVerifyPopup}
  //         consultation={consultation}
  //         handleConsultationFormat={handleConsultationFormat}
  //         ClientType={ClientType}
  //         handleSelectClientType={handleSelectClientType}
  //       />
  //     );
  //   }

  //   if (userData?.userTypeTitle === UserTypes.LoanOfficerAgent) {
  //     return (
  //       <LoanOfficerOtherDetails
  //         inputsFields={inputsFields}
  //         customerService={territory}
  //         setCustomerService={setTerritory}
  //         companyName={firmOrCompanyAffiliation}
  //         setCompanyName={setFirmOrCompanyAffiliation}
  //         ClientType={ClientType}
  //         handleSelectClientType={handleSelectClientType}
  //         handleVerifyPopup={handleVerifyPopup}
  //       />
  //     );
  //   }
  // };




  // Final return
  return (
    <div
      style={{ width: "100%" }}
      className="overflow-y-hidden flex flex-row justify-center items-center"
    >
      <div className="bg-white sm:rounded-2xl sm:mx-2 w-full md:w-10/12 h-[100%] sm:max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple">
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
            >
              Your Contact Information
            </div>

            <div
              className="mt-4 sm:mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[90%] sm:max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2"
              style={{ scrollbarWidth: "none" }}
            >
              {getOtherAgentDetailsComponent()}

              {/* Verify Modal */}
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
                  className="lg:w-8/12 sm:w-full sm:w-10/12 w-full"
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
                      className="sm:w-7/12 w-full mx-2"
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
                            alt="*"
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          fontSize: 26,
                          fontWeight: "700",
                        }}
                      >
                        Verify phone number
                      </div>

                      <div
                        className="mt-8"
                        style={{
                          fontSize: 15,
                          fontWeight: "500",
                          color: "#00000060",
                        }}
                      >
                        Enter code that was sent to number ending with ***
                        {userDetails?.phone.slice(-4)}.
                      </div>

                      <div
                        className="mt-8"
                        style={{ display: "flex", gap: "8px" }}
                      >
                        {Array.from({ length }).map((_, index) => (
                          <input
                            key={index}
                            ref={(el) => { verifyInputRef.current[index] = el }}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                            enterKeyHint="done"
                            type="tel"
                            inputMode="numeric"
                            maxLength={1}
                            value={VerifyCode[index]}
                            onChange={(e) => handleVerifyInputChange(e, index)}
                            onKeyDown={(e) => handleBackspace(e, index)}
                            onKeyUp={(e) => {
                              if (
                                e.key === "Enter" &&
                                VerifyCode.every((value) => value.trim() !== "")
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

                      <div
                        className="mt-8 flex flex-row items-center gap-2"
                        style={{
                          fontSize: 15,
                          fontWeight: "500",
                        }}
                      >
                        {`Didn't receive code?`}
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

                      {registerLoader ? (
                        <div className="flex flex-row items-center justify-center mt-8">
                          <CircularProgress size={35} />
                        </div>
                      ) : (
                        <button
                          className="text-white bg-purple outline-none rounded-xl w-full mt-8"
                          style={{
                            height: "50px",
                            fontSize: 15,
                            fontWeight: "700",
                          }}
                          onClick={handleVerifyCode}
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  </div>
                </Box>
              </Modal>

              {/* Congrats Modal */}
              <Modal
                open={congratsPopup}
                closeAfterTransition
                BackdropProps={{
                  timeout: 1000,
                  sx: {
                    backgroundColor: "#00000020",
                  },
                }}
              >
                <Box
                  className="w-full"
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
                      className="w-full mx-4"
                      style={{
                        backgroundColor: "#ffffff",
                        padding: 20,
                        borderRadius: "13px",
                      }}
                    >
                      <div className="w-full mt-2 flex flex-row justify-center">
                        <Image
                          src="/agentXOrb.gif"
                          style={{
                            height: "100px",
                            width: "110px",
                            objectFit: "contain",
                          }}
                          height={102}
                          width={102}
                          alt="*"
                        />
                      </div>

                      <div
                        style={{
                          fontSize: 26,
                          fontWeight: "700",
                          textAlign: "center",
                          marginTop: 20,
                        }}
                      >
                        Congrats!
                      </div>

                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: "600",
                          textAlign: "center",
                          marginTop: 50,
                          color: "#00000070",
                        }}
                      >
                        Your account is created!
                      </div>

                      {registerLoader ? (
                        <div className="flex flex-row items-center justify-center mt-8">
                          <CircularProgress size={35} />
                        </div>
                      ) : (
                        <button
                          className="text-white bg-purple outline-none rounded-xl w-full mt-8"
                          style={{
                            height: "50px",
                            fontSize: 15,
                            fontWeight: "700",
                          }}
                          onClick={() => {
                            router.push("/createagent");
                          }}
                        >
                          Get Started
                        </button>
                      )}
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="h-[10%]">
          <div>
            <ProgressBar value={80} />
          </div>

          <Footer
            handleContinue={handleVerifyPopup}
            handleBack={handleBack}
            registerLoader={registerLoader}
            shouldContinue={shouldContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
