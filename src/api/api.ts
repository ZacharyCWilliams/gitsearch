import axios from "axios";
import { CONFIGURATION } from "../__fixtures__/configuration";

export const getProfileSuggestions = async (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength === 0) {
    return [];
  }

  try {
    const response = await axios.get(
      `${CONFIGURATION.GITHUB_API_BASE_URL}/search/users?q=${inputValue}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export const getProfile = async (
  username: string,
  page: number,
  sort: string,
  filter: string
) => {
  const profile = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      params: {
        page,
        per_page: 20,
        sort,
        direction: filter,
      },
    }
  );

  return profile.data;
};