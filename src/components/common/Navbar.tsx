import Image from "next/image";
import { useTranslations } from "next-intl";

import LinkScopeIcon from "../../../public/logo/logo-icon-primary.svg";
import Link from "next/link";
import DarkmodeSwitch from "./DarkmodeSwitch";
import LocaleSwitcher from "./LocaleSwitcher";
import SideNavOverlay from "./navigation/SideNavOverlay";

function Navbar() {
  const t = useTranslations("Common");

  const NavItem = [
    {
      name: t("scan"),
      route: "/",
    },
    {
      name: t("results"),
      route: "/result",
    },
    {
      name: t("urls"),
      route: "/url",
    },
    {
      name: t("docs"),
      route: "/docs",
    },
    // {
    //   name: "dev",
    //   route: "/develop",
    // },
  ];

  return (
    <>
      <div className="sticky top-0 z-10">
        <div
          className="flex items-center justify-between h-16
                      p-4 md:px-8 gap-10 w-full bg-transparent backdrop-blur-2xl border border-t-0 border-x-0"
        >
          <Link href="/scan">
            <div className="flex items-center gap-2">
              <Image
                src={LinkScopeIcon}
                alt="logo"
                className="h-6 w-auto mb-[2px]"
                priority
              />
              <p className="font-extrabold text-2xl hidden md:block">
                LINKSCOPE
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-4 mr-4">
              {NavItem.map((item, index) => (
                <Link key={index} href={item.route}>
                  <div className="flex items-center justify-center h-8 rounded hover:bg-gray-200 hover:bg-opacity-50 transition-colors">
                    <p className="px-2">{item.name}</p>
                  </div>
                </Link>
              ))}
            </nav>

            <div className="ml-4">
              <DarkmodeSwitch />
            </div>

            <div className="ml-2">
              <LocaleSwitcher />
            </div>
            {/* <button
                disabled
                className="rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaGear className="m-2" />
              </button> */}
          </div>
        </div>
        {/* <div className="h-4 w-full bg-gradient-to-b from-white to-transparent"></div> */}
      </div>

      <SideNavOverlay navItems={NavItem} />
    </>
  );
}

export default Navbar;
