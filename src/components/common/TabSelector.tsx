import React from "react";

interface TabSelectorProps {
  itemList: { title: string; value: any }[];
  currentItem: any;
  onSelect: (value: any) => void;
}

interface TabSelectorItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

function TabSelector({ itemList, currentItem, onSelect }: TabSelectorProps) {
  return (
    <div className="flex w-full h-full bg-white rounded-lg divide-x border overflow-hidden">
      {itemList.map((item, index) => (
        <TabSelectorItem
          key={index}
          title={item.title}
          isSelected={item.value === currentItem}
          onClick={() => onSelect(item.value)}
        />
      ))}
    </div>
  );
}

function TabSelectorItem({ title, isSelected, onClick }: TabSelectorItemProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-auto text-center p-2 ${
        isSelected
          ? "bg-primary hover:bg-primary-600 text-white"
          : "bg-white hover:bg-gray-200 text-black"
      }`}
    >
      <p className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 text-center">{title}</p>
    </button>
  );
}

export default TabSelector;
