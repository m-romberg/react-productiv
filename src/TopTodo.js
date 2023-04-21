import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo

 */
function TopTodo({todos}) {
  // console.log("TopTodo component ran");
  // console.log("TopTodo todos", todos);

  // lowest-priority # is the highest priority
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
    console.log("TopTodo", top);

  // return <Todo  todo={top}/>;
  return <Todo  todo={top}/>;

}

export default TopTodo;