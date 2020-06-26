import React, { useState } from 'react'

const TaskList = (props) => {
  const [newTask, setNewTask] = useState('')
  return (
    <div>
      {props.tasks.map((el) => (
        <div key={el.taskId}>{el.title}</div>
      ))}
      <div>
        <input
          type="text"
          value={newTask}
          className="bg-teal-100"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="button" onClick={() => props.addTask(newTask)}>
          Add
        </button>
      </div>
    </div>
  )
}
export default TaskList
