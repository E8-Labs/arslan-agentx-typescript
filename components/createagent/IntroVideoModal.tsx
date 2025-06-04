import React from "react";
import Image from "next/image";
import { Modal, Box } from "@mui/material";

interface IntroVideoModalProps {
  open: boolean;
  onClose: () => void;
  videoTitle?: string;
  videoUrl: string;
}

const IntroVideoModal: React.FC<IntroVideoModalProps> = ({
  open,
  onClose,
  videoTitle,
  videoUrl,
}) => {
  const modalStyles = {
    position: "fixed" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 1000,
        sx: {
          backgroundColor: "#00000020",
        },
      }}
    >
      <Box className="lg:w-5/12 sm:w-full w-8/12" sx={modalStyles}>
        <div
          className="sm:w-full w-full"
          style={{
            backgroundColor: "#ffffff",
            padding: 20,
            borderRadius: "13px",
          }}
        >
          {/* Close Button */}
          <div className="flex flex-row justify-end">
            <button onClick={onClose}>
              <Image
                src="/assets/crossIcon.png"
                height={40}
                width={40}
                alt="Close"
              />
            </button>
          </div>

          {/* Title */}
          <div
            className="text-center"
            style={{ fontWeight: "700", fontSize: 25 }}
          >
            {videoTitle || "Learn more about assigning leads"}
          </div>

          {/* Video Section */}
          <div className="mt-6">
            <video
              controls
              autoPlay
              muted={false}
              style={{
                width: "100%",
                height: "50vh",
                borderRadius: 15,
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default IntroVideoModal;