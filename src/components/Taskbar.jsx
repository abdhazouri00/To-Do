import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import classes from "./Taskbar.module.css";

function Taskbar({ addTask }) {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task === "") {
      throw (new Error("fuk u"));
    }
    else {
      addTask(task);
      setTask("");
    }
  };

  return (
    <>
      <form className={classes.taskbardiv} onSubmit={(e) => { e.preventDefault()}}>
        <div className={classes.taskbardivLeft}>
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={handleTaskChange}
          />
        </div>
        <button className={classes.button} onClick={handleAddTask}>
          <FiPlus />
        </button>
      </form>
    </>
  );
}

export default Taskbar;
