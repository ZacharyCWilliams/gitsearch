import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

interface SearchProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Search: React.FC<SearchProps> = ({
  input,
  setInput,
  handleSubmit,
}) => {
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="py-2 px-4 flex items-center sm:w-[350px] md:w-[564px] min-h-[50px] shadow bg-white">
        <div className="mr-2">
          <GitHubIcon />
        </div>
        <input
          type="text"
          name="repoSearch"
          placeholder="Enter Github username"
          className="outline-none	shadow-[inset 0px -1px 0px #E4E6EB] sm:w-[350px] md:w-[564px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <button
          type="submit"
          className="text-black flex items-center justify-center"
        >
          <ArrowCircleRightIcon
            style={{
              fontSize: "30px",
            }}
          />
        </button>
      </div>
    </form>
  );
};

export default Search;
