import SideNavContent from "./SideNavContent";

function SideNavFixed() {
  return (
    <div
      className={`hidden lg:block fixed z-10  h-full w-60 overflow-auto
                bg-white border-x
                transform duration-500 ease-in-out
                transition-all`}
    >
      <SideNavContent />
    </div>
  );
}

export default SideNavFixed;
