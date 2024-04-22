import {
  FaBook,
  FaCrosshairs,
  FaHouse,
  FaInbox,
  FaMagnifyingGlass,
} from "react-icons/fa6";

export const MainNavItems = [
  {
    name: "Home",
    route: "/",
    icon: FaBook,
  },
  {
    name: "About",
    route: "/about",
    icon: FaInbox,
  },
];

export const OverlayNavItems = [
  {
    name: "Home",
    route: "/",
    icon: FaHouse,
  },
  {
    name: "LINKSCOPE",
    route: "/linkscope",
    icon: FaCrosshairs,
  },
  {
    name: "About",
    route: "/about",
    icon: FaInbox,
  },
];

export const LinkNavItems = [
  {
    name: "Scan",
    route: "/linkscope",
    icon: FaCrosshairs,
  },
  {
    name: "Search",
    route: "/linkscope/search",
    icon: FaMagnifyingGlass,
  },
  {
    name: "Docs",
    route: "/linkscope/docs",
    icon: FaBook,
  },
];
