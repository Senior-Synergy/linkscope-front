import SideNavContent from "./SideNavContent";

function SideNav() {
  return (
    <div
      className={`hidden lg:block fixed z-10 mt-14 h-full w-60 overflow-auto
                bg-white border-r
                transform duration-500 ease-in-out
                transition-all`}
    >
      <SideNavContent />
    </div>
  );
}

export default SideNav;
