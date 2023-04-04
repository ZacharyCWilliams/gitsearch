import { render, screen, cleanup } from "@testing-library/react";
import ErrorMessage from "../components/ErrorMessage";

const mockClose = jest.fn();

describe("<ErrorMessage />", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders the ErrorMessage component correctly", () => {
    render(<ErrorMessage onClose={mockClose} />);

    const errorMessage = screen.getByText(
      /Sorry. I don't think that profile exists/i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("automatically closes the error message after the specified duration", async () => {
    const duration = 1000;
    render(<ErrorMessage onClose={mockClose} duration={duration} />);

    await new Promise((resolve) => setTimeout(resolve, duration + 1000));

    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
