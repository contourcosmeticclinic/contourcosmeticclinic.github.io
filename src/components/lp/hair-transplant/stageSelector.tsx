import { useState } from "react";

export const StageSelector = () => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  return (
    <div className="space-y-3 py-2">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        Select your baldness level
      </label>

      <div className="flex gap-7">
        {[1, 2, 3, 4, 5, 6, 7].map((stage) => (
          <label
            key={stage}
            className={`flex items-center justify-center w-10 h-10 rounded-full border cursor-pointer
              ${selectedStage === stage ? "bg-primary text-white" : "border-primary text-primary"}`}
          >
            <input
              type="radio"
              name="stage"
              value={stage}
              checked={selectedStage === stage}
              onChange={() => setSelectedStage(stage)}
              className="hidden"
            />
            {stage}
          </label>
        ))}
      </div>
    </div>
  );
};

export const labelClassName = "block text-xs font-medium text-gray-700 mb-1";
