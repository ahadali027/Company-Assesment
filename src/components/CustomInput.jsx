import React, { useId, useState } from "react";
import { cn } from "../utils/cn";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

// Sample suburb data
const suburbData = [
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Hobart", "Darwin", "Canberra",
  "Newcastle", "Wollongong", "Gold Coast", "Sunshine Coast", "Geelong", "Townsville", "Cairns"
];

function CustomInput({
  label,
  inputProps: { type = "text", className, ...ipProps } = {},
  rtl,
}) {
  const uniqueId = useId();
  const isRadio = type === "radio";

  return (
    <div className={`flex items-center gap-2 ${!isRadio ? "w-full" : ""}`}>
      {isRadio ? (
        <>
          <input
            id={uniqueId}
            type={type}
            className={`${className || ""} ${
              isRadio ? "w-4 h-4" : ""
            }`}
            {...ipProps}
          />
          <label htmlFor={uniqueId} className="text-sm text-gray-700">{label}</label>
        </>
      ) : (
        <>
          <label htmlFor={uniqueId} className="text-sm text-gray-700 min-w-[120px]">{label}</label>
          <input
            id={uniqueId}
            type={type}
            className={`${className || ""} ${
              isRadio ? "w-4 h-4" : "w-full"
            }`}
            {...ipProps}
          />
        </>
      )}
    </div>
  );
}

export const SuburbInput = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSuburb, setSelectedSuburb] = useState(value || "");

  const filteredSuburbs = suburbData.filter(suburb =>
    suburb.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSuburbSelect = (suburb) => {
    setSelectedSuburb(suburb);
    onChange({ target: { value: suburb } });
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex items-center gap-2 min-w-[120px]">
        <label className="text-sm text-gray-700">Suburb</label>
        <span className="text-sm text-gray-500">(Type few characters and select)</span>
      </div>
      <div className="relative w-full">
        <div
          className="flex items-center justify-between w-full border focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 shadow-sm text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedSuburb || "Select suburb"}</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        </div>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
            <div className="p-2 border-b">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Search suburb..."
                  onClick={(e) => e.stopPropagation()}
                />
                <MagnifyingGlassIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredSuburbs.length > 0 ? (
                filteredSuburbs.map((suburb) => (
                  <div
                    key={suburb}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuburbSelect(suburb)}
                  >
                    {suburb}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No suburbs found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
