import { useState } from "react"
import TaskList from "./compon/TaskList"
import AddForm from "./compon/Addforms";

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

function App() {

  const defaultTasks: Task[] = [
    { id: '1', title: 'Task 1', done: true },
    { id: '2', title: 'Task 2', done: false },
    { id: '3', title: 'Task 3', done: true },
  ]

  const [tasks, setTasks] = useState<Task[]>(defaultTasks)

  const addNewTask = (title: string) => {
    const addTask = {
      id: crypto.randomUUID(),
      title: title,
      done: false
    }
    setTasks([...tasks, addTask])
  }

  // 

  return (
    <div className="main">
      <AddForm addNewTask={addNewTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App