import { ReactNode } from "react";

interface MainWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function MainWrapper({ children, className }: Readonly<MainWrapperProps>) {
  return (
    <div className="w-full max-w-5xl m-auto">
      <div className={`p-4 md:p-8 w-full ${className}`}>{children}</div>
    </div>
  );
}

export default MainWrapper;
