import classes from "./Display.module.css";
import { FaCheck } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";

function Display({ task , delTask , checkTask}) {
  const handleDelete = () => {
    console.log(task);
    delTask(task);
  };

  const handleCheck = () => {
    checkTask(task);
  }

  return (
    <>
      <div className={classes.mainDisplay}>
        <div className={classes.taskDisplay}>
          <p>{task}</p>
          <div className={classes.displayRight}>
            <FaCheck className={classes.savg} onClick={handleCheck}/>
            <FiTrash className={classes.savg} onClick={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
