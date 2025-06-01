import React from "react";

type UserTypeProps = {
  userType: string;
  selected: boolean;
  onSelect: () => void;
};

const UserType: React.FC<UserTypeProps> = ({ userType, selected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`w-full p-4 border rounded-lg text-left ${
        selected ? "border-purple bg-purple/10" : "border-gray-300"
      } hover:border-purple transition`}
    >
      <div className="text-lg font-medium">{userType}</div>
    </button>
  );
};

export default UserType;
