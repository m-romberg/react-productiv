import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

const todo = {
  id: 1,
  title: "Todo Title",
  description: "Todo description",
  priority: 1,
};
describe("Todo Tests", function () {
  test("it renders without crashing", function () {
    render(<Todo todo={todo} />);
  });

  test("it shows the todo contents with valid data", function () {
    const todoRendered = render(<Todo todo={todo} />);
    expect(todoRendered.queryByText(todo.title)).toBeInTheDocument();
    expect(todoRendered.queryByText(todo.description)).toBeInTheDocument();
    expect(todoRendered.queryByText(`(priority: ${todo.priority})`)).toBeInTheDocument();

  });

  test("it renders empty Todo and priority if no data passed", function (){
    const todoRendered = render(<Todo />);
    expect(todoRendered.queryByText(todo.title)).not.toBeInTheDocument();
    expect(todoRendered.queryByText(todo.description)).not.toBeInTheDocument();
    expect(todoRendered.queryByText(`(priority: )`)).toBeInTheDocument();
  })
}
);