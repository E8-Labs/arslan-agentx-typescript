import React from "react";
import Image from "next/image";

type SignUpFormProps = {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack?: () => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
}) => {
  const handleNextClick = () => {
    onNext();
  };

  const handleBackClick = () => {
    if (onBack) onBack();
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-4">
      {/* Header */}
      <div className="flex flex-row items-center justify-between w-full mb-4">
        <Image
          src="/assets/agentX.png"
          alt="AgentX Logo"
          height={40}
          width={140}
        />
        <div className="text-gray-500 text-sm">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-purple h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Form Content */}
      <div className="flex flex-col items-center justify-center w-full flex-grow">
        {/* You can insert dynamic form fields based on currentStep here */}
        <p className="text-lg font-semibold mb-2">
          This is a placeholder for step {currentStep}
        </p>
        <p className="text-gray-500 mb-6">
          Customize this section with your form fields.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row items-center justify-between w-full mt-6">
        {onBack && (
          <button
            onClick={handleBackClick}
            className="text-purple border border-purple rounded px-6 py-2 hover:bg-purple hover:text-white transition-colors duration-200"
          >
            Back
          </button>
        )}

        <button
          onClick={handleNextClick}
          className="bg-purple text-white rounded px-6 py-2 hover:bg-purple-dark transition-colors duration-200 ml-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
