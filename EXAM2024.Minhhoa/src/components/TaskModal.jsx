import { useState } from 'react'
import { PRIORITIES } from '../constants/taskConstants'

function TaskModal({ task, onClose, onSave }) {
  const [name, setName] = useState(task ? task.name : '')
  const [priority, setPriority] = useState(task ? task.priority : 'Low')
  const [status] = useState(task ? task.status : 'To Do')
  const [error, setError] = useState('')

  const MAX_NAME_LENGTH = 100

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Vui lòng nhập tên task')
      return
    }
    if (name.length > MAX_NAME_LENGTH) {
      setError(`Tên task không được vượt quá ${MAX_NAME_LENGTH} ký tự`)
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
                const val = e.target.value
                setName(val)
                if (val.trim().length > MAX_NAME_LENGTH) {
                  setError(`Tên task không được vượt quá ${MAX_NAME_LENGTH} ký tự`)
                } else if (val.trim()) {
                  setError('')
                }
              }}
              className={error ? 'invalid-input' : ''}
              maxLength={MAX_NAME_LENGTH + 10}
              autoFocus
            />
            <div className="input-feedback">
              {error && <span className="error-text">{error}</span>}
              <span className={`char-count ${name.length > MAX_NAME_LENGTH ? 'over-limit' : ''}`}>
                {name.length}/{MAX_NAME_LENGTH}
              </span>
            </div>
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
