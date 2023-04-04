import React from "react";
import DropdownButton from "./DropdownButton";
import logo from "../assets/logo.png";

interface NavBarProps {
  sortRepos: (sort: string) => void;
  filterRepos: (filter: string) => void;
  disableButton: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  sortRepos,
  filterRepos,
  disableButton,
}) => {
  return (
    <nav className="flex text-white bg-black p-6 justify-between sticky	top-0">
      <img className="h-8 self-center" src={logo} alt="logo" />
      <div className="flex">
        <DropdownButton
          buttonStyles="shadow bg-white w-28 rounded-full border border-gray-500 text-black p-2"
          buttonText="Sort"
          dropdownItems={[
            { label: "Stars", value: "stars" },
            { label: "Forks", value: "forks" },
            { label: "Help Wanted Issues", value: "help-wanted-issues" },
            { label: "Updated", value: "updated" },
          ]}
          onSelect={(option) => sortRepos(option)}
          disabled={disableButton}
        />
        <DropdownButton
          buttonStyles="shadow bg-black w-28 rounded-full border border-white-500 ml-4 p-2"
          buttonText="Filter"
          dropdownItems={[
            { label: "Ascending", value: "asc" },
            { label: "Descending", value: "desc" },
          ]}
          disabled={disableButton}
          onSelect={filterRepos}
        />
      </div>
    </nav>
  );
};

export default NavBar;
