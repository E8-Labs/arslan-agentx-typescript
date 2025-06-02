import React from "react";
import Image from "next/image";

const Congrats: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center py-10 gap-6">
      <Image
        src="/assets/congrats.png"
        height={140}
        width={140}
        alt="Congratulations"
      />
      <div className="text-center text-2xl font-semibold">
        Congratulations!
      </div>
      <div className="text-center text-gray-500">
        Your setup is complete. You can now start using the platform and explore all its features.
      </div>
    </div>
  );
};

export default Congrats;
