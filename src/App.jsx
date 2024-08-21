import Taskbar from "./components/Taskbar";
import List from "./components/List";
import { useState } from "react";
import './App.css'

function App() {

  const [taskList, setTaskList] = useState([])
  const [completedList, setCompletedList] = useState([])
  
  const reset = () => {
    setTaskList([]);
    setCompletedList([]);
  }

  const addTask = (task) => {
    setTaskList([...taskList , task])
  }

  const delTask = (delIndex) => {
    console.log(taskList.indexOf(delIndex));
    setTaskList(taskList.filter((_,index) => index != taskList.indexOf(delIndex)));
  }

  const checkTask = (checkIndex) => {
        setTaskList(
          taskList.filter((_, index) => index != taskList.indexOf(checkIndex))
        );
    
    setCompletedList([...completedList, checkIndex]);

  }

  return (
    <>
      <button className="resetButton" onClick={reset}>Reset</button>
      <main>
        <Taskbar addTask={addTask} />
        <List
          passedTasks={taskList}
          delTask={delTask}
          checkTask={checkTask}
          checkedList={completedList}
        />
      </main>
    </>
  );
}

export default App;
