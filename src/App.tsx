import { Header } from "./Header"
import { CreateTasks } from "./CreateTasks"

import { Tasks } from "./Tasks";

function App() {
  return (
    <div className="App">
       <Header />
      <div className="wrapper">
        <CreateTasks />
      </div>
    </div>
  )
}

export default App
