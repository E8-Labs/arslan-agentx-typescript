"use client";

import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  ClipboardEvent,
  ChangeEvent,
} from "react";
import { Box, CircularProgress, Modal } from "@mui/material";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Image from "next/image";
import Link from "next/link";

import Apis from "../apis/Apis";
import AgentSelectSnackMessage, {
  SnackbarTypes,
} from "../dashboard/leads/AgentSelectSnackMessage";
import LoaderAnimation from "../animations/LoaderAnimation";
import { setUserCookie } from "@/app/utilities/CookieHelper";
import { ArrowRightIcon } from "@phosphor-icons/react";
import SendVerificationCode from "../onboarding/services/AuthVerification/AuthService";



  const styles : { [key: string]: React.CSSProperties } = {
    errmsg: {
      fontSize: 12,
      fontWeight: "500",
      borderRadius: "7px",
    },
    verifyPopup: {
      height: "auto",
      backgroundColor: "white",
      // p: 2,
      // mx: "auto",
      // my: "50vh",
      marginTop:'50vh',
      marginBottom:'50vh',
      marginRight:'auto',
      marginLeft:'auto',
      transform: "translateY(-50%)",
      borderRadius: 2,
      border: "none",
      outline: "none",
    },
  };


interface User {
  userType: string;
  userRole: string;
  plan?: { status: string };
  canAcceptPaymentsAgencyccount?: boolean;
  profile_status?: string;
  waitlist?: boolean;
}

interface VerificationResponse {
  status: boolean;
  message?: string;
  data?: { user: User };
}

