import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import DropdownButton from "../components/DropdownButton";

const mockDropdownItems = [
  { label: "Label 1", value: "value1" },
  { label: "Label 2", value: "value2" },
  { label: "Label 3", value: "value3" },
];

const mockSelect = jest.fn();

describe("<DropdownButton />", () => {

  beforeEach(() => {
    cleanup();
  });

  it("renders the DropdownButton component correctly", () => {
    render(
      <DropdownButton
        buttonStyles="bg-blue-500 px-4 py-2 text-white"
        buttonText="Dropdown Button"
        dropdownItems={mockDropdownItems}
        onSelect={mockSelect}
        disabled={false}
      />
    );

    const buttonElement = screen.getByText(/Dropdown Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("opens the dropdown and displays filter options when the button is clicked", () => {
    render(
      <DropdownButton
        buttonStyles="bg-blue-500 px-4 py-2 text-white"
        buttonText="Dropdown Button"
        dropdownItems={mockDropdownItems}
        onSelect={mockSelect}
        disabled={false}
      />
    );

    const button = screen.getByText(/Dropdown Button/i);
    fireEvent.click(button);

    mockDropdownItems.forEach((item) => {
      const filterOption = screen.getByText(item.label);
      expect(filterOption).toBeInTheDocument();
    });
  });

  it("calls onSelect with selected value when option is clicked", () => {

    render(
      <DropdownButton
        buttonStyles="bg-blue-500 px-4 py-2 text-white"
        buttonText="Dropdown Button"
        dropdownItems={mockDropdownItems}
        onSelect={mockSelect}
        disabled={false}
      />
    );

    const button = screen.getByText(/Dropdown Button/i);
    fireEvent.click(button);

    const firstFilterOption = screen.getByText(mockDropdownItems[0].label);
    fireEvent.click(firstFilterOption);

    expect(mockSelect).toHaveBeenCalledWith(mockDropdownItems[0].value);
  });
});
