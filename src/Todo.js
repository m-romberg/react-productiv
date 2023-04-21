import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/
// props = {todo: {title, description, priority}}
//props = { title, description, priority }
function Todo( { todo={}}) {
  // console.log("Todo component ran");
  // console.log("Todo Todo", todo );
  const {title, description, priority}  = todo;
  // console.log("TODO {title, description, priority}", {title, description, priority});
  return (
      <div className="Todo">
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
