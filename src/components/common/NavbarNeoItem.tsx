import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { IconContext } from "react-icons";

interface NavbarNeoItemProps {
  name: string;
  route: string;
  icon: ReactNode;
}

function NavbarNeoItem({ name, route, icon }: NavbarNeoItemProps) {
  const currentPath = extractFirstDirectory(usePathname());
  const isCurrentPath = currentPath === route;

  function extractFirstDirectory(route: string): string {
    const parts = route.replace(/^\/|\/$/g, "").split("/");
    return "/" + parts[0];
  }

  return (
    <Link href={route}>
      <div
        className={`group/button flex justify-center items-center border-y-4 w-32 h-14 transition-all
                  ${isCurrentPath ? " border-b-primary border-t-transparent" : "border-transparent hover:border-b-gray-300"}`}
      >
        <div className="flex items-center gap-4">
          {icon}

          <p className={`font-bold`}>{name}</p>
        </div>
      </div>
    </Link>
  );
}

export default NavbarNeoItem;
