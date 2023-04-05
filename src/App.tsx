import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { getProfileSuggestions, getProfile } from "./api/api";
import { applyFilters } from "./utils/profiles";
import Repository from "./components/Repository";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Suggestions from "./components/Suggestions";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [input, setInput] = useState("");
  const [unfilteredRepos, setUnfilteredRepos] = useState([]);
  // filtered repos
  const [profileRepos, setProfileRepos] = useState<GithubRepository[]>([]);
  // pagination
  const [page, setPage] = useState(1);
  const [submittedInput, setSubmittedInput] = useState("");
  // autocomplete
  const [suggestions, setSuggestions] = useState<GithubProfile[]>([]);
  const debouncedValue = useDebounce(input, 300);
  // filtering/sorting
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("all");
  // error handling
  const [error, setError] = useState<Error | null>(null);

  // error handling
  const clearError = () => {
    setError(null);
  };

  const handleError = (error: Error) => {
    console.error("Error fetching profile data:", error);
    setError(error);
  };

  // pagination
  const handlePrevPage = useCallback(() => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  }, [page]);

  const handleNextPage = useCallback(
    () => setPage((prevPage) => prevPage + 1),
    []
  );

  // form submissions
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim()) {
        try {
          const profileData = await getProfile(
            input.trim(),
            page,
            sort,
            filter
          );
          setUnfilteredRepos(profileData);
          setSubmittedInput(input.trim());
          setInput("");
          clearError();
        } catch (error) {
          if (error instanceof Error) {
            handleError(error);
          } else {
            handleError(new Error("An unknown error occurred."));
          }
        }
      }
    },
    [input, page, sort, filter]
  );

  const paginationUpdate = useCallback(async () => {
    const profileRepoData = await getProfile(
      submittedInput,
      page,
      sort,
      filter
    );

    const filteredRepos = applyFilters(profileRepoData, sort, filter);
    
    setUnfilteredRepos(profileRepoData);
    setProfileRepos(filteredRepos);
  }, [submittedInput, page, sort, filter]);

  useEffect(() => {
    const fetchProfileSuggestions = async () => {
      const profileSuggestions = await getProfileSuggestions(debouncedValue);
      setSuggestions(profileSuggestions);
    }

    fetchProfileSuggestions();
  }, [debouncedValue]);

  useEffect(() => {
    if (submittedInput) paginationUpdate();
  }, [paginationUpdate, submittedInput, page, sort, filter]);

  return (
    <div className="min-h-screen">
      <NavBar
        sortRepos={setSort}
        filterRepos={setFilter}
        disableButton={!profileRepos.length}
      />
      <main className="flex bg-main-section min-h-screen bg-gradient-purple">
        <div className="flex flex-col items-center justify-center w-screen p-4">
          <Header addMargin={!!profileRepos.length || !!suggestions.length} />
          <section className="mt-8">
            <Search
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
            />
            {error && <ErrorMessage onClose={clearError} duration={3000} />}
            <Suggestions
              suggestions={suggestions}
              setInput={setInput}
              handleSubmit={handleSubmit}
            />
            {profileRepos.length > 0 && (
              <Pagination
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            )}
          </section>
          <section className="max-w-[80%] flex flex-start">
            <ul className="flex items-center flex-wrap justify-center">
              {profileRepos.map((repo: GithubRepository) => (
                <Repository key={repo.id} repo={repo} />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
