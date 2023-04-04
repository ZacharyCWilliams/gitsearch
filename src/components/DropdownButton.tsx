import { useState, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownButtonProps {
  buttonStyles: string;
  buttonText: string;
  dropdownItems: DropdownItem[];
  onSelect: (value: string) => void;
  disabled: boolean;
}

export default function DropdownButton({
  buttonStyles,
  buttonText,
  dropdownItems,
  onSelect,
  disabled,
}: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className="relative font-sans font-medium font-custom-sans"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonStyles}
        disabled={disabled}
      >
        {buttonText}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white shadow rounded mt-2">
          {dropdownItems.map((option: DropdownItem) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="text-black w-full px-4 py-2 text-left hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
