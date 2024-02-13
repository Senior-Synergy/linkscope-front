import React from "react";

interface SearchBarProps {
  textInput: string;
  onTextInputChange: (input: string) => void;
}

function SearchBar({ textInput, onTextInputChange }: SearchBarProps) {
  return (
    <div
      className="flex gap-4
              w-full p-4
              rounded-lg border bg-white"
    >
      <label className="grow">
        <input
          className={`w-full p-2 rounded-lg
                    border focus:outline-none focus:ring-1 focus:ring-primary-light 
                    bg-gray-50`}
          name="search-query"
          placeholder="Enter search terms..."
          value={textInput}
          onChange={(e) => onTextInputChange(e.target.value)}
        />
      </label>
      <button
        className={`w-32 transition-all border rounded-lg text-white ${
          textInput
            ? "bg-primary hover:bg-primary-dark"
            : "pointer-events-none bg-deactive"
        }`}
      >
        Search
      </button>
      <button
        className={`h-10 w-10 transition-all border rounded-lg text-white`}
      ></button>
    </div>
  );
}

export default SearchBar;
