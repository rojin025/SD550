import { fireEvent, render, screen } from "@testing-library/react";
import AddBook from "../components/AddBook";

jest.mock("../componets/AddBook", () => {
  AddBook: jest.fn();
});

describe("Validate ", () => {
  it("Button Add", () => {
    render(<AddBook />);
    const button = screen.getByText("Add");
    expect(button).toBeVisible();
  });

  test("Button Add", () => {
    render(<AddBook />);
    const button = screen.getByText("Add");

    // axios.post.mockResolvedValue({ status: 200, data: {} });
    fireEvent.click(button);

    expect(AddBook).toBeCalled();
  });
});
