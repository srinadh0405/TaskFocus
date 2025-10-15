import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";


export default function App() {
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