interface LoginComponentProps {
  length?: number;
  onComplete?: (code: string) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ length = 6, onComplete }) => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const [redirect, setRedirect] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState("us");
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [sendcodeLoader, setSendcodeLoader] = useState(false);
  const [loginLoader, setLoginLoader] = useState(false);
  const [phoneNumberLoader, setPhoneNumberLoader] = useState(false);
  const [checkPhoneResponse, setCheckPhoneResponse] = useState<VerificationResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [VerifyCode, setVerifyCode] = useState<string[]>(Array(length).fill(""));
  const [showVerifyPopup, setShowVerifyPopup] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [snackMessage, setSnackMessage] = useState<string>("");
  const [msgType, setMsgType] = useState<SnackbarTypes | null>(SnackbarTypes.Error);
  const [loaderTitle, setLoaderTitle] = useState("Launching your account...");
  const [InnerWidth, setInnerWidth] = useState<number>(0);
  const [locationLoader, setLocationLoader] = useState(false);
  const [loading, setLoading] = useState(false);

  const verifyInputRef = useRef<(HTMLInputElement | null)[]>([]);
  const userPhoneNumberRef = useRef<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setRedirect(searchParams.get("redirect"));
  }, [searchParams]);

  useEffect(() => {
    userPhoneNumberRef.current = userPhoneNumber;
  }, [userPhoneNumber]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  const handlePhoneNumberChange = (phone: string) => {
    setUserPhoneNumber(phone);
    validatePhoneNumber(phone);
    setCheckPhoneResponse(null);
    if (!phone) {
      setErrorMessage("");
      setCheckPhoneResponse(null);
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const parsedNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
    if (!parsedNumber || !parsedNumber.isValid()) {
      setErrorMessage("Invalid");
    } else {
      setErrorMessage("");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => checkPhoneNumber(phoneNumber), 300);
    }
  };

  const checkPhoneNumber = async (value: string) => {
    try {
      setPhoneNumberLoader(true);
      const response = await fetch(Apis.CheckPhone, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: value }),
      });
      const result: VerificationResponse = await response.json();
      console.log('result', result)
      setCheckPhoneResponse(result);
    } catch (error) {
      console.error("Error checking phone number", error);
    } finally {
      setPhoneNumberLoader(false);
    }
  };

  const handleVerifyPopup = async () => {
    try {
      setShowVerifyPopup(true);
      setSendcodeLoader(true);
      const response: VerificationResponse = await SendVerificationCode(userPhoneNumber, true);
      setIsVisible(true);
      if (response.status) {
        setMsgType(SnackbarTypes.Success);
        setSnackMessage("Code sent");
      } else {
        setMsgType(SnackbarTypes.Error);
        setSnackMessage(response.message || "Verification failed");
      }
    } catch (error) {
      setMsgType(SnackbarTypes.Error);
      setSnackMessage("Login failed");
    } finally {
      setSendcodeLoader(false);
      setTimeout(() => verifyInputRef.current[0]?.focus(), 100);
    }
  };

  const handleVerifyInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (!/[0-9]/.test(value) && value !== "") return;
    const newValues = [...VerifyCode];
    newValues[index] = value;
    setVerifyCode(newValues);
    if (value && index < length - 1) verifyInputRef.current[index + 1]?.focus();
    if (newValues.every((num) => num !== "") && onComplete) onComplete(newValues.join(""));
  };

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (VerifyCode[index] === "" && index > 0) verifyInputRef.current[index - 1]?.focus();
      const newValues = [...VerifyCode];
      newValues[index] = "";
      setVerifyCode(newValues);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text").slice(0, length);
    const newValues = pastedText.split("").map((char) => (/[0-9]/.test(char) ? char : ""));
    setVerifyCode(newValues);
    newValues.forEach((char, index) => {
      if (verifyInputRef.current[index]) {
        verifyInputRef.current[index]!.value = char;
        if (index === newValues.length - 1) verifyInputRef.current[index]?.focus();
      }
    });
    if (newValues.every((num) => num !== "") && onComplete) onComplete(newValues.join(""));
  };

  const handleLogin = async () => {
    try {
      setLoginLoader(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          phone: userPhoneNumber,
          verificationCode: VerifyCode.join(""),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });
      const data: VerificationResponse = await response.json();
      if (response.ok && data.status) {
        localStorage.setItem("User", JSON.stringify(data.data));
        setUserCookie(data.data!.user);
        if (data.data!.user.waitlist) router.push("/onboarding/WaitList");
        else if (redirect) router.push(redirect);
        else {
          const user = data.data!.user;
          if (user.userType === "admin") router.push("/admin");
          else if (user.userRole === "AgencySubAccount") router.push("/subaccountInvite");
          else if (user.userRole === "Agency") {
            if (!user.canAcceptPaymentsAgencyccount) router.push("/agency/verify");
            else router.push("/agency/dashboard");
          } else {
            router.push("/dashboard/leads");
          }
        }
      } else {
        setMsgType(SnackbarTypes.Error);
        setSnackMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMsgType(SnackbarTypes.Error);
      setSnackMessage("An unexpected error occurred.");
    } finally {
      setLoginLoader(false);
      setIsVisible(true);
    }
  };

  return (
    <div className="flex flex-row w-full justify-center h-[100svh]">
      {/* <div className='w-6/12 ms-8 flex flex-row justify-center ' style={backgroundImage}>
        <div className='w-11/12'>
          <div className='h-[433px] w-[494px] md:w-[594px] bg-white mt-16'>
          </div>
          <div className='text-white sm:text-4xl md:text-4xl lg:text-5xl mt-8' style={{ fontWeight: "600" }}>
            Building your persona <br />lead gen assistant
          </div>
          <div className='mt-8' style={{ fontSize: 11.6, fontWeight: "500" }}>
            By signing up to the AgentX platform you understand and agree to our Terms and <br /> Conditions and Privacy Policy. This site is protected by Google reCAPTCHA to<br /> ensure you are not a bot. Learn more
          </div>
        </div>
      </div> */}
      <div className="w-11/12 flex flex-col items-center h-[95svh] ">
        <div className="w-full gap-3 h-[10%] flex flex-row items-end">
          <Image
            className=""
            src="/assets/agentX.png"
            style={{ height: "29px", width: "122px" }}
            height={29}
            width={122}
            alt="*"
          />
          {/* <Image className='hidden md:flex' src="/agentXOrb.gif" style={{ height: "69px", width: "75px", resize: "contain" }} height={69} width={69} alt='*' /> */}
        </div>
        <div className="w-full  h-[80%] flex flex-row items-center justify-center">
          <div className="w-full">
            <div className="flex flex-col w-full items-center gap-4 pb-6">
              <Image
                src={"/assets/signinAvatar.png"}
                height={100}
                width={260}
                alt="avtr"
              />
              <Image src={"/agentXOrb.gif"} height={69} width={69} alt="gif" />
            </div>

            {/* Code for phone input field */}
            <div className="flex flex-row items-center justify-center gap-2 w-full">
              <div className="flex flex-row items-center gap-2 border rounded-lg w-[50%] sm:w-4/12 justify-between pe-4">
                <div className="w-[90%]">
                  <PhoneInput
                    // className="outline-none bg-transparent focus:ring-0"
                    country={"us"} // restrict to US only
                    onlyCountries={["us"]}
                    disableDropdown={true}
                    countryCodeEditable={false}
                    disableCountryCode={false}
                    value={userPhoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder={
                      locationLoader
                        ? "Loading location ..."
                        : "Enter Phone Number"
                    }
                    disabled={loading} // Disable input if still loading
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        userPhoneNumber &&
                        !errorMessage
                      ) {
                        if (checkPhoneResponse?.status === false) {
                          handleVerifyPopup();
                        }
                        // setShowVerifyPopup(true)
                      }
                    }}
                    // style={{
                    //   borderRadius: "7px",
                    //   outline: "none", // Ensure no outline on wrapper
                    //   boxShadow: "none", // Remove any shadow
                    // }}
                    inputStyle={{
                      width: "100%",
                      borderWidth: "0px",
                      backgroundColor: "transparent",
                      paddingLeft: "60px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      height: "50px",
                      outline: "none", // Remove outline on input
                      boxShadow: "none", // Remove shadow as well
                    }}
                    buttonStyle={{
                      border: "none",
                      backgroundColor: "transparent",
                      outline: "none", // Ensure no outline on button
                    }}
                    dropdownStyle={{
                      maxHeight: "150px",
                      overflowY: "auto",
                    }}
                    defaultMask={locationLoader ? "Loading..." : undefined}
                  />
                </div>
                {loginLoader ? (
                  <div className="flex flex-row justify-center">
                    <CircularProgress size={15} />
                  </div>
                ) : (
                  <button
                    className="text-black bg-transparent border border-[#000000] rounded-full"
                    style={{ fontSize: 16, fontWeight: "600" }}
                    onClick={() => {
                      console.log("Get code btn clicked");
                      if (checkPhoneResponse?.status === false) {
                        handleVerifyPopup();
                      }
                      // setShowVerifyPopup(true)
                      // handleVerifyPopup();
                    }}
                  >
                    <ArrowRightIcon size={20} weight="bold" />
                  </button>
                )}
              </div>
            </div>

            {/* Code for error messages */}
            <div className="flex flex-row items-center w-full justify-center mt-4">
              <div>
                {errorMessage ? (
                  <div className={`text-center ${styles.errmsg}`} >
                    {errorMessage}
                  </div>
                ) : (
                  <div>
                    {phoneNumberLoader ? (
                      <div className={`text-center ${styles.errmsg}`}>
                        Checking
                      </div>
                    ) : (
                      <div className={`text-center ${styles.errmsg}`}
                        style={{

                          color:
                            checkPhoneResponse?.status === false
                              ? "green"
                              : "red",
                          height: "20px",
                        }}
                      >
                        {checkPhoneResponse && (
                          <div className="text-center">
                            {checkPhoneResponse?.status === true
                              ? "User not found"
                              : ""}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div
              className="flex flex-row items-center justify-center gap-1 mt-[40px]"
              style={{ fontWeight: "500", fontSize: 15 }}
            >
              <div //onClick={() => setShowVerifyPopup(true)}
              >
                {`Don't have an account?`}
              </div>
              <Link
                className=""
                href={"/onboarding"}
                // onClick={() => {
                //   router.push("/onboarding");
                // }}
                style={{ fontWeight: "bold", fontSize: 15, color: '#7902DF' }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-6 h-[10%] flex flex-row items-end justify-end w-full gap-2 overflow-auto flex-shrink-0 hidden sm:flex"
          style={{ fontWeight: "500", fontSize: 11.6 }}
        >
          <div className="flex-shrink-0">
            Copyrights @ 2025 MyAgentX. All Rights Reserved.
          </div>
          <button
            className="flex-shrink-0 outline-none"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(
                  "https://www.myagentx.com/terms-and-condition",
                  "_blank"
                );
              }
            }}
          >
            | Terms & Conditions
          </button>
          <button
            className="flex-shrink-0 outline-none"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(
                  "https://www.myagentx.com/terms-and-condition",
                  "_blank"
                );
              }
            }}
          >
            | Privacy Policy
          </button>
        </div>

        <div className="h-[10%]  w-full flex flex-col items-center justify-center sm:hidden">
          <div
            className="mt-6 flex flex-row items-center justify-end gap-2 overflow-auto flex-shrink-0"
            style={{ fontWeight: "500", fontSize: 11.6 }}
          >
            <button
              className="flex-shrink-0 outline-none"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://www.myagentx.com/terms-and-condition",
                    "_blank"
                  );
                }
              }}
            >
              Terms & Conditions
            </button>
            <button
              className="flex-shrink-0 outline-none"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://www.myagentx.com/terms-and-condition",
                    "_blank"
                  );
                }
              }}
            >
              | Privacy Policy
            </button>
          </div>
          <div
            className="flex-shrink-0 text-center"
            style={{ fontWeight: "500", fontSize: 11.6 }}
          >
            Copyrights @ 2025 MyAgentX. All Rights Reserved.
          </div>
        </div>
      </div>

      <Modal
        open={showVerifyPopup}
        // onClose={() => setAddKYCQuestion(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 1000,
          sx: {
            backgroundColor: "#00000020",
            // //backdropFilter: "blur(20px)",
            padding: 0,
            margin: 0,
          },
        }}
      >
        <Box className="lg:w-6/12 sm:w-6/12 w-6/12" sx={styles.verifyPopup}>
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
                <button
                  onClick={() => {
                    setShowVerifyPopup(false);
                  }}
                >
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
                className="mt-5"
                style={{ ...styles.inputStyle, color: "#00000060" }}
              >
                Enter code that was sent to number ending with *
                {userPhoneNumber.slice(-4)}.
              </div>

              <div
                className="mt-8 w-ful flex flex-row items-center gap-2 overflow-auto"
                style={{ display: "flex", gap: "8px" }}
              >
                {Array.from({ length }).map((_, index) => (
                  <input
                    className=" focus:outline-none focus:ring-0"
                    key={index}
                    ref={(el) => {verifyInputRef.current[index] = el}}
                    type="tel"
                    inputMode="numeric"
                    // type="tel"
                    maxLength={1}
                    value={VerifyCode[index]}
                    onChange={(e) => handleVerifyInputChange(e, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    onKeyUp={(e) => {
                      // Check if the Enter key is pressed and all inputs are filled
                      if (
                        e.key === "Enter" &&
                        VerifyCode.every((value) => value.trim() !== "")
                      ) {
                        handleLogin();
                      }
                    }}
                    onPaste={handlePaste}
                    placeholder="-"
                    style={{
                      width: InnerWidth < 540 ? "40px" : "40px",
                      height: InnerWidth < 540 ? "40px" : "40px",
                      textAlign: "center",
                      fontSize: InnerWidth < 540 ? 15 : 20,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  />
                ))}
              </div>
              <div
                className="mt-8 flex flex-row items-center gap-1"
                style={styles.inputStyle}
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
              {loginLoader ? (
                <div className="flex fex-row items-center justify-center mt-8">
                  <LoaderAnimation
                    loaderModal={loginLoader}
                    title={loaderTitle}
                  />
                </div>
              ) : (
                <button
                  className="text-white bg-purple outline-none rounded-xl w-full mt-8"
                  style={{ height: "50px" }}
                  onClick={handleLogin}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </Box>
      </Modal>
      <AgentSelectSnackMessage
        message={snackMessage}
        type={msgType}
        isVisible={isVisible}
        hide={() => {
          setIsVisible(false);
          setSnackMessage("");
          setMsgType(null);
        }}
      />
    </div>
  );
};

export default LoginComponent;