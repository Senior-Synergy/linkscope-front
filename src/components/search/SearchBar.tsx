import React from "react";
import Button from "../common/Button";

interface SearchBarProps {
  textInput: string;
  onTextInputChange: (input: string) => void;
}

function SearchBar({ textInput, onTextInputChange }: SearchBarProps) {
  function searchUrl() {
    // add logic for searching urls
  }

  return (
    <div
      className="flex gap-2 
                w-full p-2 
                bg-white border rounded-xl"
    >
      <div className="grow">
        <label>
          <input
            className={`w-full p-2 rounded-lg
                    border focus:outline-none focus:ring-1 focus:ring-primary-light 
                    bg-gray-100`}
            name="search-query"
            placeholder="Enter search terms..."
            value={textInput}
            onChange={(e) => onTextInputChange(e.target.value)}
          />
        </label>
      </div>

      <div className="w-32">
        <Button
          title="Search"
          onClick={searchUrl}
          disabled={textInput.length < 1}
          primary
        />
      </div>
    </div>
  );
}

export default SearchBar;
