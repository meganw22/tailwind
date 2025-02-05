import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["Apples", "bananas", "lemons"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...task, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {}

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="text-center">
          <h1 className="to-do-title font-bold text-3xl mt-10">To-Do List</h1>
          <div>
            <input
              type="text"
              className="newTaskBox"
              value={newTask}
              onChange={handleInputChange}
              placeholder="enter new task..."
            />

            <button className="add-button" onClick={addTask}>
              add
            </button>

            <br />
          </div>

          <ol className="list-decimal">
            {task.map((task, index) => (
              <li key={index}>
                <span className="text">{task}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  delete
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
