import React from 'react';

interface InputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}<span className='text-red-400'>*</span></label>
      <input
        id={id}
      
        type={type}
        required
        className="w-full rounded-lg border-gray-200 bg-white  dark:bg-[#000000] border border-[#D0D5DD75] outline-none p-4 text-sm"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
