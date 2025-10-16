import React from 'react'

export default function TodoItem({ task, onToggle, onDelete }) {
  const formatDeadline = (deadline) => {
    if (!deadline) return null
    const date = new Date(deadline)
    return date.toLocaleString()
  }

  return (
    <li className={`task-item ${task.done ? 'done' : ''}`}>
      <div className="task-content">
        <label>
          <input type="checkbox" checked={task.done} onChange={onToggle} />
          <span className="task-text">{task.text}</span>
        </label>
        {task.deadline && (
          <div className="deadline">
            Deadline: {formatDeadline(task.deadline)}
          </div>
        )}
      </div>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </li>
  )
}




