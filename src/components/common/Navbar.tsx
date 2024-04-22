import Image from "next/image";

import LinkScopeIcon from "../../../public/logo/logo-icon-black.svg";
import SideNavOverlay from "./navigation/SideNavOverlay";
import LinkscopeMidNav from "./navigation/LinkscopeMidNav";
import Link from "next/link";
import { FaGear } from "react-icons/fa6";
import DarkmodeSwitch from "./DarkmodeSwitch";

function Navbar() {
  const NavItem = [
    {
      name: "scan",
      route: "/scan",
    },
    {
      name: "search",
      route: "/search",
    },
    // {
    //   name: "docs",
    //   route: "/docs",
    // },
    // {
    //   name: "dev",
    //   route: "/develop",
    // },
  ];

  return (
    <>
      <div className="sticky top-0 z-10">
        <div
          className="flex items-center justify-center
                    bg-transparent bg-opacity-75 backdrop-blur"
        >
          <div
            className="flex items-center justify-between
                      p-4 md:p-8 gap-10 w-full max-w-5xl"
          >
            <div className="flex items-center gap-2">
              <Image
                src={LinkScopeIcon}
                alt="logo"
                className="h-6 w-auto"
                priority
              />
              <p className="font-extrabold text-xl text">LINKSCOPE</p>
            </div>

            <div className="flex items-center">
              <nav className="flex items-center space-x-2 mr-4">
                {NavItem.map((item, index) => (
                  <Link key={index} href={item.route}>
                    <div className="flex items-center justify-center h-8 rounded hover:bg-gray-200 hover:bg-opacity-50 transition-colors">
                      <p className="px-2">{item.name}</p>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* <button
                disabled
                className="rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaGear className="m-2" />
              </button> */}
            </div>
          </div>
        </div>
        {/* <div className="h-4 w-full bg-gradient-to-b from-white to-transparent"></div> */}
      </div>

      {/* <SideNavOverlay /> */}
    </>
  );
}

export default Navbar;
