import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";
import { CircularProgress } from "@mui/material";
import Apis from "../apis/Apis";
import { PersistanceKeys } from "@/constants/Constants";
import { GetServicesForUser } from "@/utilities/AgentServices";

// Define types for props
type UserServiceProps = {
  handleContinue: () => void;
  handleBack: () => void;
};

// Define types for service item
type ServiceItem = {
  id: number;
  title: string;
  description: string;
};

const UserService: React.FC<UserServiceProps> = ({ handleContinue, handleBack }) => {
  const router = useRouter();
  const [serviceId, setServiceId] = useState<number[]>([]);
  const [servicesData, setServicesData] = useState<ServiceItem[]>([]);
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState(0);
  const [shouldContinue, setShouldContinue] = useState(true);

  useEffect(() => {
    const selectedServiceID = localStorage.getItem(PersistanceKeys.RegisterDetails);
    if (selectedServiceID) {
      const serviceIds = JSON.parse(selectedServiceID);
      setServiceId(serviceIds.serviceID);
    }
  }, []);

  useEffect(() => {
    getDefaultData();
  }, []);

  useEffect(() => {
    if (serviceId.length > 0) {
      setShouldContinue(false);
    } else {
      setShouldContinue(true);
    }
  }, [serviceId]);

  const getDefaultData = async (): Promise<void> => {
    try {
      const selectedServiceID = localStorage.getItem(PersistanceKeys.RegisterDetails);
      let AgentTypeTitle: string | null = null;
      if (selectedServiceID) {
        const serviceIds = JSON.parse(selectedServiceID);
        AgentTypeTitle = serviceIds.userTypeTitle;
      }
      const servicesLocal = GetServicesForUser(AgentTypeTitle);
      setServicesData(servicesLocal);

      const ApiPath = `${Apis.defaultData}?type=${AgentTypeTitle}`;
      const response : any = await axios.get(ApiPath, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        setServicesData(response.data.data.agentServices);
      }
    } catch (error) {
      // console.error("Error in getDefaultData:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleserviceId = (id: number): void => {
    setServiceId((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
    setValue(30);
  };

  const handleNext = (): void => {
    const data = localStorage.getItem(PersistanceKeys.RegisterDetails);
    if (data) {
      const details = JSON.parse(data);
      details.serviceID = serviceId;
      localStorage.setItem(PersistanceKeys.RegisterDetails, JSON.stringify(details));

      if (serviceId && serviceId.length > 0) {
        handleContinue();
      }
    }
  };

  return (
    <div
      style={{ width: "100%" }}
      className="overflow-y-none flex flex-row justify-center items-center"
    >
      <div
        className="bg-white sm:rounded-2xl flex flex-col justify-between w-full sm:mx-2 md:w-10/12 h-[100%] sm:h-[90%] py-4"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="h-[90svh] sm:h-[82svh]">
          <div className="h-[10%]">
            <Header />
          </div>

          <div className="flex flex-col items-center px-4 w-full h-[90%]">
            <div
              className="mt-6 w-10/12 sm:w-full md:w-11/12 md:text-4xl text-lg font-[650] sm:font-[600]"
              style={{ textAlign: "center" }}
            >
              What would you like AgentX to help you with?
            </div>

            {loader ? (
              <div className="w-full flex flex-row justify-center items-center h-screen">
                <CircularProgress size={35} />
              </div>
            ) : (
              <div
                className="mt-2 pb-2 sm:mt-8 w-full md:w-10/12 lg:w-7/12 gap-4 flex flex-col sm:max-h-[90%] max-h-[100%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple"
              >
                {servicesData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleserviceId(item.id);
                    }}
                    className="border-none outline-none"
                  >
                    <div
                      className="border bg-white flex flex-row items-center w-full rounded-2xl pt-3"
                      style={{
                        border: serviceId.includes(item.id)
                          ? "2px solid #7902DF"
                          : "",
                        scrollbarWidth: "none",
                        backgroundColor: serviceId.includes(item.id)
                          ? "#402FFF05"
                          : "",
                      }}
                    >
                      <div className="flex flex-row items-start px-4 w-full py-2 gap-2">
                        <div className="mt-2 sm:hidden">
                          {serviceId.includes(item.id) ? (
                            <Image
                              src={"/assets/charmTick.png"}
                              alt="*"
                              height={24}
                              width={24}
                            />
                          ) : (
                            <Image
                              src={"/assets/charmUnMark.png"}
                              alt="*"
                              height={24}
                              width={24}
                            />
                          )}
                        </div>

                        <div className="mt-2 sm:flex hidden">
                          {serviceId.includes(item.id) ? (
                            <Image
                              src={"/assets/charmTick.png"}
                              alt="*"
                              height={24}
                              width={24}
                            />
                          ) : (
                            <Image
                              src={"/assets/charmUnMark.png"}
                              alt="*"
                              height={24}
                              width={24}
                            />
                          )}
                        </div>

                        <div className="text-start w-[100%] md:w-[90%]">
                          <div
                            style={{
                              fontWeight: "700",
                              fontSize: 20,
                              textAlign: "start",
                            }}
                          >
                            {item.title}
                          </div>

                          <div className="mt-2" style={{ textAlign: "start" }}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 h-[10%] flex flex-col justify-end">
          <div>
            <ProgressBar value={33} />
          </div>

          <div style={{ height: "35px" }}>
            <Footer
              handleContinue={handleNext}
              handleBack={handleBack}
              shouldContinue={shouldContinue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserService;
