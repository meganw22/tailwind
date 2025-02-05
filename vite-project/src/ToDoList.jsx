import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {}

  function addTask() {}

  function deleteTask(index) {}

  return (
    <>
      <div className="to-do-title font-bold text-3xl">To-Do List</div>
      <input
        type="text"
        className="newTaskBox"
        value={newTask}
        onChange={handleInputChange}
        placeholder="enter new task..."
      />
      <button>Add</button>
    </>
  );
};

export default ToDoList;
