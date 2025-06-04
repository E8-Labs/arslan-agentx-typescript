import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Box, CircularProgress, Modal, Popover } from "@mui/material";
import Image from "next/image";
import Body from "@/components/onboarding/Body";
import Header from "@/components/onboarding/Header";
import ProgressBar from "@/components/onboarding/ProgressBar";
import Footer from "@/components/onboarding/Footer";
import Apis from "../apis/Apis";
import LoaderAnimation from "../animations/LoaderAnimation";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import VideoCard from "./VideoCard";
import IntroVideoModal from "./IntroVideoModal";
import AgentSelectSnackMessage, {
  SnackbarTypes,
} from "../dashboard/leads/AgentSelectSnackMessage";
import { HowtoVideos, PersistanceKeys } from "@/constants/Constants";
import { UserTypes } from "@/constants/UserTypes";

interface AgentObjectiveType {
  id: number;
  icon: string;
  title: string;
  details: string;
  focusIcn: string;
  unFocusIcon: string;
}

interface StatusType {
  id: number;
  title: string;
}

interface CreateAgent1Props {
  handleContinue: () => void;
  handleSkipAddPayment: () => void;
}

interface UserData {
  user: {
    userType: string;
    userRole?: string;
    checkList?: {
      checkList: {
        calendarCreated: boolean;
      };
    };
  };
  token?: string;
  plan?: any;
}

