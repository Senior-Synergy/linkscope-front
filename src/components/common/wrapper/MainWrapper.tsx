import { ReactNode } from "react";

interface MainWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function MainWrapper({ children, className }: Readonly<MainWrapperProps>) {
  return (
    <div className="w-full m-auto max-w-5xl">
      <div className={`px-4 py-6 md:p-8 w-full ${className}`}>{children}</div>
    </div>
  );
}

export default MainWrapper;
