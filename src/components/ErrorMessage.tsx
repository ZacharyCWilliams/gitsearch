import React, { useEffect } from "react";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

interface ErrorMessageProps {
  onClose: () => void;
  duration?: number;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose, duration]);

  return (
    <div className="sm:w-[350px] md:w-[564px] min-h-[50px] bg-[#feedee] mt-4 border border-red-500 flex items-center justify-center">
      <div className="flex items-center justify-center text-red-500">
        <button onClick={onClose}>
          <ErrorOutlineRoundedIcon />
        </button>
        <p className="ml-2">
          Sorry. I don't think that profile exists
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
