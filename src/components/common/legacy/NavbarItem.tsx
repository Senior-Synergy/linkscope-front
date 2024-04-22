import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { IconContext } from "react-icons";

interface NavbarItemProps {
  name: string;
  route: string;
  icon: ReactNode;
}

function NavbarItem({ name, route, icon }: NavbarItemProps) {
  const currentPath = extractFirstDirectory(usePathname());
  const isCurrentPath = currentPath === route;

  function extractFirstDirectory(route: string): string {
    const parts = route.replace(/^\/|\/$/g, "").split("/");
    return "/" + parts[0];
  }

  return (
    <Link href={route}>
      <div
        className={`group/button
                  flex items-center justify-center w-40 h-14 border-y-4 border-y-transparent
                  ${isCurrentPath ? "border-b-white" : ""}`}
      >
        <div className="flex items-center gap-4">
          <IconContext.Provider
            value={{
              className: `fill-white h-5 w-5 w-auto transition-colors`,
            }}
          >
            {icon}
          </IconContext.Provider>

          <p
            className={`font-bold transition-colors text-white ${
              isCurrentPath ? "" : "group-hover/button:text-gray-100"
            }`}
          >
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default NavbarItem;

