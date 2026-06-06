import { useState } from 'react'
import './App.css'
import TaskCard from './component/TaskCard'
import TaskModal from './component/TaskModal'
import { initialTasks } from './component/data.json'


function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [modal, setModal] = useState(null)
  const [nextId, setNextId] = useState(4)

  function handleAdd() {
    setModal({ type: 'add' })
  }

  function handleEdit(task) {
    setModal({ type: 'edit', task })
  }

  function handleDelete(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function handleToggleDone(id) {
    setTasks(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, done: !t.done, status: !t.done ? 'Done' : 'To Do' }
          : t
      )
    )
  }

  function handleSave(data) {
    if (modal.type === 'add') {
      setTasks(prev => [...prev, { id: nextId, ...data, done: data.status === 'Done' }])
      setNextId(n => n + 1)
    } else {
      setTasks(prev =>
        prev.map(t =>
          t.id === modal.task.id
            ? { ...t, ...data, done: data.status === 'Done' }
            : t
        )
      )
    }
    setModal(null)
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold display-4">Task List</h1>
        <button className="btn btn-add" onClick={handleAdd}>+ Add Task</button>
      </div>

      {tasks.length === 0 && (
        <div className="text-center text-secondary py-5">
          <p>Chưa có task nào. Nhấn <strong>Add Task</strong> để bắt đầu!</p>
        </div>
      )}

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      {modal && (
        <TaskModal
          task={modal.type === 'edit' ? modal.task : null}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default App