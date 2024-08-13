import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectDemoProps {
  label: string;
  options: { value: string; label: string }[];
  placeholder: string;

   onChange:(value: string) => void; 
}

const SelectDemo: React.FC<SelectDemoProps> = ({ label, options, placeholder ,onChange}) => {
  const handleValueChange = (newValue: string) => {
    onChange(newValue);  // Update external form state or local state
  };
  return ( 
    <Select   onValueChange={handleValueChange} >
      <SelectTrigger
        className="w-full rounded-lg  border-gray-200  hover:outline-none focus:ring-0 bg-white dark:bg-[#000000] border border-[#D0D5DD75] outline-none p-4 text-sm"
      
      >
        <SelectValue    placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-[#000000]">
        <SelectGroup >
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDemo;
