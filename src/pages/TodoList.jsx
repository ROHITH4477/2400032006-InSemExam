import React, { useState } from 'react'
import TodoItem from '../components/TodoItem'

export default function TodoList() {
  const [task, setTask] = useState('')
  const [deadline, setDeadline] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') return
    // store as object for future extensibility (id, text, done, deadline)
    setTasks(prev => [...prev, { 
      id: Date.now(), 
      text: task.trim(), 
      done: false, 
      deadline: deadline || null 
    }])
    setTask('')
    setDeadline('')
  }

  const toggleDone = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="todo-page">
      <h2>To-Do List</h2>

      <div className="input-row">
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="datetime-local"
          value={deadline}
          placeholder="Deadline"
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t) => (
          <TodoItem
            key={t.id}
            task={t}
            onToggle={() => toggleDone(t.id)}
            onDelete={() => deleteTask(t.id)}
          />
        ))}
      </ul>
    </div>
  )
}



