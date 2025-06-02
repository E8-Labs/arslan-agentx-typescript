import React, { Component, ReactNode, ErrorInfo } from "react";

// Define props and state types
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Caught an error:", error, errorInfo);
    // You can send this error to an external logging service (e.g., Sentry, LogRocket)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center h-[100svh] w-full">
          <h1 className="text-2xl font-bold">Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
