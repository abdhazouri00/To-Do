import Display from "./Display";
import CheckDisplay from "./CheckDisplay";
import classes from "./List.module.css";

function List({ passedTasks, delTask, checkTask, checkedList }) {
  return (
    <>
      <p className={classes.tasksHeader}>Tasks to do : {passedTasks.length}</p>
      {passedTasks.map((task, index) => (
        <Display
          key={index}
          task={task}
          delTask={delTask}
          checkTask={checkTask}
        />
      ))}

      <p className={classes.tasksHeader}>Tasks done : {checkedList.length}</p>
      {checkedList.map((task, index) => (
        <CheckDisplay key={index} task={task} />
      ))}
    </>
  );
}

export default List;
