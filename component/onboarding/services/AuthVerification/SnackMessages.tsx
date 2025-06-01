import AgentSelectSnackMessage, { SnackbarTypes } from "../../../dashboard/leads/AgentSelectSnackMessage";
import React from "react";

type SnackMessagesProps = {
  message: string;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  success?: boolean;
};

const SnackMessages: React.FC<SnackMessagesProps> = ({
  message,
  isVisible,
  setIsVisible,
  success = true,
}) => {
  return (
    <div>
      {/* Snack Message */}
      <AgentSelectSnackMessage
        isVisible={isVisible}
        hide={() => setIsVisible(false)}
        message={message}
        type={success ? SnackbarTypes.Success : SnackbarTypes.Error}
      />
    </div>
  );
};

export default SnackMessages;
