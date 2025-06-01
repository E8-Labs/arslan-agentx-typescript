import React, { useEffect } from "react";

export enum SnackbarTypes {
  Error = "Error",
  Warning = "Warning",
  Success = "Success",
}

interface AgentSelectSnackMessageProps {
  title?: string | null;
  message?: string | null;
  type?: SnackbarTypes | null;
  time?: number;
  isVisible: boolean;
  hide: () => void;
}

const DefaultMessage = null;

const AgentSelectSnackMessage: React.FC<AgentSelectSnackMessageProps> = ({
  title = null,
  message = DefaultMessage,
  type = SnackbarTypes.Error,
  time = 4000,
  isVisible,
  hide,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hide();
      }, time);

      return () => clearTimeout(timer);
    }
  }, [isVisible, time, hide]);

  const GetIcon = (): string => {
    switch (type) {
      case SnackbarTypes.Success:
        return "/svgIcons/successMsgIcon.svg";
      case SnackbarTypes.Warning:
      case SnackbarTypes.Error:
      default:
        return "/assets/salmanassets/danger_conflict.svg";
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="flex items-center justify-center w-full z-[99999]"
      style={{
        position: "absolute",
        left: "50%",
        translate: "-50%",
        top: 10,
      }}
    >
      <div
        className="flex items-center space-x-4 p-2 bg-white rounded-md shadow-md"
        style={{ width: "fit-content" }}
      >
        {/* Icon Section */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
            <img src={GetIcon()} alt="snackbar-icon" />
          </div>
        </div>

        {/* Text Section */}
        <div style={{ width: "fit-content" }}>
          <h3 className="text-lg font-semibold text-gray-900">
            {title || message}
          </h3>
          <p
            className={`${!title ? "text-lg" : "text-sm"} text-gray-600`}
            style={{ fontWeight: !title ? "600" : "500" }}
          >
            {title && message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentSelectSnackMessage;
