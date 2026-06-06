function TaskCard({ task, onEdit, onDelete }) {
  let progress = 0;
  let color = '#7c3aed';
  
  if (task.status === 'Done') {
    progress = 100;
  } else if (task.status === 'In Progress') {
    progress = 50;
    color = '#7c3aed';
  }
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3 task-card">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-4">
            <small className="text-secondary">Task</small>
            <h5>{task.name}</h5>
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
          <div className="col-md-4 d-flex align-items-center justify-content-end gap-3">
            <div className="progress-circle" style={{ "--progress": `${progress}%`, "--progress-color": color }}>
            </div>
            <div>
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
    </div>
  )
}

export default TaskCard
