import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const portalRoot = document.getElementById("portal-root") as HTMLElement;

  return createPortal(children, portalRoot);
};

export default Portal;
