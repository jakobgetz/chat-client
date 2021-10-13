import { Message } from ".";
import { Message as M } from "../../classes";
import { render, screen } from "@testing-library/react";

describe("Test Message Component", () => {
  const message = new M("Hello", "Tim", "Tom");
  it("text content", async () => {
    render(<Message message={message} />);
    const element = screen.getByText(/Hello/i);
    expect(element).toBeInTheDocument();
  });
});
