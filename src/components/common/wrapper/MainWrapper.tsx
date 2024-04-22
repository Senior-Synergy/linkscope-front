import { ReactNode } from "react";

function MainWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-5xl m-auto">
      <div className="p-4 md:p-8 w-full">
        {children}
      </div>
    </div>
  );
}

export default MainWrapper;
