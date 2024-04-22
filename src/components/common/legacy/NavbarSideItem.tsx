import { extractDirectory } from "@/utils/directory";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavbarSideItemProps {
  name: string;
  route: string;
  Icon: IconType;
}

function NavbarSideItem({ name, route, Icon }: NavbarSideItemProps) {
  const currentPath = extractDirectory(usePathname(), 0);
  const isCurrentPath = currentPath === route;

  return (
    <Link href={route}>
      <div
        className={`group/button
                  flex h-14 p-4 rounded-lg
                  ${isCurrentPath ? "bg-primary-700" : ""}`}
      >
        <div className="flex items-center gap-4">
          <Icon
            className={`h-6 w-auto transition-colors 
                      ${
                        currentPath === route
                          ? "fill-white"
                          : "fill-white group-hover/button:fill-gray-300"
                      } `}
          />

          <p
            className={`font-bold text-lg text-white transition-colors ${
              isCurrentPath ? "" : "group-hover/button:text-gray-300"
            }`}
          >
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default NavbarSideItem;