const CreateAgent1: React.FC<CreateAgent1Props> = ({
  handleContinue,
  handleSkipAddPayment,
}) => {
  const addressKey = process.env.NEXT_PUBLIC_AddressPickerApiKey;
  const router = useRouter();
  const bottomRef = useRef<HTMLInputElement>(null);
  const bottomToAddress = useRef<HTMLDivElement>(null);
  const [loaderModal, setLoaderModal] = useState(false);
  const [shouldContinue, setShouldContinue] = useState(true);
  const [toggleClick, setToggleClick] = useState<number | null>(null);
  const [OutBoundCalls, setOutBoundCalls] = useState(false);
  const [InBoundCalls, setInBoundCalls] = useState(false);
  const [buildAgentLoader, setBuildAgentLoader] = useState(false);
  const [agentObjective, setAgentObjective] = useState<AgentObjectiveType | null>(
    null
  );

  const [agentName, setAgentName] = useState("");
  const [agentRole, setAgentRole] = useState("");

  const [showModal, setShowModal] = useState(false);

  //variable for video card
  const [introVideoModal, setIntroVideoModal] = useState(false);

  //snack message when agent built
  const [snackMessage, setSnackMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [msgType, setMsgType] = useState<SnackbarTypes | null>(null);

  //other status
  const [showSomtthingElse, setShowSomtthingElse] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusType | null>(null);
  const [otherStatus, setOtherStatus] = useState("");
  //get address
  const [address, setAddress] = useState("");

  const [addressSelected, setAddressSelected] = useState(null);

  //code for address picker
  const [addressValue, setAddressValue] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const [user, setUser] = useState<UserData | null>(null);

  //shows the modal for small screens only
  const [showAddressPickerModal, setShowAddressPickerModal] = useState(false);

  useEffect(() => {
    setAddress(address?.label);
  }, [addressSelected]);

  //other objective
  const [showOtherObjective, setShowOtherObjective] = useState(false);
  const [otherObjVal, setOtherObjVal] = useState("");

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  //auto move to the bottom
  useEffect(() => {
    let userData = localStorage.getItem(PersistanceKeys.LocalStorageUser);
    if (userData) {
      let d = JSON.parse(userData) as UserData;
      setUser(d);
    }
    if (showOtherObjective && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showOtherObjective]);

  useEffect(() => {
    if (
      OutBoundCalls ||
      (InBoundCalls === true && agentName && agentRole && toggleClick)
    ) {
      setShouldContinue(false);
    } else if (
      !OutBoundCalls ||
      (!InBoundCalls === true && !agentName && !agentRole && !toggleClick)
    ) {
      setShouldContinue(true);
    }
  }, [agentName, agentRole, agentObjective, otherObjVal]);

  const handleToggleClick = (item: AgentObjectiveType) => {
    setAgentObjective(item);
    setToggleClick(item.id);

    if (item.id === 3) {
      setShowModal(true);
    }
    if (item.id === 100) {
      setShowOtherObjective(true);
    } else {
      setShowOtherObjective(false);
      setOtherObjVal("");
    }
  };

  const AgentObjective: AgentObjectiveType[] = [
    {
      id: 1,
      icon: "",
      title: "Call Absentee Owners",
      details:
        "Reach out to property owners who may not live in the property to discuss potential selling or investment opportunities.",
      focusIcn: "/svgIcons/obj1F.svg",
      unFocusIcon: "/objectiveIcons/obj1UF.png",
    },
    {
      id: 2,
      icon: "",
      title: "Circle Prospecting",
      details:
        "Call homeowners in a specific farm to inform them about recent property activities, and gauge their interest in selling or buying.",
      focusIcn: "/svgIcons/obj2F.svg",
      unFocusIcon: "/objectiveIcons/obj2UF.png",
    },
    {
      id: 3,
      icon: "",
      title: "Community Update",
      details:
        "Provide local homeowners with relevant updates on a property like just listed, just sold, in escrow or something else.",
      focusIcn: "/svgIcons/obj3F.svg",
      unFocusIcon: "/objectiveIcons/obj3UF.png",
    },
    {
      id: 4,
      icon: "",
      title: "Lead Reactivation",
      details:
        "Reconnect with past leads who previously expressed interest but did not convert, to reignite their interest in your services.",
      focusIcn: "/svgIcons/obj4F.svg",
      unFocusIcon: "/objectiveIcons/obj4UF.png",
    },
    {
      id: 5,
      icon: "",
      title: "Recruiting Agent",
      details:
        "Identify, engage, and attract potential real estate agents to expand your team with top talent. Recruit new agents to your team.",
      focusIcn: "/svgIcons/obj5RAF.svg",
      unFocusIcon: "/svgIcons/obj5RAU.svg",
    },
    {
      id: 7,
      icon: "",
      title: "Receptionist",
      details:
        "Greet clients, manage appointments, and ensure smooth office operations. Provide front-desk support for incoming calls.",
      focusIcn: "/svgIcons/reciptionistFC.svg",
      unFocusIcon: "/svgIcons/reciptionistUFC.svg",
    },
    {
      id: 6,
      icon: "",
      title: "Expired Listing",
      details:
        "Connect with homeowners whose listings have expired to understand their needs and offer solutions. Help relist their property and guide them toward a successful sale.",
      focusIcn: "/svgIcons/obj6FOCUS.svg",
      unFocusIcon: "/svgIcons/obj6ELU.svg",
    },
    {
      id: 8,
      icon: "",
      title: "Speed to Lead",
      details:
        "Instantly engage new leads from Zillow, Realtor.com, Facebook ads, and more the moment they enter your CRM to maximize conversion chances.",
      focusIcn: "/svgIcons/obj5F.svg",
      unFocusIcon: "/objectiveIcons/obj5UF.png",
    },
    {
      id: 9,
      icon: "",
      title: "FSBO (For Sale By Owner)",
      details:
        "Connect with homeowners trying to sell on their own, offering professional guidance and solutions to help them successfully close.",
      focusIcn: "/svgIcons/obj5F.svg",
      unFocusIcon: "/objectiveIcons/obj5UF.png",
    },
    {
      id: 10,
      icon: "",
      title: "Probate",
      details:
        "Reach out to property heirs navigating probate, providing support and options for handling inherited real estate during a difficult time.",
      focusIcn: "/svgIcons/obj5F.svg",
      unFocusIcon: "/objectiveIcons/obj5UF.png",
    },
    {
      id: 100,
      icon: "",
      title: "Something Else",
      details: "",
      focusIcn: "/svgIcons/obj6F.svg",
      unFocusIcon: "/objectiveIcons/obj6UF.png",
    },
  ];

  function canShowObjectives(): boolean {
    if (user && user.user.userType == UserTypes.RealEstateAgent) {
      return true;
    }
    return false;
  }

  function canContinue(): boolean {
    if (!user) {
      return false;
    }
    if (user.user.userType == UserTypes.RealEstateAgent) {
      if (
        agentName &&
        agentRole &&
        agentObjective &&
        (InBoundCalls || OutBoundCalls)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (agentName && agentRole && (InBoundCalls || OutBoundCalls)) {
        return true;
      }
    }
    return false;
  }

  const handleInboundCallClick = () => {
    setInBoundCalls(!InBoundCalls);
  };

  const handleOutBoundCallClick = () => {
    setOutBoundCalls(!OutBoundCalls);
  };

  const handleBuildAgent = async () => {
    try {
      setBuildAgentLoader(true);
      setLoaderModal(true);
      const localData = localStorage.getItem("User");
      let AuthToken: string | null = null;
      let LocalDetails: UserData | null = null;
      if (localData) {
        const UserDetails = JSON.parse(localData) as UserData;
        AuthToken = UserDetails.token || null;
        LocalDetails = UserDetails;
      }
      const ApiPath = Apis.buildAgent;
      const formData = new FormData();
      formData.append("name", agentName);
      formData.append("agentRole", agentRole);
      let agentType: string | null = null;
      if (InBoundCalls && OutBoundCalls) {
        agentType = "both";
      } else if (InBoundCalls) {
        agentType = "inbound";
      } else if (OutBoundCalls) {
        agentType = "outbound";
      }
      if (agentType) {
        formData.append("agentType", agentType);
      }
      if (selectedStatus) {
        if (selectedStatus.id === 5) {
          formData.append("status", otherStatus);
        } else {
          formData.append("status", selectedStatus.title);
        }
      }
      if (addressValue) {
        formData.append("address", addressValue);
      }
      if (!canShowObjectives()) {
        formData.append("agentObjective", "others");
        formData.append("agentObjectiveDescription", "");
        formData.append("agentObjectiveId", "100");
      } else if (agentObjective?.id === 100) {
        formData.append("agentObjective", "others");
        formData.append("agentObjectiveDescription", otherObjVal);
        formData.append("agentObjectiveId", "100");
      } else if (agentObjective) {
        formData.append("agentObjective", agentObjective.title);
        formData.append("agentObjectiveDescription", agentObjective.details);
        formData.append("agentObjectiveId", agentObjective.id.toString());
      }

      const response :any= await axios.post(ApiPath, formData, {
        headers: {
          Authorization: "Bearer " + AuthToken,
        },
      });

      if (response) {
        setIsVisible(true);
        if (response.data.status === true) {
          const localData = localStorage.getItem("User");
          if (localData) {
            let D = JSON.parse(localData) as UserData;
            if (D.user.checkList?.checkList) {
              D.user.checkList.checkList.calendarCreated = true;
            }
            localStorage.setItem("User", JSON.stringify(D));
          }
          window.dispatchEvent(
            new CustomEvent("UpdateCheckList", { detail: { update: true } })
          );
          setSnackMessage("Agent created successfully.");
          setMsgType(SnackbarTypes.Success);
          localStorage.setItem(
            PersistanceKeys.LocalSavedAgentDetails,
            JSON.stringify(response.data.data)
          );
          handleContinue();
        } else if (response.data.status === false) {
          setSnackMessage("Agent creation failed!");
          setMsgType(SnackbarTypes.Error);
          setBuildAgentLoader(false);
        }
      }
    } catch (error) {
      console.error("Error occurred in build agent api:", error);
      setLoaderModal(false);
      setBuildAgentLoader(false);
    }
  };

  const handleSelectStatus = (item: StatusType) => {
    if (item.id === 5) {
      setShowSomtthingElse(true);
    } else {
      setShowSomtthingElse(false);
    }
    setSelectedStatus((prevId) => (prevId === item ? null : item));
  };

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: process.env.NEXT_PUBLIC_AddressPickerApiKey || "",
  });

  const handleSelectAddress = (placeId: string, description: string) => {
    setAddressValue(description);
    setShowDropdown(false);

    if (placesService) {
      placesService.getDetails({ placeId }, (details) => {
        setSelectedPlace(details);
      });
    }
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target.value;
    setAddressValue(input);

    getPlacePredictions({
      input,
      componentRestrictions: { country: ["us", "ca"] },
    });
    setShowDropdown(true);
  };

  const renderItem = (item: any) => (
    <div
      key={item.place_id}
      className="prediction-item"
      onClick={() => {
        handleSelectAddress(item.place_id, item.description);
        setShowAddressPickerModal(false);
      }}
      style={{
        cursor: "pointer",
        padding: "8px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {item.description}
    </div>
  );

  const status: StatusType[] = [
    {
      id: 1,
      title: "Coming soon",
    },
    {
      id: 2,
      title: "Just sold",
    },
    {
      id: 3,
      title: "Just listed",
    },
    {
      id: 4,
      title: "In escrow",
    },
    {
      id: 5,
      title: "Something else",
    },
  ];

  const styles = {
    headingStyle: {
      fontSize: 14,
      fontWeight: "600",
    },
    inputStyle: {
      fontSize: 13,
      fontWeight: "400",
      width: "95%",
    },
    headingTitle: {
      fontSize: 13,
      fontWeight: "700",
      width: "95%",
    },
    modalsStyle: {
      height: "auto",
      bgcolor: "transparent",
      mx: "auto",
      my: "50vh",
      transform: "translateY(-55%)",
      borderRadius: 2,
      border: "none",
      outline: "none",
    },
  };

  return (
    <div
      style={{ width: "100%" }}
      className="overflow-y-hidden flex flex-row justify-center items-center"
    >
      <div
        className="sm:rounded-2xl w-full md:w-10/12 h-[90vh] flex flex-col items-center"
        style={{ scrollbarWidth: "none", backgroundColor: "#ffffff" }}
      >
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

        <div className="w-full h-[90%]">
          <IntroVideoModal
            open={introVideoModal}
            onClose={() => setIntroVideoModal(false)}
            videoTitle="Learn about getting started"
            videoUrl={HowtoVideos.GettingStarted}
          />

          <div className="h-[10%]">
            <Header />
          </div>
          <div
            className="-ml-4 lg:flex hidden xl:w-[350px] lg:w-[350px]"
            style={{
              position: "absolute",
              top: "20%",
            }}
          >
            <VideoCard
              duration="1 min 47 sec"
              horizontal={false}
              playVideo={() => {
                setIntroVideoModal(true);
              }}
              title="Learn about getting started"
            />
          </div>
          <div className="flex flex-col items-center px-4 w-full h-[90%]">
            <button
              className="mt-6 w-11/12 md:text-4xl text-lg font-[700]"
              style={{ textAlign: "center" }}
            >
              Get started with your AI agent
            </button>
            <div className="w-full flex flex-col items-center max-h-[80%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple">
              <div
                className="mt-8 w-6/12 gap-4 flex flex-col px-2"
                style={{ scrollbarWidth: "none" }}
              >
                <div
                  style={styles.headingStyle}
                  className="flex flex-row items-center gap-2"
                >
                  {`What's this AI agent's name?`}
                  <div
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={"/svgIcons/infoIcon.svg"}
                      height={20}
                      width={20}
                      alt="*"
                    />
                  </div>
                </div>
                <Popover
                  id="mouse-over-popover"
                  sx={{ pointerEvents: "none" }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <div className="flex flex-row items-center px-2 h-[40px] gap-2">
                    <Image
                      src={"/svgIcons/infoIcon.svg"}
                      height={20}
                      width={20}
                      alt="*"
                    />
                    <div style={{ fontWeight: "600", fontSize: 15 }}>
                      Your AI will identify itself by this name
                    </div>
                  </div>
                </Popover>
                <input
                  placeholder="Ex: Ana's AI, Ana.ai, Ana's Assistant"
                  className="border rounded p-3 outline-none focus:outline-none focus:ring-0"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  enterKeyHint="done"
                  style={{
                    ...styles.inputStyle,
                    border: "1px solid #00000020",
                  }}
                  value={agentName}
                  onChange={(e) => {
                    setAgentName(e.target.value);
                  }}
                />

                <div className="mt-2" style={styles.headingStyle}>
                  {`What's this AI agent's task?`}
                </div>

                <div className="sm:flex sm:flex-row items-center gap-4">
                  <div
                    className="flex flex-row cursor-pointer items-center justify-center gap-2 h-[60px] w-full sm:w-[240px] px-6"
                    style={{
                      borderRadius: "23px",
                      border: OutBoundCalls
                        ? "2px solid #7902DF"
                        : "2px solid #00000010",
                    }}
                    onClick={handleOutBoundCallClick}
                  >
                    {OutBoundCalls ? (
                      <Image
                        src={"/svgIcons/callOutFocus.svg"}
                        height={24}
                        width={24}
                        alt="*"
                      />
                    ) : (
                      <Image
                        src={"/assets/callOut.png"}
                        height={24}
                        width={24}
                        alt="*"
                      />
                    )}
                    <div
                      className={`text-start ms-2 sm:text-center sm:ms-0`}
                      style={{
                        ...styles.inputStyle,
                      }}
                    >
                      Making Outbound Calls
                    </div>
                  </div>
                  <div
                    className="flex flex-row cursor-pointer items-center justify-center gap-2 h-[60px] sm:mt-0 mt-4 w-full sm:w-[240px] px-6"
                    style={{
                      borderRadius: "23px",
                      border: InBoundCalls
                        ? "2px solid #7902DF"
                        : "2px solid #00000010",
                    }}
                    onClick={handleInboundCallClick}
                  >
                    {InBoundCalls ? (
                      <Image
                        src={"/assets/callInFocus2.png"}
                        height={24}
                        width={24}
                        alt="*"
                      />
                    ) : (
                      <Image
                        src={"/assets/callIn.png"}
                        height={24}
                        width={24}
                        alt="*"
                      />
                    )}
                    <div
                      className="text-start ms-2 sm:text-center sm:ms-0"
                      style={styles.inputStyle}
                    >
                      Taking Inbound Calls
                    </div>
                  </div>
                </div>

                <div className="mt-2" style={styles.headingStyle}>
                  {`What's this AI agent's title?`}
                </div>
                <input
                  autoComplete="off"
                  autoCorrect="on"
                  spellCheck="true"
                  enterKeyHint="done"
                  placeholder="Ex: Senior Property Acquisition Specialist"
                  className="border rounded p-3 outline-none focus:outline-none focus:ring-0"
                  style={{
                    ...styles.inputStyle,
                    border: "1px solid #00000020",
                  }}
                  value={agentRole}
                  onChange={(e) => {
                    setAgentRole(e.target.value);
                  }}
                />

                {canShowObjectives() && (
                  <div className="mt-2" style={styles.headingStyle}>
                    {`What's this AI agent's primary objective during the call?`}
                  </div>
                )}

                {canShowObjectives() && (
                  <div style={styles.inputStyle}>
                    Select only one. You can create new agents to dedicate them
                    to other objectives.
                  </div>
                )}
                {canShowObjectives() && (
                  <div className="flex flex-wrap">
                    {AgentObjective.map((item) => (
                      <div
                        key={item.id}
                        className="w-full text-start md:w-1/2 pe-2 flex py-4"
                      >
                        <button
                          className="border-2 w-full rounded-2xl text-start p-4 h-full flex flex-col justify-between outline-none"
                          onClick={() => {
                            handleToggleClick(item);
                          }}
                          style={{
                            borderColor:
                              item.id === toggleClick ? "#7902DF" : "",
                            backgroundColor:
                              item.id === toggleClick ? "#402FFF10 " : "",
                          }}
                        >
                          {item.id === toggleClick ? (
                            <Image
                              src={item.focusIcn}
                              height={30}
                              width={30}
                              alt="*"
                            />
                          ) : (
                            <Image
                              src={item.unFocusIcon}
                              height={30}
                              width={30}
                              alt="*"
                            />
                          )}
                          <div className="mt-8" style={styles.headingTitle}>
                            {item.title}
                          </div>
                          <div
                            className="mt-4"
                            style={{ fontSize: 11, fontWeight: "300" }}
                          >
                            {item.details}
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {showOtherObjective && (
                  <div>
                    <div style={styles.headingStyle}>{`Agent's Objective`}</div>
                    <input
                      ref={bottomRef}
                      enterKeyHint="done"
                      placeholder="Type Here...."
                      className="border w-6/12 rounded p-1 outline-none w-full mt-1 mx-2 mb-2 focus:outline-none focus:ring-0"
                      style={{
                        ...styles.inputStyle,
                        border: "1px solid #00000020",
                      }}
                      value={otherObjVal}
                      onChange={(e) => setOtherObjVal(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[10%]">
          <div>
            <ProgressBar value={33} />
          </div>

          <Footer
            handleContinue={handleBuildAgent}
            donotShowBack={true}
            registerLoader={buildAgentLoader}
            shouldContinue={!canContinue()}
          />
        </div>
      </div>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        closeAfterTransition
        BackdropProps={{
          sx: {
            backgroundColor: "#00000020",
          },
        }}
      >
        <Box className="lg:w-4/12 sm:w-10/12 w-full" sx={styles.modalsStyle}>
          <div className="flex flex-row justify-center w-full h-[70vh]">
            <div
              className="w-full overflow-auto"
              style={{
                backgroundColor: "#ffffff",
                padding: 20,
                borderRadius: "13px",
              }}
            >
              <div
                className="w-full px-2 h-[90%] overflow-auto"
                style={{ scrollbarWidth: "none", zIndex: 12 }}
              >
                <div className="flex flex-row items-center justify-end w-full">
                  <button
                    className="outline-none border-none"
                    onClick={() => {
                      setShowModal(false);
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
                  className="text-center"
                  style={{ fontWeight: "600", fontSize: 24 }}
                >
                  Community Update
                </div>

                <div style={styles.headingStyle} className="mt-4">
                  {`What's the status?`}
                </div>

                <div className="flex flex-row flex-wrap gap-4 mt-4">
                  {status.map((item) => (
                    <button
                      key={item.id}
                      onClick={(e) => {
                        handleSelectStatus(item);
                      }}
                      className="px-6 border rounded-3xl h-[65px] text-center flex flex-row justify-center items-center outline-none"
                      style={{
                        border:
                          selectedStatus?.id === item.id
                            ? "2px solid #7902DF"
                            : "",
                        backgroundColor:
                          selectedStatus?.id === item.id ? "#402FFF15" : "",
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>

                {showSomtthingElse && (
                  <div>
                    <div style={styles.headingStyle} className="mt-4">
                      {`What's that`}
                    </div>

                    <div className="mt-1">
                      <input
                        className="h-[50px] border rounded-lg outline-none border p-3 w-full focus:outline-none focus:ring-0"
                        placeholder="Type here..."
                        value={otherStatus}
                        onChange={(e) => {
                          setOtherStatus(e.target.value);
                        }}
                        style={{
                          ...styles.inputStyle,
                          border: "1px solid #00000020",
                        }}
                      />
                    </div>
                  </div>
                )}

                <div style={styles.headingStyle} className="mt-4">
                  {`What's the address`}
                </div>
                <div
                  className="hidden sm:flex mt-1 pb-4"
                  style={{ zIndex: 15 }}
                >
                  <div className="w-full">
                    <input
                      className="w-full h-[50px] rounded-lg outline-none focus:ring-0"
                      style={{ border: "1px solid #00000020" }}
                      placeholder="Type here ..."
                      value={addressValue}
                      onChange={handleInputChange}
                    />
                    {isPlacePredictionsLoading && <p>Loading...</p>}
                    {showDropdown &&
                      placePredictions.map((item) => renderItem(item))}
                  </div>
                </div>

                <div
                  className="sm:hidden mt-1 pb-4 mb-12"
                  style={{ zIndex: 15 }}
                >
                  <div
                    className="w-full"
                    onClick={() => {
                      setShowAddressPickerModal(true);
                    }}
                  >
                    <input
                      className="w-full h-[50px] rounded-lg outline-none focus:ring-0"
                      style={{
                        border: "1px solid #00000020",
                        cursor: "pointer",
                      }}
                      placeholder="Type here ..."
                      value={addressValue}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>

              <div
                className="w-full flex flex-row items-center justify-center"
                style={{ position: "absolute", bottom: 0, left: 0 }}
              >
                <button
                  className="text-white w-11/12 h-[50px] rounded-lg bg-purple mb-8"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <LoaderAnimation loaderModal={loaderModal} />

      <Modal
        open={showAddressPickerModal}
        onClose={() => setShowAddressPickerModal(false)}
        closeAfterTransition
        BackdropProps={{
          sx: {
            backgroundColor: "#00000020",
          },
        }}
      >
        <Box className="w-full" sx={styles.modalsStyle}>
          <div
            className="w-full h-[70vh] bg-white p-6 overflow-auto"
            style={{
              scrollbarWidth: "none",
            }}
          >
            <div className="flex flex-row items-center justify-between">
              <div>Address</div>
              <div>
                <button
                  className="outline-none"
                  onClick={() => setShowAddressPickerModal(false)}
                >
                  <Image
                    src={"/assets/blackBgCross.png"}
                    height={24}
                    width={24}
                    alt="*"
                  />
                </button>
              </div>
            </div>
            <div className="sm:hidden mt-1 pb-4 mb-12" style={{ zIndex: 15 }}>
              <div>
                <input
                  className="w-full h-[50px] rounded-lg outline-none focus:ring-0"
                  style={{
                    border: "1px solid #00000020",
                    cursor: "pointer",
                  }}
                  placeholder="Type here ..."
                  value={addressValue}
                  onChange={handleInputChange}
                />
                {isPlacePredictionsLoading && <p>Loading...</p>}
                {showDropdown && placePredictions.map((item) => renderItem(item))}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateAgent1;