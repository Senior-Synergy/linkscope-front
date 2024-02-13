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
                shadow-lg
                bg-white
                "
      >
        {/* Title */}
        <div className="flex items-center md:pl-2">
          <div className="flex flex-col flex-shrink-0">
            <Image
              src={"/logo/logo-black.svg"}
              alt="logo"
              width={128}
              height={32}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex h-full">
          {NavbarItem.map((item, index) => (
            <Link key={index} href={item.route}>
              <div
                className="flex items-center justify-center 
                        w-28 h-full
                        text-black
                        border-y-4 border-transparent hover:border-b-primary hover:bg-background hover:bg-opacity-50
                        transition-all"
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>

      <Sidebar navItems={NavbarItem} />
    </>
  );
}

export default Navbar;
