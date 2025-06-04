import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";
import { Box, CircularProgress, Modal } from "@mui/material";
import { PersistanceKeys } from "@/constants/Constants";

interface UserTypeItem {
  id: number;
  title: string;
  agentType: string;
  icon: string;
  areaOfFocusTitle: string;
  userType: string;
  roundedImage: boolean;
}

interface RegisterDetails {
  serviceID?: string;
  focusAreaId?: string;
  userType: number | null;
  userTypeTitle: string | null;
  areaFocusTitle: string | null;
  otherFocusArea?: string;
}

interface UserTypeProps {
  handleContinue: () => void;
  DefaultData?: any;
  handleUserTypeChange: (userType: string) => void;
}

const UserType: React.FC<UserTypeProps> = ({
  handleContinue,
  handleUserTypeChange,
}) => {
  const router = useRouter();
  const [value] = useState(8);
  const [selectUserType, setSelectUserType] = useState<number | null>(null);
  const [selectUserTypeTitle, setSelectUserTypeTitle] = useState<string | null>(null);
  const [selectedFocusAreaTitle, setSelectedFocusAreaTitle] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [shouldContinue, setShouldContinue] = useState(true);
  const [screenHeight, setScreenHeight] = useState<number | null>(null);


  const userType : UserTypeItem[] =  [
    {
      id: 1,
      title: "Real Estate Agent",
      agentType: "Real Estate Agent",
      // icon: "/usertype/avt1.png",
      icon: "/agencyIcons/agentsView/realState.jpg",
      areaOfFocusTitle: "What area of real estate do you focus on?",
      userType: "RealEstateAgent",
      roundedImage: true,
    },
    {
      id: 2,
      title: "Sales Dev Agent",
      agentType: "SDR/BDR Agent",
      // icon: "/usertype/avt2.png",
      icon: "/agencyIcons/agentsView/salesDev.jpg",
      areaOfFocusTitle: "What area of sales do you focus on?",
      userType: "SalesDevRep",
      roundedImage: true,
    },
    {
      id: 3,
      title: "Solar Agent",
      agentType: "Solar Agent",
      // icon: "/usertype/avt3.png",
      icon: "/agencyIcons/agentsView/solar.jpg",
      areaOfFocusTitle: "What area of solar do you focus on?",
      userType: "SolarRep",
      roundedImage: true,
    },
    {
      id: 4,
      title: "Insurance Agent",
      agentType: "Insurance Agent",
      // icon: "/usertype/avt4.png",
      icon: "/agencyIcons/agentsView/insurance.jpg",
      areaOfFocusTitle: "What area of insurance do you focus on?",
      userType: "InsuranceAgent",
      roundedImage: true,
    },
    {
      id: 5,
      title: "Marketer",
      agentType: "Marketer Agent",
      // icon: "/usertype/avt5.png",
      icon: "/agencyIcons/agentsView/marketer.jpg",
      areaOfFocusTitle: "What area of marketing do you focus on?",
      userType: "MarketerAgent",
      roundedImage: true,
    },

    {
      id: 7,
      title: "Recruiter Agentt",
      agentType: "Recruiter Agent",
      // icon: "/usertype/avt8.png",
      icon: "/agencyIcons/agentsView/recruiter.jpg",
      areaOfFocusTitle: "What industries do you specialize in?",
      userType: "RecruiterAgent",
      roundedImage: false,
    },
    {
      id: 8,
      title: "Tax Agent",
      agentType: "Tax Agent",
      // icon: "/usertype/avt9.png",
      icon: "/agencyIcons/agentsView/tax.jpg",
      areaOfFocusTitle: "What type of clients do you primarily serve?",
      userType: "TaxAgent",
      roundedImage: false,
    },
    {
      id: 9,
      title: "Debt Collector Agent",
      agentType: "Debt Collector Agent",
      // icon: "/usertype/debtcollectoragent.svg",
      icon: "/agencyIcons/agentsView/debt.jpg",
      areaOfFocusTitle: "What type of clients do you primarily serve?",
      userType: "DebtCollectorAgent",
      roundedImage: false,
    },
    {
      id: 10,
      title: "Website Agent",
      agentType: "Website Agent",
      // icon: "/agentXOrb.gif",
      icon: "/agencyIcons/agentsView/website.jpg",
      areaOfFocusTitle: "How would you use AgentX?",
      userType: "WebsiteAgent",
      roundedImage: true,
    },
    {
      id: 11,
      title: "Med Spa Agent",
      agentType: "Med Spa Agent",
      // icon: "/usertype/avt8.png",
      icon: "/agencyIcons/agentsView/medspa.jpg",
      areaOfFocusTitle: "What types of services do you primarily offer",
      userType: "MedSpaAgent",
      roundedImage: false,
    },
    {
      id: 12,
      title: "Law Agent",
      agentType: "Law Agent",
      // icon: "/usertype/avt4.png",
      icon: "/agencyIcons/agentsView/law.jpg",
      areaOfFocusTitle: "What area of law do you primarily practice?",
      userType: "LawAgent",
      roundedImage: false,
    },
    {
      id: 13,
      title: "Loan Officer Agent",
      agentType: "Loan Officer Agent",
      // icon: "/usertype/avt2.png",
      icon: "/agencyIcons/agentsView/loan.jpg",
      areaOfFocusTitle: "What type of loans do you primarily work with?",
      userType: "LoanOfficerAgent",
      roundedImage: false,
    },

    {
      id: 100,
      title: "More",
      agentType: "More Agent",
      icon: "/agentXOrb.gif", //"/usertype/avt7.png",
      areaOfFocusTitle: "How would you use AgentX?",
      userType: "WebsiteAgent",
      roundedImage: true,
    },
  ];

  useEffect(() => {
    if (selectUserType) {
      setShouldContinue(false);
    } else {
      setShouldContinue(true);
    }
  }, [selectUserType]);

  useEffect(() => {
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
    setScreenHeight(windowHeight);
    
    const localData = localStorage.getItem(PersistanceKeys.RegisterDetails);
    if (localData) {
      try {
        const localDetails: RegisterDetails = JSON.parse(localData);
        setSelectUserType(localDetails.userType);
        handleUserTypeChange(localDetails.userType?.toString() || "");
        setSelectUserTypeTitle(localDetails.userTypeTitle);
        setSelectedFocusAreaTitle(localDetails.areaFocusTitle);
      } catch (error) {
        console.error("Error parsing registration details:", error);
      }
    }
  }, [handleUserTypeChange]);

  const handleUserTypeSelection = (item: UserTypeItem) => {
    setSelectUserType(item.id);
    setSelectUserTypeTitle(item.userType);
    setSelectedFocusAreaTitle(item.areaOfFocusTitle);
    handleUserTypeChange(item.userType);
  };

  const handleNext = () => {
    localStorage.removeItem(PersistanceKeys.RegisterDetails);
    const userData: RegisterDetails = {
      userType: selectUserType,
      userTypeTitle: selectUserTypeTitle,
      areaFocusTitle: selectedFocusAreaTitle,
    };

    localStorage.setItem(
      PersistanceKeys.RegisterDetails,
      JSON.stringify(userData)
    );

    if (selectUserType) {
      handleContinue();
    }
  };

  const modalStyles = {
    modalsStyle: {
      height: "auto",
      bgcolor: "transparent",
      mx: "auto",
      my: "50vh",
      transform: "translateY(-55%)",
      borderRadius: 2,
      border: "none",
      outline: "none",
    } as const,
  };

  return (
    <div
      style={{ width: "100%", backgroundColor: "transparent" }}
      className="overflow-y-none flex flex-row justify-center items-center"
    >
      <div
        className="bg-white sm:rounded-2xl flex flex-col justify-between w-full sm:mx-2 md:w-10/12 h-[100%] sm:h-[95%] py-4"
        style={{ scrollbarWidth: "none" }}
      >
        <div className={`h-[90svh] sm:h-[80svh]`}>
          <div className="w-full h-[10%]">
            <Header />
          </div>

          <div className="flex flex-col items-center px-4 w-full h-[90%]">
            <div
              className="mt-4 w-11/12 md:text-4xl text-lg font-[600] text-center"
            >
              Which AgentX will you build?
            </div>

            <div className="mt-2 w-11/12 text-[10px] sm:text-[17px] font-[400] text-center">
              Scale your salesforce. Handle any business use case. With AgentX,
              <br />you can quickly build an AI agent in minutes.
            </div>

            <div className="flex flex-wrap md:w-11/12 sm:w-full lg:w-7/12 mt-8 h-[80%] overflow-auto scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple">
              {userType.map((item, index) => {
                if (index === userType.length - 1) {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-3 w-full pb-6 border-[2px] border-white rounded-xl items-center justify-center bg-[#FAF9FF]"
                    >
                      <div className="sm:flex hidden">
                        <Image
                          src="/svgIcons/halfOrb.svg"
                          height={282}
                          width={282}
                          alt="More agents coming soon"
                        />
                      </div>
                      <div className="text-[15px] font-[500] text-[#ADACAC]">
                        More agents coming in the future
                      </div>
                      <div className="sm:flex hidden">
                        <Image
                          src="/svgIcons/blueThreeDots.svg"
                          height={9}
                          width={37}
                          alt="More options"
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="flex w-6/12 md:w-4/12 p-2">
                      <div
                        className={`w-full rounded-lg p-2 md:hover:border-2 md:hover:border-[#7902DF] border border-[#00000010] transition-all duration-400 ease-in-out transform active:scale-90 ${
                          item.id === selectUserType ? "border-2 border-[#7902DF]" : ""
                        }`}
                        onClick={() => handleUserTypeSelection(item)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleUserTypeSelection(item);
                          }
                        }}
                      >
                        <div
                          className="h-[100px] sm:h-[198px] rounded w-full flex flex-col justify-center pb-[10px] items-center"
                          style={{ backgroundColor: "#FAF9FF" }}
                        >
                          <img
                            src={item.icon}
                            style={{
                              width: item.id === 1 ? "78%" : "60%",
                              transform: "scale(1.1)",
                              borderRadius: "50%"
                            }}
                            alt={item.agentType}
                          />
                        </div>
                        <div className="text-center mt-4 pb-4 font-[600] text-[17px]">
                          {item.agentType}
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="h-[10%] flex flex-col justify-end w-full">
          <div>
            <ProgressBar value={value} />
          </div>
          <div className="mb-4" style={{ height: "35px" }}>
            <Footer
              handleContinue={handleNext}
              donotShowBack={true}
              shouldContinue={shouldContinue}
            />
          </div>
        </div>
      </div>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 1000,
          sx: { backgroundColor: "#00000040" },
        }}
      >
        <Box className="lg:w-5/12 sm:w-full w-8/12" sx={modalStyles.modalsStyle}>
          <div className="flex flex-row justify-center w-full">
            <div className="w-full bg-white p-5 rounded-[13px]">
              <div className="flex flex-row justify-end">
                <button onClick={() => setShowModal(false)}>
                  <Image
                    src="/assets/crossIcon.png"
                    height={40}
                    width={40}
                    alt="Close modal"
                  />
                </button>
              </div>
              <div className="text-center mt-2 mb-4 font-[700] text-[24px]">
                Coming Soon ....
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UserType;