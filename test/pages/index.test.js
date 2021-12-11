import { render, screen } from "../test-utils";
import Todo from '../../components/Todo/Todo'

describe("Todo page", () => {
  it("should render the heading", () => {
    const textToFind = "Hello World!"

    render(<Todo />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  })
});
    