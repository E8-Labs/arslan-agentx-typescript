import { Box, Modal } from "@mui/material";
import Image from "next/image";
import React from "react";

type LoaderAnimationProps = {
  loaderModal?: boolean;
  isOpen?: boolean;
  title?: string;
};

const LoaderAnimation: React.FC<LoaderAnimationProps> = ({
  loaderModal = false,
  isOpen = false,
  title = "Your agent is building..",
}) => {
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
    modalsStyle: {
      height: "auto",
      mx: "auto",
      my: "50vh",
      transform: "translateY(-55%)",
      border: "none",
      outline: "none",
    },
  };

  return (
    <div>
      <Modal
        open={loaderModal || isOpen}
        closeAfterTransition
        BackdropProps={{
          sx: {
            backgroundColor: "#00000020",
          },
        }}
      >
        <Box
          className="lg:w-4/12 sm:w-7/12 w-8/12 rounded-3xl bg-white"
          sx={styles.modalsStyle}
        >
          <div className="flex flex-row justify-center w-full">
            <div
              className="w-full"
              style={{
                backgroundColor: "transparent",
                padding: 20,
                borderRadius: "13px",
              }}
            >
              <div className="flex flex-row items-start mt-12 justify-center">
                <Image
                  src="/agentXOrb.gif"
                  style={{ height: "142px", width: "152px",}}
                  height={142}
                  width={152}
                  alt="Loading"
                />
              </div>

              <div
                className="text-center mt-8"
                style={{ fontWeight: "600", fontSize: 16 }}
              >
                {title}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LoaderAnimation;
