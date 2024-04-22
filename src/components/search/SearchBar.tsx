import React, { useState } from "react";
import Button from "../common/Button";

interface SearchBarProps {
  textInput: string;
  onTextInputChange: (input: string) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function SearchBar({ textInput, onTextInputChange }: SearchBarProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function searchUrl() {
    // add logic for searching urls
  }

  const sortOptions = [
    {
      name: "Older",
      value: "D-D",
    },
    {
      name: "Newer",
      value: "D-A",
    },
    {
      name: "A-Z",
      value: "A-A",
    },
    {
      name: "Z-A",
      value: "A-D",
    },
  ];

  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <div className="grow">
          <label>
            <input
              className={`w-full h-12 p-2 rounded-lg
                      border focus:outline-none
                      bg-white`}
              name="query"
              placeholder="Enter search terms..."
              value={textInput}
              onChange={(e) => onTextInputChange(e.target.value)}
            />
          </label>
        </div>

        <Button
          className="w-32"
          type="submit"
          disabled={textInput.length < 1}
          primary
        >
          Search
        </Button>
      </div>

      <div className="flex gap-4">
        <p className="font-medium">Sort By:</p>
        {sortOptions.map((item, index) => (
          <label key={index} className="flex items-center gap-2">
            <input type="radio" name="sort" value={item.value} />
            <p>{item.name}</p>
          </label>
        ))}
      </div>

      {/* <div className="p-4 bg-gray-100 rounded-lg">
        <div className="flex flex-row gap-4">
          <label className="w-1/2">
            <p className="text-sm text-gray-500">Date Start</p>
            <input
              className={`w-full h-12 p-2 rounded-lg
                      border focus:outline-none
                      bg-white`}
              name="sd"
              type="date"
            />
          </label>
          <label className="w-1/2">
            <p className="text-sm text-gray-500">Date End</p>
            <input
              className={`w-full h-12 p-2 rounded-lg
                      border focus:outline-none
                      bg-white`}
              name="ed"
              type="date"
            />
          </label>
        </div>
      </div> */}
    </form>
  );
}

export default SearchBar;
