import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Modal, CircularProgress } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SnackMessages from "@/components/onboarding/services/AuthVerification/SnackMessages";
import ProgressBar from "@/components/onboarding/ProgressBar";
import Footer from "@/components/onboarding/Footer";
import { PersistanceKeys } from "@/constants/Constants";
import { validateEmail } from "@/utilities/validateEmail";
import Apis from "@/components/apis/Apis";
import axios from "axios";

type TaxAgentSignUpProps = {
  handleTaxAgentBack: () => void;
};

type EmailCheckResponse = {
  status: boolean;
  message: string;
};

const TaxAgentSignUp: React.FC<TaxAgentSignUpProps> = ({ handleTaxAgentBack }) => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [servicesOffered, setServicesOffered] = useState<string[]>([]);

  const [emailLoader, setEmailLoader] = useState<boolean>(false);
  const [emailCheckResponse, setEmailCheckResponse] = useState<EmailCheckResponse | null>(null);
  const [validEmail, setValidEmail] = useState<string>("");

  const [locationLoader, setLocationLoader] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [phoneNumberLoader, setPhoneNumberLoader] = useState<boolean>(false);
  const [checkPhoneResponse, setCheckPhoneResponse] = useState<EmailCheckResponse | null>(null);

  const [showVerifyPopup, setShowVerifyPopup] = useState<boolean>(false);
  const [VerifyCode, setVerifyCode] = useState<string[]>(Array(6).fill(""));
  const verifyInputRef = useRef<HTMLInputElement[]>([]);
  const length = 6;

  const [sendcodeLoader, setSendcodeLoader] = useState<boolean>(false);
  const [registerLoader, setRegisterLoader] = useState<boolean>(false);

  const [shouldContinue, setShouldContinue] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [response, setResponse] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const servicesOptions = [
    { title: "Individual Tax Preparation" },
    { title: "Business Tax Preparation" },
    { title: "Tax Planning & Consulting" },
    { title: "Bookkeeping & Accounting" },
    { title: "Payroll Services" },
    { title: "Other" },
  ];
  const styles = {
    headingStyle: {
      fontSize: 16,
      fontWeight: "600",
    },
    inputStyle: {
      fontSize: 15,
      fontWeight: "500",
      borderRadius: "7px",
    },
    errmsg: {
      fontSize: 12,
      fontWeight: "500",
      borderRadius: "7px",
    },
    verifyPopup: {
      height: "auto",
      mx: "auto",
      my: "50vh",
      transform: "translateY(-55%)",
      border: "none",
      outline: "none",
    },
  };

  const checkEmail = async (email: string) => {
    setEmailLoader(true);
    try {
      const response : any = await axios.post(Apis.CheckEmail, { email });
      if (response?.data) {
        setEmailCheckResponse({
          status: response.data.status,
          message: response.data.message,
        });
      }
    } catch (error) {
      console.error("Error checking email:", error);
    } finally {
      setEmailLoader(false);
    }
  };

  const handlePhoneNumberChange = (value: string) => {
    setUserPhoneNumber(value);
    // Optionally: add debounce + phone validation logic here
  };

  const handleSelectService = (item: { title: string }) => {
    if (servicesOffered.includes(item.title)) {
      setServicesOffered(servicesOffered.filter((t) => t !== item.title));
    } else {
      setServicesOffered([...servicesOffered, item.title]);
    }
  };

  const handleVerifyPopup = () => {
    setShowVerifyPopup(true);
  };

  const handleClose = () => {
    setShowVerifyPopup(false);
  };

  useEffect(() => {
    if (servicesOffered.length > 0) {
      setShouldContinue(false);
    } else {
      setShouldContinue(true);
    }
  }, [servicesOffered]);
  return (
    <div className="flex flex-row w-full justify-center h-[100svh]">
      <div className="w-full flex flex-col items-center px-4 h-[90%]">
        <div className="mt-6 w-11/12 md:text-4xl text-lg font-[600]" style={{ textAlign: "center" }}>
          Your Contact Information
        </div>

        <div
          className="mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Name */}
          <div style={styles.headingStyle}>What's your full name</div>
          <input
            placeholder="Name"
            className="border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0"
            style={{ ...styles.inputStyle, marginTop: "8px" }}
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
            <div style={styles.headingStyle}>What's your email address</div>
            <div>
              {emailLoader ? (
                <p style={{ ...styles.errmsg, color: "black" }}>Checking ...</p>
              ) : (
                emailCheckResponse && (
                  <p
                    style={{
                      ...styles.errmsg,
                      color: emailCheckResponse.status ? "green" : "red",
                    }}
                  >
                    {emailCheckResponse.message.charAt(0).toUpperCase() + emailCheckResponse.message.slice(1)}
                  </p>
                )
              )}
              <div style={{ ...styles.errmsg, color: "red" }}>{validEmail}</div>
            </div>
          </div>

          <input
            className="border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0"
            style={{ ...styles.inputStyle, marginTop: "8px" }}
            value={userEmail}
            type="text"
            placeholder="Email address"
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
            onFocus={(e) => e.target.setAttribute("autocomplete", "off")}
          />

          {/* Phone */}
          <div className="flex flex-row items-center justify-between w-full mt-6">
            <div style={styles.headingStyle}>What's your phone number</div>
            <div>
              {locationLoader && (
                <p className="text-purple" style={{ ...styles.errmsg, height: "20px" }}>
                  Getting location ...
                </p>
              )}
              {errorMessage ? (
                <p
                  style={{
                    ...styles.errmsg,
                    color: "red",
                    height: "20px",
                  }}
                >
                  {errorMessage}
                </p>
              ) : phoneNumberLoader ? (
                <p
                  style={{
                    ...styles.errmsg,
                    color: "black",
                    height: "20px",
                  }}
                >
                  Checking ...
                </p>
              ) : checkPhoneResponse ? (
                <p
                  style={{
                    ...styles.errmsg,
                    color: checkPhoneResponse.status ? "green" : "red",
                    height: "20px",
                  }}
                >
                  {checkPhoneResponse.message.charAt(0).toUpperCase() + checkPhoneResponse.message.slice(1)}
                </p>
              ) : (
                <div />
              )}
            </div>
          </div>

          <div style={{ marginTop: "8px" }}>
            <PhoneInput
              className="border outline-none bg-white"
              country={"us"}
              onlyCountries={["us"]}
              disableDropdown={true}
              countryCodeEditable={false}
              value={userPhoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder={locationLoader ? "Loading location ..." : "Enter Phone Number"}
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
            />
          </div>

          {/* Company */}
          <div style={styles.headingStyle} className="mt-6">
            Name of the company you work with, if any.
          </div>
          <input
            placeholder="Company Name"
            className="border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0"
            style={{ ...styles.inputStyle, marginTop: "8px" }}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          {/* Services Offered */}
          <div style={styles.headingStyle} className="mt-6">
            Services You Offer
          </div>
          <div className="flex flex-wrap items-center gap-4" style={{ marginTop: "8px" }}>
            {servicesOptions.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleSelectService(item)}
                  className="border border-[#00000010] rounded px-4 h-[70px] outline-none focus:outline-none focus:ring-0 w-auto"
                  style={{
                    ...styles.inputStyle,
                    borderRadius: "30px",
                    whiteSpace: "nowrap",
                    border: servicesOffered.includes(item.title) ? "2px solid #7902DF" : "",
                    backgroundColor: servicesOffered.includes(item.title) ? "#402FFF20" : "",
                  }}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
          {/* Verification Modal */}
          <Modal
            open={showVerifyPopup}
            closeAfterTransition
            BackdropProps={{
              timeout: 1000,
              sx: { backgroundColor: "#00000020" },
            }}
          >
            <Box className="lg:w-8/12 sm:w-full w-8/12" sx={styles.verifyPopup}>
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
                  <div style={{ fontSize: 26, fontWeight: "700" }}>
                    Verify phone number
                  </div>
                  <div
                    className="mt-8"
                    style={{ ...styles.inputStyle, color: "#00000060" }}
                  >
                    Enter code that was sent to number ending with *{userPhoneNumber.slice(-4)}.
                  </div>

                  {/* Verification Code Input */}
                  <div className="mt-8" style={{ display: "flex", gap: "8px" }}>
                    {Array.from({ length }).map((_, index) => (
                      <input
                        key={index}
                        ref={(el) => {verifyInputRef.current[index] = el!}}
                        type="tel"
                        inputMode="numeric"
                        maxLength={1}
                        value={VerifyCode[index]}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (!/[0-9]/.test(value) && value !== "") return;
                          const newValues = [...VerifyCode];
                          newValues[index] = value;
                          setVerifyCode(newValues);
                        }}
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
                    style={styles.inputStyle}
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

                  {registerLoader ? (
                    <div className="flex flex-row items-center justify-center mt-8">
                      <CircularProgress size={35} />
                    </div>
                  ) : (
                    <button
                      className="text-white bg-purple outline-none rounded-xl w-full mt-8"
                      style={{ height: "50px" }}
                      onClick={() => {
                        // Example: handle verification submit
                        console.log("Verifying code...");
                        setShowVerifyPopup(false);
                      }}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
            </Box>
          </Modal>

          {/* Snack Message */}
          <SnackMessages
            message={response.message}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            success={response.status}
          />
        </div>

        {/* Footer */}
        <div className="h-[10%]">
          <div>
            <ProgressBar value={80} />
          </div>

          <Footer
            handleContinue={handleVerifyPopup}
            handleBack={handleTaxAgentBack}
            registerLoader={registerLoader}
            shouldContinue={shouldContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default TaxAgentSignUp;
