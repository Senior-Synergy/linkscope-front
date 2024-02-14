import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

function Navbar() {
  const NavbarItem = [
    {
      name: "Home",
      route: "/",
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
                shadow-lg
                bg-primary-dark
                border-b-4 border-white
                "
      >
        {/* Title */}
        <div className="flex items-center md:pl-2">
          <div className="flex flex-col flex-shrink-0">
            <Image
              src={"/logo/logo-white.svg"}
              alt="logo"
              width={128}
              height={32}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4 h-full">
          {NavbarItem.map((item, index) => (
            <Link key={index} href={item.route}>
              <div
                className="flex items-center justify-center 
                        w-28 h-10 rounded
                        text-white font-bold
                        border-y-4 border-transparent
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
