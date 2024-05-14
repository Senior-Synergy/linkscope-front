"use client";

import TabSelector from "../common/TabSelector";

function ResultInfo() {
  return (
    <div className="h-12">
      <TabSelector
        itemList={[
          { title: "Scan Result", value: "test-1" },
          { title: "URL Features", value: "test-2" },
        ]}
        currentValue={"test-1"}
        onSelect={() => console.log()}
      />
    </div>
  );
}

export default ResultInfo;
