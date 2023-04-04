import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface PaginationProps {
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={handlePrevPage}
        className="px-4 py-2 bg-black text-white rounded-l"
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>
      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-black text-white rounded-r"
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
