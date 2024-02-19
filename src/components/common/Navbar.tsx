import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo/logo-with-icon-black.svg";

function Navbar() {
  const NavbarItem = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Scan",
      route: "/scan",
    },
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Develop",
      route: "/develop",
    },
  ];

  return (
    <>
      <nav
        className="sticky top-0 
                flex justify-between items-center 
                px-4 md:px-8 h-14 z-10
                bg-white
                border-b
                "
      >
        {/* Title */}
        <div className="flex items-center md:pl-2">
          <div className="flex flex-col flex-shrink-0">
            <Image src={logo} alt="logo" width={200} height={32} />
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-2 h-full">
          {NavbarItem.map((item, index) => (
            <Link key={index} href={item.route}>
              <div
                className="flex items-center justify-center 
                        w-28 h-10 rounded
                        font-medium text-sm
                        border-y-4 border-transparent
                        hover:bg-primary hover:text-white
                        transition-all"
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="flex w-full justify-center bg-white divide-x-2 border-y-4">
          {NavbarItem.map((item, index) => (
            <Link key={index} href={item.route}>
              <div
                className="flex items-center justify-center 
                        w-28 h-8
                        font-bold text-gray-900
                        border-y-4 border-transparent hover:bg-primary hover:text-white
                        transition-all"
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div> */}
      </nav>

      {/* <Sidebar navItems={NavbarItem} /> */}
    </>
  );
}

export default Navbar;
