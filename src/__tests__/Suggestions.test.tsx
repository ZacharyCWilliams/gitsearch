import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Suggestions from "../components/Suggestions";
import { mockSuggestions } from "../__fixtures__/mockData";

const mockSetInput = jest.fn();
const mockHandleSubmit = jest.fn();

describe("<Suggestions />", () => {

  beforeEach(() => {
    cleanup();
  });

  test("renders the Suggestions component correctly", () => {
    render(
      <Suggestions
        suggestions={mockSuggestions}
        setInput={mockSetInput}
        handleSubmit={mockHandleSubmit}
      />
    );

    const suggestions = screen.getAllByRole("button");
    expect(suggestions.length).toBe(mockSuggestions.length);
  });

  test("clicking on a suggestion calls setInput and handleSubmit with the right values", () => {
    render(
      <Suggestions
        suggestions={mockSuggestions}
        setInput={mockSetInput}
        handleSubmit={mockHandleSubmit}
      />
    );

    const suggestions = screen.getAllByRole("button");
    fireEvent.click(suggestions[0]);

    expect(mockSetInput).toHaveBeenCalledWith(mockSuggestions[0].login);
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });
});
