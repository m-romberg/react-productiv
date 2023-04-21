import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = [] }) {
  console.log("TodoApp component ran");
  const [todos, setTodos] = useState(initialTodos);
  console.log("___________-------TodoApp state, todos", todos);

  /** add a new todo to list */
  function create(todo) {

    let newTodo = {...todo, id: uuid()};
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    console.log('UpdatedTodo in update ____________', updatedTodo)
    //reduce todos to where id matches updatedTodo
    console.log('********************************updateTodo ran');
    const updatedTodos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo );
    console.log('___________________________updateTodo inside update', updatedTodos);
    setTodos(updatedTodos);

  }

  /** delete a todo by id */
  function remove(id) {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    console.log('&&&&&&&filteredTodos in remove', filteredTodos)
    setTodos(filteredTodos);
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length > 0
            ?
            <EditableTodoList todos={todos} update={update} remove={remove} />
            :
            <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {/* (if no top todo, omit this whole section) */}
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos} />
          </section>

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;