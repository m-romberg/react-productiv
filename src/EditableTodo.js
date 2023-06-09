import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State:
 * - isEditing - boolean
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  // console.log('EditableTodo ran')
  const [isEditing, setIsEditing] = useState(false);
  // console.log('isEditing inside EditableTodo', isEditing);
  // console.log('todo inside EditableTodo', todo);

  /** Toggle if this is being edited */
  //TODO: fix function name
  function toggleEdit() {
    setIsEditing(true);
  }
  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    // console.log('$$$$$$$formData in handleSave', formData);
    update({ ...formData, id: todo.id });
    setIsEditing(false);
  }

  return (
    <div className="EditableTodo">
      {isEditing ?
        <TodoForm handleSave={handleSave} initialFormData={todo} />
        :
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo todo={todo} />
        </div>
      }
    </div>
  );
}

export default EditableTodo;
