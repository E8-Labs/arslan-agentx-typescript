"use client";
import React, { useEffect, useState } from "react";
import Congrats from "../../components/onboarding/Congrats";
import UserType from "@/components/onboarding/UserType";
import UserService from "@/components/onboarding/UserService";
import FocusArea from "@/components/onboarding/FocusArea";
import SignUpForm from "@/components/onboarding/SignUpForm";
import InsuranceAgentSignUp from "@/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp";
import SalesDevAgent from "@/components/onboarding/otherAgentsSignUp/SalesDevAgent";
import SolarRepAgentSignUp from "@/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp";
import MarketerAgentSignUp from "@/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp";
import WebOwnersAgentSignUp from "@/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp";
import RecruiterAgentSignUp from "@/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp";
import TaxAgentSignUp from "@/components/onboarding/otherAgentsSignUp/TaxAgentSignUp";
import DebtCollectorAgentSignUp from "@/components/onboarding/DebtCollectorAgentSignUp";
import DebtCollerterAgentSignUp from "@/components/onboarding/otherAgentsSignUp/DebtCollecterAgentSignUp";
import MedSpaAgentSignUp from "@/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp";
import LawAgentSignUp from "@/components/onboarding/otherAgentsSignUp/LawAgentSignUp";
import LoanOfficerSignUp from "@/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp";
import OtherDetails from "@/components/onboarding/mobileUI/OtherDetails";
import BasicDetails from "@/components/onboarding/mobileUI/BasicDetails";
import BackgroundVideo from "../../components/general/BackgroundVideo";
import { Modal } from "@mui/material";
import { UserTypes } from "@/constants/UserTypes";
import { useRouter } from "next/navigation";
import ErrorBoundary from "../../components/ErrorBoundary";

type UserDetailsType = {
  name: string;
  email: string;
  phone: string;
};

const Page: React.FC = () => {
  const router = useRouter();

  const [congratsPopup, setCongratsPopup] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>(UserTypes.RealEstateAgent);
  const [index, setIndex] = useState<number>(0);

  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    name: "",
    email: "",
    phone: "",
  });

  const [components, setComponents] = useState<React.FC<any>[]>([
    UserType,
    UserService,
    FocusArea,
    BasicDetails,
    OtherDetails,
  ]);

  let windowSize = 1000;
  if (typeof window !== "undefined") {
    windowSize = window.innerWidth;
  }

  const handleDetails = (userName: string, userEmail: string, userPhoneNumber: string) => {
    setUserDetails({
      name: userName,
      email: userEmail,
      phone: userPhoneNumber,
    });
  };

  useEffect(() => {
    let screenWidth = 1000;
    if (typeof window !== "undefined") {
      screenWidth = window.innerWidth;
    }

    if (screenWidth < 640) {
      let comps = getMobileComponent();
      if (userType) {
        setComponents(comps.filter(Boolean));
      }
    } else {
      let comps = getComponentToRender();
      setComponents(comps.filter(Boolean));
    }
  }, [userType]);

  function getComponentToRender() {
    const agentComponents: Record<string, React.FC<any>> = {
      [UserTypes.RealEstateAgent]: SignUpForm,
      [UserTypes.SalesDevRep]: SalesDevAgent,
      [UserTypes.SolarRep]: SolarRepAgentSignUp,
      [UserTypes.InsuranceAgent]: InsuranceAgentSignUp,
      [UserTypes.MarketerAgent]: MarketerAgentSignUp,
      [UserTypes.WebsiteAgent]: WebOwnersAgentSignUp,
      [UserTypes.RecruiterAgent]: RecruiterAgentSignUp,
      [UserTypes.TaxAgent]: TaxAgentSignUp,
      [UserTypes.DebtCollectorAgent]: DebtCollectorAgentSignUp,
      [UserTypes.MedSpaAgent]: MedSpaAgentSignUp,
      [UserTypes.LawAgent]: LawAgentSignUp,
      [UserTypes.LoanOfficerAgent]: LoanOfficerSignUp,
    };

    const selectedComponent = agentComponents[userType] || SignUpForm;

    return [
      UserType,
      UserService,
      FocusArea,
      selectedComponent,
    ].filter(Boolean);
  }

  function getMobileComponent() {
    const agentComponents: Record<string, React.FC<any>> = {
      [UserTypes.RealEstateAgent]: BasicDetails,
      [UserTypes.SalesDevRep]: BasicDetails,
      [UserTypes.SolarRep]: BasicDetails,
      [UserTypes.InsuranceAgent]: BasicDetails,
      [UserTypes.MarketerAgent]: BasicDetails,
      [UserTypes.WebsiteAgent]: BasicDetails,
      [UserTypes.RecruiterAgent]: BasicDetails,
      [UserTypes.TaxAgent]: BasicDetails,
      [UserTypes.DebtCollectorAgent]: BasicDetails,
    };

    return [
      UserType,
      UserService,
      FocusArea,
      BasicDetails,
      OtherDetails,
      Congrats,
    ].filter(Boolean);
  }

  const CurrentComp = components[index];

  const handleContinue = () => setIndex(index + 1);
  const handleBack = () => setIndex(index - 1);
  const handleWaitList = () => router.push("/onboarding/WaitList");

  const handleUserTypeChange = (userTypeValue: string) => {
    setUserType(userTypeValue);
  };

  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100svh",
    overflow: "none",
  };

  return (
    <ErrorBoundary>
      <div
        className="overflow-hidden flex flex-row justify-center items-center h-[100svh]"
      >
        {windowSize > 640 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundColor: "white",
              zIndex: -1,
            }}
          >
            <BackgroundVideo />
          </div>
        )}
        
        <CurrentComp
          handleContinue={handleContinue}
          handleBack={handleBack}
          handleWaitList={handleWaitList}
          handleDetails={handleDetails}
          userDetails={userDetails}
          setCongratsPopup={setCongratsPopup}
          handleUserTypeChange={handleUserTypeChange}
        />
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
          <Congrats />
        </Modal>
      </div>
    </ErrorBoundary>
  );
};

export default Page;
