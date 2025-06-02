import { CircularProgress } from "@mui/material";
import React from "react";
import LoaderAnimation from "../animations/LoaderAnimation";

type FooterProps = {
  handleContinue: () => void;
  handleBack?: () => void;
  donotShowBack?: boolean;
  registerLoader?: boolean;
  shouldContinue?: boolean;
  addCalendarLoader?: boolean;
};

const Footer: React.FC<FooterProps> = ({
  handleContinue,
  handleBack,
  donotShowBack = false,
  registerLoader = false,
  shouldContinue = false,
  addCalendarLoader = false,
}) => {
  return (
    <div>
      <div className="px-4 flex flex-row justify-between items-center pt-4">
        {/* Back Button */}
        <div>
          {!donotShowBack && handleBack && (
            <button
              className="text-purple"
              style={{ fontWeight: "700", fontSize: "16" }}
              onClick={handleBack}
            >
              Back
            </button>
          )}
        </div>

        {/* Continue Button */}
        {registerLoader ? (
          <LoaderAnimation loaderModal={registerLoader} />
        ) : (
          <div>
            {addCalendarLoader ? (
              <CircularProgress size={35} />
            ) : (
              <button
                disabled={shouldContinue}
                className="rounded-lg text-white bg-purple"
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                  backgroundColor: shouldContinue ? "#00000020" : "#7902DF",
                  color: shouldContinue ? "#000000" : "#ffffff",
                  height: "40px",
                  width: "100px",
                }}
                onClick={handleContinue}
              >
                Continue
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
