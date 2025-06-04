import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PauseCircle } from "@phosphor-icons/react";
import axios from "axios";
import { Box, CircularProgress, Modal } from "@mui/material";
import voicesList from "./Voices";
import Apis from "../apis/Apis";
import Header from "@/components/onboarding/Header";
import Footer from "@/components/onboarding/Footer";
import ProgressBar from "@/components/onboarding/ProgressBar";

interface VoiceItem {
  voice_id: string;
  name: string;
  Dialect: string;
  preview?: string;
  img: string;
  status?: string;
}

interface AgentDetails {
  id: string;
  name: string;
}

interface User {
  user: {
    userType: string;
  };
}

interface CreateAgentVoiceProps {
  handleBack: () => void;
  user: User;
}

const CreateAgentVoice: React.FC<CreateAgentVoiceProps> = ({ handleBack, user }) => {
  const router = useRouter();
  const [toggleClick, setToggleClick] = useState<number | null>(null);
  const [voices, setVoices] = useState<VoiceItem[]>([]);
  const [voicesLoader, setVoicesLoader] = useState<boolean>(false);
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [agentDetails, setAgentDetails] = useState<AgentDetails | null>(null);
  const [shouldContinue, setShouldContinue] = useState<boolean>(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [showNoAudioModal, setShowNoAudioModal] = useState<VoiceItem | null>(null);

  useEffect(() => {
    setVoices(voicesList);
  }, []);

  useEffect(() => {
    if (selectedVoiceId) {
      setShouldContinue(false);
    }
  }, [selectedVoiceId]);

  useEffect(() => {
    const localData = localStorage.getItem("agentDetails");
    if (localData) {
      const agentData = JSON.parse(localData) as AgentDetails;
      setAgentDetails(agentData);
    }
  }, []);

  const handleToggleClick = (id: number, item: VoiceItem) => {
    setToggleClick((prevId) => (prevId === id ? null : id));
    setSelectedVoiceId(item.voice_id);
  };

  const handleContinue = async () => {
    try {
      setVoicesLoader(true);
      let AuthToken: string | null = null;
      let mainAgentId: string | null = null;
      
      const localData = localStorage.getItem("User");
      if (localData) {
        const Data = JSON.parse(localData);
        AuthToken = Data.token;
      }

      const mainAgentData = localStorage.getItem("agentDetails");
      if (mainAgentData) {
        const Data = JSON.parse(mainAgentData) as AgentDetails;
        mainAgentId = Data.id;
      }

      const ApiPath = Apis.updateAgent;
      const formData = new FormData();
      formData.append("mainAgentId", mainAgentId || "");
      formData.append("voiceId", selectedVoiceId);

      const response :any= await axios.post(ApiPath, formData, {
        headers: {
          Authorization: "Bearer " + AuthToken,
        },
      });

      if (response.data.status === true) {
        router.push("/pipeline");
        localStorage.removeItem("claimNumberData");
      } else {
        setVoicesLoader(false);
      }
    } catch (error) {
      setVoicesLoader(false);
    }
  };

  const playVoice = (url: string) => {
    if (audio) {
      audio.pause();
    }
    const ad = new Audio(url);
    ad.play();
    setAudio(ad);
  };

  const styles = {
    headingStyle: {
      fontSize: 16,
      fontWeight: "700",
    },
    inputStyle: {
      fontSize: 15,
      fontWeight: "500",
      color: "#000000",
    },
    dropdownMenu: {
      fontSize: 15,
      fontWeight: "500",
      color: "#00000070",
    },
    callBackStyles: {
      height: "71px",
      width: "210px",
      border: "1px solid #15151550",
      borderRadius: "20px",
      fontWeight: "600",
      fontSize: 15,
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

  const getImageHeight = (item: VoiceItem): number => {
    const heightMap: Record<string, number> = {
      "Ava": 50,
      "Zane": 50,
      "Trinity": 30,
      "Dax": 70,
      "Mia": 30,
      "Kaia": 30,
      "Axel": 30,
      "Aria": 60,
      "Luna": 50,
    };
    return heightMap[item.name] || 70;
  };

  const getImageWidth = (item: VoiceItem): number => {
    const widthMap: Record<string, number> = {
      "Ava": 50,
      "Zane": 50,
      "Trinity": 55,
      "Dax": 60,
      "Mia": 55,
      "Kaia": 50,
      "Axel": 55,
      "Aria": 58,
      "Luna": 50,
    };
    return widthMap[item.name] || 60;
  };

  const addMarginTop = (item: VoiceItem): number => {
    const marginTopMap: Record<string, number> = {
      "Trinity": 5,
      "Dax": 3,
      "Axel": 7,
      "Niko": 5,
      "Lex": 2,
      "Xen": 6,
      "Elon": 8,
      "Aria": 12,
    };
    return marginTopMap[item.name] || 0;
  };

  const addMariginLeft = (item: VoiceItem): number => {
    const marginLeftMap: Record<string, number> = {
      "Niko": 4,
      "Lex": 4,
      "Dax": 3,
      "Xen": 6,
      "Elon": 5,
    };
    return marginLeftMap[item.name] || 0;
  };

  return (
    <div
      style={{ width: "100%" }}
      className="overflow-y-hidden flex flex-row justify-center items-center"
    >
      <div className="bg-white rounded-2xl w-10/12 h-[90vh] py-4 flex flex-col justify-between">
        <div className="flex flex-col h-[90svh]">
          <Header />
          <div className="flex flex-col items-center px-4 w-full">
            <div
              className="mt-6 w-11/12 md:text-4xl text-lg font-[700]"
              style={{ textAlign: "center" }}
            >
              Choose a voice for {agentDetails?.name}
            </div>
            <div className="w-full flex flex-row justify-center">
              <div
                className="mt-8 w-6/12 gap-4 flex flex-col max-h-[53vh] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple"
                style={{ scrollbarWidth: "none" }}
              >
                {voices.map((item, index) => (
                  <button
                    key={index}
                    style={{
                      border: item.voice_id === selectedVoiceId ? "2px solid #7902DF" : "",
                      backgroundColor: item.voice_id === selectedVoiceId ? "#402FFF10" : "",
                    }}
                    className="flex flex-row items-center border mt-4 p-2 justify-between h-[100px] px-8 rounded-xl outline-none"
                    onClick={() => handleToggleClick(index, item)}
                  >
                    <div className="flex flex-row items-center gap-4">
                      <div
                        className="flex flex-row items-center justify-center"
                        style={{
                          height: "62px",
                          width: "62px",
                          borderRadius: "50%",
                          backgroundColor: item.voice_id === selectedVoiceId ? "white" : "#d3d3d380",
                        }}
                      >
                        <Image
                          src={item.img}
                          height={getImageHeight(item)}
                          width={getImageWidth(item)}
                          style={{
                            borderRadius: "50%",
                            marginTop: addMarginTop(item),
                            marginLeft: addMariginLeft(item),
                          }}
                          alt="voice avatar"
                        />
                      </div>
                      <div>
                        <div
                          className="text-start flex flex-row items-center gap-2"
                          style={{
                            fontSize: 17,
                            fontWeight: "700",
                          }}
                        >
                          {item.name}
                          {item.status && (
                            <div className="text-start text-white text-sm font-[500] bg-purple rounded-full px-2 w-fit-content">
                              {item.status}
                            </div>
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: "500",
                          }}
                        >
                          {item.Dialect}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                      <div>
                        <Image
                          src={"/assets/voice.png"}
                          height={15}
                          width={23}
                          alt="voice icon"
                        />
                      </div>
                      {item.preview ? (
                        <div>
                          {preview === item.preview ? (
                            <div
                              onClick={() => {
                                if (audio) {
                                  audio.pause();
                                }
                                setPreview(null);
                              }}
                            >
                              <PauseCircle size={38} weight="regular" />
                            </div>
                          ) : (
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreview(item.preview!);
                                playVoice(item.preview!);
                              }}
                            >
                              <Image
                                src={"/assets/play.png"}
                                height={25}
                                width={25}
                                alt="play icon"
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowNoAudioModal(item);
                            }}
                          >
                            <Image
                              src={"/assets/play.png"}
                              height={25}
                              width={25}
                              alt="play icon"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Modal
          open={!!showNoAudioModal}
          onClose={() => setShowNoAudioModal(null)}
          closeAfterTransition
          BackdropProps={{
            timeout: 1000,
            sx: {
              backgroundColor: "#00000020",
            },
          }}
        >
          <Box className="lg:w-5/12 sm:w-full w-8/12" sx={styles.modalsStyle}>
            <div className="flex flex-row justify-center w-full">
              <div
                className="sm:w-full w-full"
                style={{
                  backgroundColor: "#ffffff",
                  padding: 20,
                  borderRadius: "13px",
                }}
              >
                <div className="flex flex-row justify-end">
                  <button
                    onClick={() => {
                      setShowNoAudioModal(null);
                    }}
                  >
                    <Image
                      src={"/assets/crossIcon.png"}
                      height={40}
                      width={40}
                      alt="close icon"
                    />
                  </button>
                </div>

                <div
                  className="text-center sm:font-24 font-16"
                  style={{ fontWeight: "700" }}
                >
                  Learn more about assigning leads
                </div>

                <div className="mt-6 text-red text-center font-[600] text-xl">
                  No voice added by{" "}
                  <span className="underline">{showNoAudioModal?.name}</span>
                </div>
              </div>
            </div>
          </Box>
        </Modal>

        <div className="flex flex-col h-[7svh] ">
          <div className="">
            <ProgressBar value={33} />
          </div>

          <Footer
            handleContinue={handleContinue}
            handleBack={handleBack}
            registerLoader={voicesLoader}
            shouldContinue={shouldContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAgentVoice;