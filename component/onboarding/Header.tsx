import React from "react";
import Image from "next/image";

type HeaderProps = {
  showBack?: boolean;
  onBackClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ showBack = false, onBackClick }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4 py-2">
      {/* Logo */}
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/assets/agentX.png"
          alt="AgentX Logo"
          height={30}
          width={120}
        />
      </div>

      {/* Optional Back Button */}
      {showBack && (
        <button
          onClick={onBackClick}
          className="text-purple border border-purple rounded px-4 py-1 hover:bg-purple hover:text-white transition-colors duration-200"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default Header;
