import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "@/components/onboarding/ProgressBar";
import { useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import axios from "axios";
import Apis from "../apis/Apis";
import { CircularProgress } from "@mui/material";
import { PersistanceKeys } from "@/constants/Constants";
import { GetAreasOfFocusForUser } from "@/utilities/AreaOfFocus";

type FocusAreaProps = {
  handleContinue: () => void;
  handleBack: () => void;
  DefaultData?: any;
  handleSalesAgentContinue?: () => void;
  handleSolarAgentContinue?: () => void;
  handleInsuranceContinue?: () => void;
  handleMarketerAgentContinue?: () => void;
  handleWebsiteAgentContinue?: () => void;
  handleRecruiterAgentContinue?: () => void;
  handleTaxAgentContinue?: () => void;
};

type FocusItem = {
  id: string | number;
  title: string;
  description?: string;
};

const FocusArea: React.FC<FocusAreaProps> = ({
  handleContinue,
  handleBack,
}) => {
  const othersFocus = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [focusArea, setFocusArea] = useState<(string | number)[]>([]);
  const [focusAreaTitle, setFocusAreaTitle] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [focusData, setFocusData] = useState<FocusItem[]>([]);
  const [shouldContinue, setShouldContinue] = useState<boolean>(true);

  const [otherType, setOtherType] = useState<string>("");
  const [checkOthersFocusArea, setCheckOthersFocusArea] = useState<boolean>(false);
  const [showOtherInput, setShowOtherInput] = useState<boolean>(false);

  useEffect(() => {
    const focusData = localStorage.getItem(PersistanceKeys.RegisterDetails);
    if (focusData) {
      const FocusAreaDetails = JSON.parse(focusData);
      setFocusArea(FocusAreaDetails.focusAreaId || []);
      setFocusAreaTitle(FocusAreaDetails.areaFocusTitle || "");
      if (FocusAreaDetails.userTypeTitle !== "RealEstateAgent") {
        setShowOtherInput(true);
      }
    }
  }, []);

  useEffect(() => {
    getDefaultData();
  }, []);

  const getDefaultData = async () => {
    try {
      const selectedServiceID = localStorage.getItem(PersistanceKeys.RegisterDetails);
      let AgentTypeTitle: string | null = null;

      if (selectedServiceID) {
        const serviceIds = JSON.parse(selectedServiceID);
        AgentTypeTitle = serviceIds.userTypeTitle;
      }

      const focusData = localStorage.getItem(PersistanceKeys.RegisterDetails);
      if (focusData) {
        const FocusAreaDetails = JSON.parse(focusData);

        if (FocusAreaDetails.userTypeTitle !== "RecruiterAgent") {
          const servicesLocal = GetAreasOfFocusForUser(AgentTypeTitle);
          setFocusData(servicesLocal);
        }

        const ApiPath = `${Apis.defaultData}?type=${AgentTypeTitle}`;
        const response :any = await axios.get(ApiPath, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response) {
          if (FocusAreaDetails.userTypeTitle === "RecruiterAgent") {
            setFocusData(response?.data?.data?.userIndustry || []);
          } else {
            setFocusData(response?.data?.data?.areaOfFocus || []);
          }
        }
      }
    } catch (error) {
      console.error("Error in getDefaultData:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (focusArea.length > 0 || otherType.length > 0) {
      setShouldContinue(false);
    } else {
      setShouldContinue(true);
    }
  }, [focusArea, otherType]);

  const handleNext = () => {
    const data = localStorage.getItem(PersistanceKeys.RegisterDetails);

    if (data) {
      const LocalDetails = JSON.parse(data);
      let details = LocalDetails;

      if (Array.isArray(focusArea)) {
        details.focusAreaId = otherType.trim()
          ? [...focusArea, otherType]
          : [...focusArea];
      } else {
        details.focusAreaId = otherType.trim() ? [otherType] : [];
      }

      localStorage.setItem(
        PersistanceKeys.RegisterDetails,
        JSON.stringify(details)
      );

      handleContinue();
    }
  };

  const handlefocusArea = (id: string | number) => {
    setFocusArea((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const handleSelectOthersField = () => {
    if (checkOthersFocusArea) {
      if (othersFocus.current) {
        othersFocus.current.blur();
      }
      setOtherType("");
    } else {
      othersFocus.current?.focus();
    }
    setCheckOthersFocusArea(!checkOthersFocusArea);
  };

  return (
    <div
      style={{ width: "100%" }}
      className="overflow-y-hidden flex flex-row justify-center items-center"
    >
      <div
        className="bg-white sm:rounded-2xl flex flex-col justify-between w-full sm:mx-2 md:w-10/12 sm:h-[90%] py-4"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="h-[90svh] sm:h-[82svh]">
          <div className="h-[10%]">
            <Header />
          </div>

          <div className="flex flex-col items-center px-4 w-full h-[90%]">
            <div
              className="mt-6 w-9/12 sm:w-11/12 md:text-4xl text-lg font-[600]"
              style={{ textAlign: "center" }}
            >
              {focusAreaTitle || ""}
            </div>

            {loader ? (
              <div className="w-full flex flex-row items-center justify-center h-screen">
                <CircularProgress size={35} />
              </div>
            ) : (
              <div
                className="mt-2 sm:mt-8 pb-2 md:10/12 w-full lg:w-7/12 gap-4 flex flex-col sm:max-h-[90%] max-h-[100%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple"
              >
                {focusData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handlefocusArea(item.id)}
                    className="border-none outline-none"
                  >
                    <div
                      className="border bg-white flex flex-row items-start pt-3 w-full rounded-2xl"
                      style={{
                        border: focusArea.includes(item.id)
                          ? "2px solid #7902DF"
                          : "",
                        scrollbarWidth: "none",
                        backgroundColor: focusArea.includes(item.id)
                          ? "#402FFF05"
                          : "",
                      }}
                    >
                      <div className="w-full flex flex-row items-start px-4 py-2 gap-2">
                        <div className="mt-2 sm:hidden">
                          <Image
                            src={
                              focusArea.includes(item.id)
                                ? "/assets/charmTick.png"
                                : "/assets/charmUnMark.png"
                            }
                            alt="*"
                            height={24}
                            width={24}
                          />
                        </div>

                        <div className="mt-2 sm:flex hidden">
                          <Image
                            src={
                              focusArea.includes(item.id)
                                ? "/assets/charmTick.png"
                                : "/assets/charmUnMark.png"
                            }
                            alt="*"
                            height={32}
                            width={32}
                          />
                        </div>

                        <div className="text-start w-[100%] md:w-[90%]">
                          <div
                            style={{
                              fontWeight: "700",
                              fontSize: 20,
                            }}
                          >
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="mt-2">{item.description}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}

                {showOtherInput && (
                  <div className="border-none outline-none">
                    <div
                      className="border bg-white flex flex-row items-start pt-3 w-full rounded-2xl"
                      style={{
                        border: checkOthersFocusArea ? "2px solid #7902DF" : "",
                        scrollbarWidth: "none",
                        backgroundColor: checkOthersFocusArea
                          ? "#402FFF05"
                          : "",
                      }}
                    >
                      <div className="w-full flex flex-row items-start justify-between px-4 py-2">
                        <div className="text-start w-[100%] md:w-[90%]">
                          <button
                            onClick={handleSelectOthersField}
                            style={{
                              fontWeight: "700",
                              fontSize: 20,
                              width: "100%",
                              textAlign: "start",
                              outline: "none",
                            }}
                          >
                            Other (Type in)
                          </button>
                          <div className="mt-2">
                            <input
                              ref={othersFocus}
                              className="outline-none border-none focus:ring-0 w-full"
                              style={{
                                fontWeight: "500",
                                fontSize: 15,
                                color: "#151515",
                              }}
                              placeholder="Type here..."
                              value={otherType}
                              onChange={(e) => {
                                const value = e.target.value;
                                setOtherType(value);
                                if (value) {
                                  setCheckOthersFocusArea(true);
                                }
                              }}
                            />
                          </div>
                        </div>
                        <button onClick={handleSelectOthersField}>
                          <Image
                            src={
                              checkOthersFocusArea
                                ? "/assets/charmTick.png"
                                : "/assets/charmUnMark.png"
                            }
                            alt="*"
                            height={36}
                            width={36}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="h-[10%]">
          <div>
            <ProgressBar value={60} />
          </div>

          <Footer
            handleContinue={() => {
              const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
              if (windowWidth < 640) {
                const data = localStorage.getItem(PersistanceKeys.RegisterDetails);
                if (data) {
                  const LocalDetails = JSON.parse(data);
                  let details = LocalDetails;

                  if (Array.isArray(focusArea)) {
                    details.focusAreaId = otherType.trim()
                      ? [...focusArea, otherType]
                      : [...focusArea];
                  } else {
                    details.focusAreaId = otherType.trim() ? [otherType] : [];
                  }

                  localStorage.setItem(
                    PersistanceKeys.RegisterDetails,
                    JSON.stringify(details)
                  );
                }
                handleContinue();
              } else {
                handleNext();
              }
            }}
            handleBack={handleBack}
            shouldContinue={shouldContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default FocusArea;
