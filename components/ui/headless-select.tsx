import React, { useState, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface AnimatedCountryProps {
  onSelectChange: (selectedValue: string) => void;
}

const AnimatedCountry: React.FC<AnimatedCountryProps> = ({ onSelectChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("https://sandbox.hivvy.app/api/countries");
        if (!response.ok) {
          throw new Error("Failed to fetch options");
        }
        const data = await response.json();
        const formattedOptions: Option[] = data.data.map(
          (item: { name: string; id: number }) => ({
            label: item.name,
            value: item.id.toString(),
          })
        );
        setOptions(formattedOptions);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSelectChange(option.value); // Call the onSelectChange prop with the selected value
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="relative inline-block text-left ">

<label >Country<span className='text-red-400'>*</span></label>
      <div
        onClick={toggleDropdown}
        className={`inline-flex justify-between w-full text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-transform duration-300  border-gray-200 ]  border gap-2 py-4 px-3 bg-white  dark:bg-[#000000]  dark:text-white ${
          isOpen ? "transform rounded-t-xl " : "rounded-xl"
        }`}
      >
        <div className="flex items-center gap-2 bg-py-3">
          <svg
            width="18"
            height="18"
            className="stroke-[#292D328A] dark:stroke-white"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 4.5L10.3028 4.10557C9.964 3.428 9.27148 3 8.51393 3H3.75V15C3.75 15.4142 4.08579 15.75 4.5 15.75C4.91421 15.75 5.25 15.4142 5.25 15V10.5H9L9.75 12H13C14.1046 12 15 11.1046 15 10V6.5C15 5.39543 14.1046 4.5 13 4.5H10.5ZM13.5 10.5H10.5C10.0404 9.5807 9.10076 9 8.07295 9H5.25V4.5H9C9.45965 5.4193 10.3992 6 11.4271 6H13.5V10.5Z"
              fill="black"
              fillOpacity="0.54"
            />
          </svg>

          <button type="button" className="text-sm font-satoshi font-medium">
            {selectedOption || "Country"}
          </button>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-5 h-5 ml-2 ${
            isOpen ? "transform rotate-180" : "-mr-1"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div
        className={`origin-top-right w-full shadow-lg  max-h-44  overflow-y-auto  bg-white dark:bg-[#000000] sticky top-0   border-gray-200 dark:text-white ring-1 ring-black ring-opacity-5 transition-all ${
          isOpen ? "scale-y-100 opacity-100 rounded-b-xl b" : "scale-y-0 opacity-0"
        }`}
      >
        {isOpen && (
          <div className="py-1 mx-2">
            <div className="flex cursor-pointer w-full   my-2 border px-4 gap-2 items-center dark:bg-[#232323] bg-[#F5F5F5] py-2  rounded-lg">
              <svg
                width="20"
                height="21"
                className="stroke-[#292D328A] dark:stroke-white"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1665 17.1667C13.3086 17.1667 16.6665 13.8088 16.6665 9.66669C16.6665 5.52455 13.3086 2.16669 9.1665 2.16669C5.02437 2.16669 1.6665 5.52455 1.6665 9.66669C1.6665 13.8088 5.02437 17.1667 9.1665 17.1667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.7755 17.7407C16.2172 19.074 17.2255 19.2073 18.0005 18.0407C18.7088 16.974 18.2422 16.099 16.9588 16.099C16.0088 16.0907 15.4755 16.8323 15.7755 17.7407Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className="outline-none w-full border-none bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search country..."
                required // Add the required attribute here
              />
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {filteredOptions.map((option, index) => (
                <a
                  href="#"
                  key={index}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-klassy-black hover:-text-white"
                  role="menuitem"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedCountry;
