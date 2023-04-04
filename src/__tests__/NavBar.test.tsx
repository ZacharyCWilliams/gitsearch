import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("<NavBar />", () => {
  const mockSortRepos = jest.fn();
  const mockFilterRepos = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the NavBar component correctly", () => {
    render(
      <NavBar
        sortRepos={mockSortRepos}
        filterRepos={mockFilterRepos}
        disableButton={false}
      />
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText(/Sort/i)).toBeInTheDocument();
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
  });

  it("calls sortRepos and filterRepos when dropdown options are selected", () => {
    render(
      <NavBar
        sortRepos={mockSortRepos}
        filterRepos={mockFilterRepos}
        disableButton={false}
      />
    );

    // Click on an option from each dropdown and check that fn()'s are being called with correct value
    fireEvent.click(screen.getByText(/Sort/i));
    fireEvent.click(screen.getByText(/Stars/i));
    expect(mockSortRepos).toHaveBeenCalledWith("stars");
    
    fireEvent.click(screen.getByText(/Filter/i));
    fireEvent.click(screen.getByText(/Ascending/i));
    expect(mockFilterRepos).toHaveBeenCalledWith("asc");
  });
});
