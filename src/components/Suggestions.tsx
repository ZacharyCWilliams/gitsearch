import React from "react";

interface SuggestionsProps {
  suggestions: GithubProfile[];
  setInput: (value: string) => void;
  handleSubmit: (e: React.MouseEvent) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  setInput,
  handleSubmit,
}) => {
  return (
    <ul className="shadow xs:w-[241px] md:w-[564px]">
      {suggestions.slice(0, 5).map((suggestion: GithubProfile) => (
        <li
          className="flex p-4 xs:w-[350px] md:w-[564px] bg-white hover:bg-gray-100 transition-colors duration-100 ease-in"
          key={suggestion.id}
        >
          <button
            className="flex items-center pointer w-full"
            onClick={(e) => {
              setInput(suggestion.login);
              handleSubmit(e);
            }}
          >
            <img
              className="h-10 w-10 rounded-full mr-4"
              src={suggestion?.avatar_url}
              alt="logo"
            />
            <h1 className="text-sm">{suggestion.login}</h1>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
