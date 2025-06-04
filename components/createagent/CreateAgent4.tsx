import Body from "@/components/onboarding/Body";
import Header from "@/components/onboarding/Header";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "@/components/onboarding/ProgressBar";
import { useRouter } from "next/navigation";
import Footer from "@/components/onboarding/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CircularProgress, Modal, Popover } from "@mui/material";
import Apis from "../apis/Apis";
import axios from "axios";
import PurchaseNumberSuccess from "./PurchaseNumberSuccess";
import { Key } from "@phosphor-icons/react";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import { getLocalLocation } from "../onboarding/services/apisServices/ApiService";
import VideoCard from "./VideoCard";
import IntroVideoModal from "./IntroVideoModal";
import ClaimNumber from "../dashboard/myagentX/ClaimNumber";
import { HowtoVideos } from "@/constants/Constants";

interface PhoneNumber {
  phoneNumber: string;
  claimedBy?: {
    id: string;
    name: string;
  };
}

interface AgentData {
  id: string;
  name: string;
  agentType: string;
}

interface CreateAgent4Props {
  handleContinue: () => void;
  handleBack?: () => void;
}

const CreateAgent4: React.FC<CreateAgent4Props> = ({ handleContinue, handleBack }) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const selectRef = useRef<any>(null);
  const router = useRouter();
  
  // State variables
  const [introVideoModal, setIntroVideoModal] = useState(false);
  const [toggleClick, setToggleClick] = useState(false);
  const [selectNumber, setSelectNumber] = useState<string>("");
  const [openCalimNumDropDown, setOpenCalimNumDropDown] = useState(false);
  const [reassignLoader, setReassignLoader] = useState<PhoneNumber | null>(null);
  const [useOfficeNumber, setUseOfficeNumber] = useState(false);
  const [userSelectedNumber, setUserSelectedNumber] = useState<PhoneNumber | string>("");
  const [showOfficeNumberInput, setShowOfficeNumberInput] = useState(false);
  const [officeNumber, setOfficeNumber] = useState("");
  const [showClaimPopup, setShowClaimPopup] = useState(false);
  const [previousNumber, setPreviousNumber] = useState<PhoneNumber[]>([]);
  const [AgentData, setAgentData] = useState<{ agents: AgentData[]; id: string } | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState<PhoneNumber | null>(null);
  const [showReassignBtn, setShowReassignBtn] = useState(false);
  const [showGlobalBtn, setShowGlobalBtn] = useState(true);
  const [findNumber, setFindNumber] = useState("");
  const [findeNumberLoader, setFindeNumberLoader] = useState(false);
  const [foundeNumbers, setFoundeNumbers] = useState<any[]>([]);
  const [selectedPurchasedIndex, setSelectedPurchasedIndex] = useState<number | null>(null);
  const [selectedPurchasedNumber, setSelectedPurchasedNumber] = useState<any | null>(null);
  const [purchaseLoader, setPurchaseLoader] = useState(false);
  const [openPurchaseSuccessModal, setOpenPurchaseSuccessModal] = useState(false);
  const [callBackNumber, setCallBackNumber] = useState("");
  const [countryCode, setCountryCode] = useState("us");
  const [assignLoader, setAssignLoader] = useState(false);
  const [shouldContinue, setShouldContinue] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | false>(false);
  const [officeErrorMessage, setOfficeErrorMessage] = useState<string | false>(false);

  useEffect(() => {
    const localData = localStorage.getItem("claimNumberData");

    let loc = getLocalLocation();
    setCountryCode(loc);

    if (localData) {
      const claimNumberDetails = JSON.parse(localData);

      if (claimNumberDetails.officeNo) {
        setUseOfficeNumber(true);
        setShowOfficeNumberInput(true);
        setOfficeNumber(claimNumberDetails.officeNo);
      } else {
        setUserSelectedNumber(claimNumberDetails.usernumber2);
      }
      setCallBackNumber(claimNumberDetails.callBackNumber);
      setSelectNumber(claimNumberDetails.userNumber);
      setShouldContinue(false);
    }
    getAvailabePhoneNumbers();
    const localAgentsData = localStorage.getItem("agentDetails");
    if (localAgentsData) {
      const agetnDetails = JSON.parse(localAgentsData);
      setAgentData(agetnDetails?.agents[0]);
      if (agetnDetails?.agents?.length === 2) {
        setShowReassignBtn(false);
      } else if (agetnDetails?.agents[0]?.agentType === "inbound") {
        setShowReassignBtn(true);
        setShowGlobalBtn(false);
      }
    }
  }, []);

  useEffect(() => {
    if (
      selectNumber ||
      officeNumber ||
      isInboundOnly()
    ) {
      setShouldContinue(false);
    } else {
      setShouldContinue(true);
    }
  }, [
    selectNumber,
    userSelectedNumber,
    callBackNumber,
    toggleClick,
    useOfficeNumber,
    officeNumber,
  ]);

  function isInboundOnly(): boolean {
    const localAgentsData = localStorage.getItem("agentDetails");
    if (localAgentsData) {
      const agentDetails = JSON.parse(localAgentsData);
      if (
        agentDetails.agents.length === 1 &&
        agentDetails?.agents[0]?.agentType == "inbound"
      ) {
        return true;
      }
    }
    return false;
  }

  const formatPhoneNumber = (rawNumber: string): string => {
    const phoneNumber = parsePhoneNumberFromString(
      rawNumber?.startsWith("+") ? rawNumber : `+${rawNumber}`
    );
    return phoneNumber
      ? phoneNumber.formatInternational()
      : "Invalid phone number";
  };

  const handleSelectNumber = (event: SelectChangeEvent) => {
    setSelectNumber(event.target.value);
  };

  const handleToggleClick = () => {
    setToggleClick(!toggleClick);
  };

  const handleOfficeNumberClick = () => {
    setUserSelectedNumber("");
    setUseOfficeNumber(!useOfficeNumber);
    setShowOfficeNumberInput(!showOfficeNumberInput);
  };

  const handleSelectedNumberClick = (item: PhoneNumber) => {
    setOfficeNumber("");
    setShowOfficeNumberInput(false);
    setUseOfficeNumber(false);
    setUserSelectedNumber(item);
  };

  const handleCloseClaimPopup = () => {
    setShowClaimPopup(false);
  };

  const handleCallBackNumberChange = (phone: string) => {
    setCallBackNumber(phone);
    validatePhoneNumber(phone);

    if (!phone) {
      setErrorMessage("");
      setOfficeErrorMessage("");
    }
  };

  const handleReassignNumber = async (item: PhoneNumber) => {
    try {
      setReassignLoader(item);
      let AuthToken = null;
      const LocalData = localStorage.getItem("User");
      const agentDetails = localStorage.getItem("agentDetails");
      let MyAgentData: any = null;
      
      if (LocalData) {
        const UserDetails = JSON.parse(LocalData);
        AuthToken = UserDetails.token;
      }

      if (agentDetails) {
        setShowConfirmationModal(null);
        const agentData = JSON.parse(agentDetails);
        MyAgentData = agentData;
      }

      const ApiPath = Apis.reassignNumber;
      const ApiData = {
        agentId: item.claimedBy?.id,
        phoneNumber: item.phoneNumber,
        newAgentId: MyAgentData.agents[0].id,
      };

      const response = await axios.post(ApiPath, ApiData, {
        headers: {
          Authorization: "Bearer " + AuthToken,
          "Content-Type": "application/json",
        },
      });

      if (response) {
        setSelectNumber(
          item?.phoneNumber?.startsWith("+")
            ? item.phoneNumber.slice(1)
            : item.phoneNumber
        );
        setOpenCalimNumDropDown(false);
        
        if (selectRef.current) {
          selectRef.current.blur();
        }
      }
    } catch (error) {
      console.error("Error occurred in reassign the number api:", error);
    } finally {
      setReassignLoader(null);
    }
  };

  const handleOfficeNumberChange = (phone: string, e?: any) => {
    setOfficeNumber(phone);
    validatePhoneNumber(phone, e);
    setUserSelectedNumber("");

    if (!phone) {
      setErrorMessage("");
      setOfficeErrorMessage("");
    }
  };

  const validatePhoneNumber = (phoneNumber: string, e?: any) => {
    const parsedNumber = parsePhoneNumberFromString(
      `+${phoneNumber}`,
      countryCode?.toUpperCase()
    );
    
    if (!parsedNumber || !parsedNumber.isValid()) {
      if (e) {
        setOfficeErrorMessage("Invalid");
      } else {
        setErrorMessage("Invalid");
      }
    } else {
      setErrorMessage("");
      setOfficeErrorMessage("");

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        // checkPhoneNumber(phoneNumber);
      }, 300);
    }
  };

  const handlePurchaseNumberClick = (item: any, index: number) => {
    localStorage.setItem("numberPurchased", JSON.stringify(item));
    setSelectedPurchasedNumber((prevId) => (prevId === item ? null : item));
    setSelectedPurchasedIndex((prevId) => (prevId === index ? null : index));
  };

  const getAvailabePhoneNumbers = async () => {
    try {
      let AuthToken = null;
      const LocalData = localStorage.getItem("User");
      if (LocalData) {
        const UserDetails = JSON.parse(LocalData);
        AuthToken = UserDetails.token;
      }
      
      const ApiPath = Apis.userAvailablePhoneNumber;
      const response = await axios.get(ApiPath, {
        headers: {
          Authorization: "Bearer " + AuthToken,
        },
      });

      if (response) {
        setPreviousNumber(response.data.data);
      }
    } catch (error) {
      console.error("Error occurred in: ", error);
    }
  };

  const AssignNumber = async () => {
    try {
      setAssignLoader(true);
      let AuthToken = null;
      const LocalData = localStorage.getItem("User");
      let MyAgentData: any = null;
      const agentDetails = localStorage.getItem("agentDetails");
      
      if (LocalData) {
        const UserDetails = JSON.parse(LocalData);
        AuthToken = UserDetails.token;
      }

      if (agentDetails) {
        const agentData = JSON.parse(agentDetails);
        MyAgentData = agentData;
      }

      const formData = new FormData();
      formData.append("phoneNumber", selectNumber);
      
      if (typeof userSelectedNumber !== 'string' && userSelectedNumber?.phoneNumber) {
        formData.append("callbackNumber", userSelectedNumber.phoneNumber);
      } else {
        formData.append("callbackNumber", officeNumber);
      }
      
      formData.append("liveTransferNumber", callBackNumber);
      formData.append("mainAgentId", MyAgentData.id);
      formData.append("liveTransfer", !toggleClick.toString());

      const ApiPath = Apis.asignPhoneNumber;
      const response = await axios.post(ApiPath, formData, {
        headers: {
          Authorization: "Bearer " + AuthToken,
        },
      });

      if (response) {
        if (response.data.status === true) {
          handleContinue();
          const calimNoData = {
            officeNo: officeNumber,
            userNumber: selectNumber,
            usernumber2: userSelectedNumber,
            callBackNumber: callBackNumber,
          };
          localStorage.setItem("claimNumberData", JSON.stringify(calimNoData));
        }
      }
    } catch (error) {
      console.error("Error occurred in api is:", error);
    } finally {
      setAssignLoader(false);
    }
  };

  const styles = {
    headingStyle: {
      fontSize: 15,
      fontWeight: "600",
    },
    inputStyle: {
      fontSize: 14,
      fontWeight: "400",
      color: "#000000",
    },
    dropdownMenu: {
      fontSize: 15,
      fontWeight: "500",
      color: "#000000",
    },
    callBackStyles: {
      border: "1px solid #15151550",
      borderRadius: "20px",
      fontWeight: "500",
      fontSize: 15,
    },
    claimPopup: {
      height: "auto",
      bgcolor: "transparent",
      mx: "auto",
      my: "50vh",
      transform: "translateY(-55%)",
      borderRadius: 2,
      border: "none",
      outline: "none",
    },
    findNumberTitle: {
      fontSize: 17,
      fontWeight: "500",
    },
    findNumberDescription: {
      fontSize: 15,
      fontWeight: "500",
    },
  };

  return (
    <div
      style={{ width: "100%" }}
      className="overflow-y-hidden flex flex-row justify-center items-center"
    >
      <div
        className="bg-white sm:rounded-2xl w-full sm:w-10/12 h-[90vh] py-4 flex flex-col justify-between"
      // overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple
      >
        <div>
          {/* Video Card */}
          <IntroVideoModal
            open={introVideoModal}
            onClose={() => setIntroVideoModal(false)}
            videoTitle="Learn about phone numbers"
            videoUrl={HowtoVideos.LetsTalkDigits}
          />
          {/* header */}
          <Header />
          {/* Body */}
          <div
            className="-ml-4 lg:flex hidden  xl:w-[350px] lg:w-[350px]"
            style={{
              position: "absolute",
              // left: "18%",
              // translate: "-50%",
              // left: "14%",
              top: "20%",
              // backgroundColor: "red"
            }}
          >
            <VideoCard
              duration={"1 min 52 sec"}
              horizontal={false}
              playVideo={() => {
                setIntroVideoModal(true);
              }}
              title="Learn about phone numbers"
            />
          </div>
          <div
            className="flex flex-col items-center px-4 w-full h-[65vh] overflow-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div
              className="mt-6 w-11/12 md:text-4xl text-lg font-[600]"
              style={{ textAlign: "center" }}
            // onClick={handleContinue}
            >
              {`Let's talk digits`}
            </div>
            <div
              className="mt-8 w-11/12 sm:w-6/12 gap-4 flex flex-col h-[55vh] overflow-auto"
              // overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple
              style={{ scrollbarWidth: "none" }}
            >
              <div style={styles.headingStyle}>
                {`Select a phone number you'd like to use to call with`}
              </div>

              <div className="border rounded-lg">
                <Box className="w-full">
                  <FormControl className="w-full">
                    <Select
                      ref={selectRef}
                      open={openCalimNumDropDown}
                      onClose={() => setOpenCalimNumDropDown(false)}
                      onOpen={() => setOpenCalimNumDropDown(true)}
                      className="border-none rounded-2xl outline-none"
                      displayEmpty
                      value={selectNumber}
                      // onChange={handleSelectNumber}
                      onChange={(e) => {
                        let value = e.target.value;
                        // //console.log;
                        setSelectNumber(value);
                        setOpenCalimNumDropDown(false);
                      }}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return <div>Select Number</div>;
                        }
                        return selected;
                      }}
                      sx={{
                        ...styles.dropdownMenu,
                        backgroundColor: "#FFFFFF",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    >
                      {previousNumber.map((item, index) => (
                        <MenuItem
                          key={index}
                          style={styles.dropdownMenu}
                          value={
                            item?.phoneNumber?.startsWith("+")
                              ? item?.phoneNumber.slice(1)
                              : item?.phoneNumber
                          }
                          className="flex flex-row items-center gap-2"
                        >
                          <div
                            onClick={(e) => {
                              if (showReassignBtn && item?.claimedBy) {
                                e.stopPropagation();
                                setShowConfirmationModal(item);
                              }
                            }}
                          >
                            {item.phoneNumber}
                          </div>
                          {showReassignBtn && (
                            <div>
                              {item.claimedBy && (
                                <div
                                  className="flex flex-row items-center "
                                  onClick={(e) => {
                                    if (item?.claimedBy) {
                                      e.stopPropagation();
                                      setShowConfirmationModal(item);
                                    }
                                  }}
                                >
                                  <div className="text-[#15151570] me-1">
                                    (Claimed by {item.claimedBy.name})
                                  </div>
                                  {reassignLoader?.claimedBy?.id ===
                                    item.claimedBy.id ? (
                                    <CircularProgress size={15} />
                                  ) : (
                                    <button
                                      className="text-purple underline"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        // handleReassignNumber(item);
                                        setShowConfirmationModal(item);
                                        // handleReassignNumber(e.target.value)
                                      }}
                                    >
                                      Reassign
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </MenuItem>
                      ))}
                      <MenuItem
                        style={styles.dropdownMenu}
                        value={showGlobalBtn ? 16505403715 : ""}
                      >
                        +16505403715
                        {showGlobalBtn && " (available for testing calls only)"}
                        {showGlobalBtn == false &&
                          " (Only for outbound agents. You must buy a number)"}
                      </MenuItem>
                      <div
                        className="ms-4"
                        style={{ ...styles.inputStyle, color: "#00000070" }}
                      >
                        <i>Get your own unique phone number.</i>{" "}
                        <button
                          className="text-purple underline"
                          onClick={() => {
                            setShowClaimPopup(true);
                          }}
                        >
                          Claim one
                        </button>
                      </div>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              {/* Code for Purchase and find number popup */}
              {showClaimPopup && (
                <ClaimNumber
                  showClaimPopup={showClaimPopup}
                  handleCloseClaimPopup={handleCloseClaimPopup}
                  setOpenCalimNumDropDown={setOpenCalimNumDropDown}
                  setSelectNumber={setSelectNumber}
                  setPreviousNumber={setPreviousNumber}
                  previousNumber={previousNumber}
                />
              )}

              {/* Code for Purchase number success popup */}
              <Modal
                open={openPurchaseSuccessModal}
                // onClose={() => setAddKYCQuestion(false)}
                closeAfterTransition
                BackdropProps={{
                  timeout: 1000,
                  sx: {
                    backgroundColor: "#00000020",
                    // //backdropFilter: "blur(20px)",
                  },
                }}
              >
                <Box
                  className="lg:w-8/12 sm:w-full w-8/12"
                  sx={styles.claimPopup}
                >
                  <div className="flex flex-row justify-center w-full">
                    <div
                      className="sm:w-8/12 w-full min-h-[50vh] max-h-[80vh] flex flex-col justify-between"
                      style={{
                        backgroundColor: "#ffffff",
                        padding: 20,
                        borderRadius: "13px",
                      }}
                    >
                      <div>
                        <div className="flex flex-row justify-end">
                          {/* <button onClick={() => { setOpenPurchaseSuccessModal(false) }}>
                                                        <Image src={"/assets/crossIcon.png"} height={40} width={40} alt='*' />
                                                    </button> */}
                        </div>
                        <PurchaseNumberSuccess
                          selectedNumber={selectedPurchasedNumber}
                          handleContinue={() => {
                            setOpenPurchaseSuccessModal(false);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>

              <button
                onClick={() => {
                  // setOpenPurchaseSuccessModal(true);
                }}
                style={styles.headingStyle}
                className="text-start"
              >
                What callback number should we use if someone requests one
                during a call?
              </button>

              <div
                className="flex flex-row items-center gap-4 overflow-x-auto h-[80px]"
                style={{
                  scrollbarWidth: "none",
                  overflowY: "hidden",
                  height: "80px", // Ensures the height is always fixed
                  flexShrink: 0,
                }}
              >
                <div className="flex flex-row items-center gap-4">
                  {previousNumber.map((item, index) => (
                    <button
                      className="flex flex-row items-center justify-center w-[271px] h-[71px]"
                      key={index}
                      style={{
                        ...styles.callBackStyles,
                        border:
                          userSelectedNumber === item
                            ? "2px solid #7902DF"
                            : "1px solid #15151550",
                        backgroundColor:
                          userSelectedNumber === item
                            ? "2px solid #402FFF15"
                            : "",
                      }}
                      onClick={(e) => {
                        handleSelectedNumberClick(item);
                      }}
                    >
                      Use {formatPhoneNumber(item.phoneNumber)}
                    </button>
                  ))}
                  <button
                    className="flex flex-row items-center justify-center h-[71px]"
                    style={{
                      ...styles.callBackStyles,
                      width: "242px",
                      border: useOfficeNumber
                        ? "2px solid #7902DF"
                        : "1px solid #15151550",
                      backgroundColor: useOfficeNumber
                        ? "2px solid #402FFF15"
                        : "",
                    }}
                    onClick={handleOfficeNumberClick}
                  >
                    Use my cell or office number
                  </button>
                </div>
              </div>

              {showOfficeNumberInput ? (
                <div className="w-full">
                  <div className="mt-4" style={styles.dropdownMenu}>
                    Enter your cell or office number
                  </div>

                  <PhoneInput
                    className="border outline-none bg-white"
                    country={"us"} // Default country
                    value={officeNumber}
                    onChange={handleOfficeNumberChange}
                    // placeholder={locationLoader ? "Loading location ..." : "Enter Number"}
                    placeholder={"Enter Phone Number"}
                    // disabled={loading} // Disable input if still loading
                    style={{ borderRadius: "7px" }}
                    inputStyle={{
                      width: "100%",
                      borderWidth: "0px",
                      backgroundColor: "transparent",
                      paddingLeft: "60px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                    buttonStyle={{
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    dropdownStyle={{
                      maxHeight: "150px",
                      overflowY: "auto",
                    }}
                    countryCodeEditable={false}
                    disableDropdown={true}
                  // defaultMask={locationLoader ? "Loading..." : undefined}
                  />

                  <div
                    className="mt-2"
                    style={{ fontWeight: "500", fontSize: 11, color: "red" }}
                  >
                    {officeErrorMessage}
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Phone number input here */}

              <div className="w-full">
                <div style={styles.headingStyle}>
                  What number should we forward live transfers to when a lead
                  wants to talk to you?
                </div>
                <PhoneInput
                  className="border outline-none bg-white"
                  country={"us"} // Default country
                  value={callBackNumber}
                  onChange={handleCallBackNumberChange}
                  // placeholder={locationLoader ? "Loading location ..." : "Enter Number"}
                  placeholder={"Enter Phone Number"}
                  // disabled={loading} // Disable input if still loading
                  style={{ borderRadius: "7px" }}
                  inputStyle={{
                    width: "100%",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    paddingLeft: "60px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                  buttonStyle={{
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  dropdownStyle={{
                    maxHeight: "150px",
                    overflowY: "auto",
                  }}
                  countryCodeEditable={false}
                  disableDropdown={true}
                // defaultMask={locationLoader ? "Loading..." : undefined}
                />
                <div style={{ fontWeight: "500", fontSize: 11, color: "red" }}>
                  {errorMessage}
                </div>
              </div>

              <div className="flex flex-row items-center gap-4 justify-start">
                <button onClick={handleToggleClick}>
                  {toggleClick ? (
                    <div
                      className="bg-purple flex flex-row items-center justify-center rounded"
                      style={{ height: "24px", width: "24px" }}
                    >
                      <Image
                        src={"/assets/whiteTick.png"}
                        height={8}
                        width={10}
                        alt="*"
                      />
                    </div>
                  ) : (
                    <div
                      className="bg-none border-2 flex flex-row items-center justify-center rounded"
                      style={{ height: "24px", width: "24px" }}
                    ></div>
                  )}
                </button>
                <div
                  style={{ color: "#151515", fontSize: 15, fontWeight: "500" }}
                >
                  {`Don't make live transfers. Prefer the AI Agent schedules them for a call back.`}
                </div>
              </div>

              {/* <Body /> */}
            </div>
          </div>
        </div>

        <div>
          <div>
            <ProgressBar value={33} />
          </div>

          <Footer
            handleContinue={AssignNumber}
            handleBack={handleBack}
            registerLoader={assignLoader}
            shouldContinue={shouldContinue}
            donotShowBack={true}
          />
        </div>

        {/* Code for the confirmation of reassign button */}
        <Modal
          open={showConfirmationModal}
          onClose={() => {
            setShowConfirmationModal(null);
          }}
        >
          <Box
            className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 p-8 rounded-[15px]"
            sx={{ ...styles.claimPopup, backgroundColor: "white" }}
          >
            <div style={{ width: "100%" }}>
              <div
                className="max-h-[60vh] overflow-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {/* <div style={{ width: "100%", direction: "row", display: "flex", justifyContent: "end", alignItems: "center" }}>
                <div style={{ direction: "row", display: "flex", justifyContent: "end" }}>
                  <button onClick={() => {
                    setShowWarningModal(false);
                  }} className='outline-none'>
                    <Image src={"/assets/crossIcon.png"} height={40} width={40} alt='*' />
                  </button>
                </div>
              </div> */}

                <div className="flex flex-row items-center justify-between w-full">
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Reassign Number
                  </div>
                  <button
                    onClick={() => {
                      setShowConfirmationModal(null);
                    }}
                  >
                    <Image
                      src={"/assets/blackBgCross.png"}
                      height={20}
                      width={20}
                      alt="*"
                    />
                  </button>
                </div>

                <div
                  className="mt-8"
                  style={{
                    fontSize: 22,
                    fontWeight: "600",
                  }}
                >
                  Confirm Action
                </div>

                <p
                  className="mt-8"
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Please confirm you would like to reassign{" "}
                  <span className="text-purple">
                    ({formatPhoneNumber(showConfirmationModal?.phoneNumber)})
                  </span>{" "}
                  to {AgentData?.name}
                  {/* {showConfirmationModal?.claimedBy?.name}. */}
                  {/* {`{${showConfirmationModal?.claimedBy?.name}}`}. */}
                </p>
              </div>

              <div className="flex flex-row items-center gap-4 mt-6">
                <button
                  className="mt-4 outline-none w-1/2"
                  style={{
                    color: "black",
                    height: "50px",
                    borderRadius: "10px",
                    width: "100%",
                    fontWeight: 600,
                    fontSize: "20",
                  }}
                  onClick={() => {
                    setShowClaimPopup(null);
                  }}
                >
                  Discard
                </button>
                <div className="w-full">
                  {reassignLoader ? (
                    <div className="mt-4 w-full flex flex-row items-center justify-center">
                      <CircularProgress size={25} />
                    </div>
                  ) : (
                    <button
                      className="mt-4 outline-none bg-purple w-full"
                      style={{
                        color: "white",
                        height: "50px",
                        borderRadius: "10px",
                        width: "100%",
                        fontWeight: 600,
                        fontSize: "20",
                      }}
                      onClick={() => {
                        handleReassignNumber(showConfirmationModal);
                        ////console.log
                      }}
                    >
                      {`I'm sure`}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CreateAgent4;
