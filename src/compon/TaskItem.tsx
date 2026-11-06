type TaskItemProps = {
    title: string
    id: string
    done: boolean
}


function TaskItem({id, title, done}:TaskItemProps){
  return (
    <div className="task-item">
      <h2>{title}</h2>
      <p>{done+''}</p>
    </div>
  )
}

export default TaskItem