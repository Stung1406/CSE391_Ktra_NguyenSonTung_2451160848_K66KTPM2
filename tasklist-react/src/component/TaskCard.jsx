function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3 task-card">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-5">
            <small className="text-secondary">Task</small>
            <h5 className={task.done ? 'task-done' : ''}>{task.name}</h5>
          </div>
          <div className="col-md-2">
            <small className="text-secondary">Priority</small>
            <div className={task.priority.toLowerCase()}>{task.priority}</div>
          </div>
          <div className="col-md-2">
            <span className="badge bg-secondary-subtle text-dark p-2">
              {task.status}
            </span>
          </div>
          <div className="col-md-3 text-end">
            <button className="btn btn-edit me-2" onClick={() => onEdit(task)}>
              Sửa
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(task.id)}>
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
