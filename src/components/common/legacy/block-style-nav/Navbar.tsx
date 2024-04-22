import Image from "next/image";

import LinkScopeIcon from "../../../public/logo/logo-icon-black.svg";
// import SideNavOverlay from "./navigation/SideNavOverlay";
// import LinkscopeMidNav from "./navigation/LinkscopeMidNav";

function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="flex justify-between items-center h-14 px-4 bg-white border-b">
          <div className="flex items-center gap-2">
            <Image src={LinkScopeIcon} alt="logo" className="h-6 w-auto" />
            <p className="font-extrabold text-xl text">SENIOR SYNERGY</p>
          </div>
        </div>

        {/* <LinkscopeMidNav /> */}
      </div>

      {/* <SideNavOverlay /> */}
    </>
  );
}

export default Navbar;
