"use client";

import React, { Suspense } from "react";
import LoginComponent from "@/component/auth/LoginComponent";

interface PageProps {
  length?: number;
  onComplete?: () => void;
}

const Page: React.FC<PageProps> = ({ length = 6, onComplete }) => {
  return (
    <Suspense>
      <LoginComponent onComplete={onComplete} length={length} />
    </Suspense>
  );
};

export default Page;
