/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Todo from '../../components/Todo/Todo'

describe("Todo page", () => {
  it("should render the heading", () => {
  

    render(<Todo />);
  const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument();
  });
});