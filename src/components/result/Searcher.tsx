"use client";

import React, { useState } from "react";

import { useSearchParams } from "next/navigation";
import Button from "../common/Button";
import { useTranslations } from "next-intl";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Searcher() {
  const t_common = useTranslations("Common");
  const t_sorter = useTranslations("Sorter");
  const t_searcher = useTranslations("Searcher");

  const searchParams = useSearchParams();

  const previousSearchQuery = searchParams.get("query") ?? "";
  const previousSortOption = searchParams.get("sort") ?? "";

  const [searchQuery, setSearchQuery] = useState(previousSearchQuery);
  const [sortOption, setSortOption] = useState(previousSortOption);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const sortOptions = [
    {
      name: t_sorter("newer"),
      value: "D-A",
    },
    {
      name: t_sorter("older"),
      value: "D-D",
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
          <label className="relative">
            <input
              className={`pl-12 w-full h-12 px-4 rounded-lg
                        bg-white dark:bg-black
                        border focus:outline-none`}
              name="query"
              placeholder={t_searcher("placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <FaMagnifyingGlass className="fill-gray-500 absolute top-1/2 left-4 transform -translate-y-1/2" />
          </label>
        </div>

        <Button
          className="w-32"
          type="submit"
          disabled={searchQuery.length < 1 && !sortOption}
          primary
        >
          {t_common("apply")}
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <p className="font-medium">{t_sorter("sort-by")}:</p>
        <div className="flex flex-wrap gap-4">
          {sortOptions.map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                value={item.value}
                defaultChecked={item.value == previousSortOption}
                onChange={() => setSortOption(item.value)}
              />
              <p>{item.name}</p>
            </label>
          ))}
        </div>
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

export default Searcher;
