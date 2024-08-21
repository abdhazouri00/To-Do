import classes from './CheckDisplay.module.css'

function CheckDisplay({task}) {
  return (
    <>
      <div className={classes.mainDisplay}>
        <div className={classes.taskDisplay}>
          <p>{task}</p>
        </div>
      </div>
    </>
  );
}

export default CheckDisplay;
