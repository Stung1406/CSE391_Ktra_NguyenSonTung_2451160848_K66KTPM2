import { useState } from 'react'
import { PRIORITIES } from './data.json'

function TaskModal({ task, onClose, onSave }) {
  const [name, setName] = useState(task ? task.name : '')
  const [priority, setPriority] = useState(task ? task.priority : 'Low')
  const [status] = useState(task ? task.status : 'To Do')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Vui lòng nhập tên task')
      return
    }
    onSave({ name: name.trim(), priority, status })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={e => e.stopPropagation()}>
        <div className="custom-modal-header">
          <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
          <button type="button" className="custom-close-btn" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Task</label>
            <input
              type="text"
              placeholder="Type your task here..."
              value={name}
              onChange={e => {
                setName(e.target.value)
                if (e.target.value.trim()) {
                  setError('')
                }
              }}
              className={error ? 'invalid-input' : ''}
              autoFocus
            />
            {error && <span className="error-text">{error}</span>}
          </div>

          <div className="form-group">
            <label>Priority</label>
            <div className="priority-list">
              {PRIORITIES.map(p => {
                const lowerP = p.toLowerCase()
                const isActive = priority === p
                return (
                  <button
                    key={p}
                    type="button"
                    className={`priority ${lowerP} ${isActive ? 'active' : ''}`}
                    onClick={() => setPriority(p)}
                  >
                    {p}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="custom-modal-footer">
            <button type="submit" className={`add-btn ${name.trim() ? 'active-btn' : ''}`}>
              {task ? 'Save' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskModal
