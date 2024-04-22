"use client";

interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

function Switch({ isOn, onToggle }: SwitchProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex p-1 w-10 rounded-full transition-colors ${
        isOn ? "bg-primary" : "bg-gray-200"
      }`}
    >
      <div
        className={`h-4 w-4 bg-white rounded-full transition-transform ${
          isOn ? "translate-x-full" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default Switch;
