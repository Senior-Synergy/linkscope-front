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
                  w-full px-6 py-4 rounded-xl
                  ${isCurrentPath ? "bg-primary-500" : ""}`}
      >
        <div className="flex items-center gap-4">
          <IconContext.Provider
            value={{
              className: `${
                currentPath === route ? "fill-white" : "fill-black group-hover/button:fill-gray-700"
              } h-6 w-auto`,
            }}
          >
            {icon}
          </IconContext.Provider>

          <p
            className={`font-bold text-lg ${
              isCurrentPath ? "text-white" : "text-black group-hover/button:text-gray-700"
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
