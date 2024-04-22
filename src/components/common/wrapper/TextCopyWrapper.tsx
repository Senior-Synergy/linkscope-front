"use client";

import React, { ReactNode } from "react";

interface TextCopyWrapperProps {
  text: string;
  children: ReactNode;
}

function TextCopyWrapper({ text, children }: TextCopyWrapperProps) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
    >
      {children}
    </button>
  );
}

export default TextCopyWrapper;
