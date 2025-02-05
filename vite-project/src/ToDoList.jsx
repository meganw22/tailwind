import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["Apples", "bananas", "lemons"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  return (
    <>
      <div>
        <h1 className="to-do-title font-bold text-3xl mt-10">To-Do List</h1>
        <div className="flex justify-center">
          <input
            type="text"
            className="newTaskBox"
            value={newTask}
            onChange={handleInputChange}
            placeholder="enter new task..."
          />
          <button>Add</button>
          <br />
          <ol></ol>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
