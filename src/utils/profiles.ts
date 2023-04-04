export const applyFilters = (
  repos: GithubRepository[],
  sort: string,
  filter: string
): GithubRepository[] => {
  let sortedRepos = [...repos];

  switch (sort) {
    case "stars":
      sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      break;
    case "forks":
      sortedRepos.sort((a, b) => b.forks - a.forks);
      break;
    case "help-wanted-issues":
      sortedRepos.sort((a, b) => b.open_issues - a.open_issues);
      break;
    case "updated":
      sortedRepos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
      break;
    default:
      break;
  }

  if (filter === "desc") {
    sortedRepos.reverse();
  }

  return sortedRepos;
};