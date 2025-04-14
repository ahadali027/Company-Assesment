import { SearchIcon } from "lucide-react";
import * as React from "react";


const SUBURBS = [
  { value: "bondi", label: "Bondi" },
  { value: "manly", label: "Manly" },
  { value: "chatswood", label: "Chatswood" },
  { value: "parramatta", label: "Parramatta" },
  { value: "cronulla", label: "Cronulla" },
  { value: "newtown", label: "Newtown" },
  { value: "surry-hills", label: "Surry Hills" },
  { value: "paddington", label: "Paddington" },
];

const STATES = [
  { value: "nsw", label: "New South Wales" },
  { value: "vic", label: "Victoria" },
  { value: "qld", label: "Queensland" },
  { value: "wa", label: "Western Australia" },
  { value: "sa", label: "South Australia" },
  { value: "tas", label: "Tasmania" },
  { value: "act", label: "Australian Capital Territory" },
  { value: "nt", label: "Northern Territory" },
];

function SearchableDropdown({
  label,
  placeholder = "Please enter 3 or more characters",
  minSearchLength = 3,
  options = [],
  onSearch,
  onChange,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const dropdownRef = React.useRef(null);


  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (onSearch && value.length >= minSearchLength) {
      onSearch(value);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center gap-2 sm:gap-4" ref={dropdownRef}>
      <label className="block text-gray-700 text-sm sm:text-base font-medium">
        {label}
      </label>
      <div className="relative w-full">
        <div
          className="border border-gray-300 rounded-md w-full cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex items-center justify-between p-2">
            <span className="text-sm sm:text-base text-gray-500">{searchValue}</span>
            <button
              type="button"
              className="text-gray-400"
              onClick={toggleDropdown}
            >
              <svg
                className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            <div className="relative p-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-1.5 sm:py-2 px-2 sm:px-3 pr-8 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                value={searchValue}
                onChange={handleInputChange}
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
            </div>

            <div className="max-h-60 overflow-auto p-2 bg-gray-50">
              {searchValue.length < minSearchLength ? (
                <div className="py-2 px-2 sm:px-3 text-sm sm:text-base text-gray-500">{placeholder}</div>
              ) : options.length > 0 ? (
                options.map((option) => (
                  <div
                    key={option.value}
                    className="py-2 px-2 sm:px-3 hover:bg-gray-100 cursor-pointer rounded text-sm sm:text-base"
                    onClick={() => {
                      setSearchValue(option.label);
                      if (onChange) onChange(option.value);
                      setIsOpen(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="py-2 px-2 sm:px-3 text-sm sm:text-base text-gray-500">No results found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchableDropdownExample() {
  const [filteredSuburbs, setFilteredSuburbs] = React.useState([]);
  const [filteredStates, setFilteredStates] = React.useState([]);

  const handleSuburbSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filtered = SUBURBS.filter((suburb) =>
        suburb.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuburbs(filtered);
    } else {
      setFilteredSuburbs([]);
    }
  };

  const handleStateSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filtered = STATES.filter((state) =>
        state.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStates(filtered);
    } else {
      setFilteredStates([]);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-md mx-auto">
        <SearchableDropdown
          label="Suburb"
          minSearchLength={3}
          options={filteredSuburbs}
          onSearch={handleSuburbSearch}
          onChange={(value) => console.log("Selected suburb:", value)}
        />
      </div>
    </div>
  );
}
