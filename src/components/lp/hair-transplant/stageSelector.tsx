import { useState } from "react";

export const StageSelector = () => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  return (
    <div className="space-y-3 py-2">
      <label className="block mb-2 font-medium text-gray-700">Select your baldness level</label>

      <div className="flex gap-2 md:gap-4 lg:gap-8 xl:gap-12">
        {[1, 2, 3, 4, 5, 6, 7].map((stage) => (
          <label
            key={stage}
            className={`flex items-center justify-center w-10 h-10 rounded-full border cursor-pointer
              ${
                selectedStage === stage ? "bg-primary text-white" : "border-gray-300 text-gray-700"
              }`}
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
