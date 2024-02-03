import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  const IncrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const DecrementHandler = () => {
    dispatch({ type: 'DECREMENT' });

  };

  const IncrementBy2Handler = () => {
    dispatch({ type: 'INCREMENTBY2' });
  };

  const IncrementBy5Handler = () => {
    dispatch({ type: 'IncrementBy5' });
  };

  const DecrementBy2Handler = () => {
    dispatch({ type: 'DECREMENTBY2' });
  };

  const DecrementBy5Handler = () => {
    dispatch({ type: 'Decremenenby5' });
  };

  const toggleCounterHandler = () => {
    // dispatch(counterActions.toggleCounterHandler())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {<div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes['btn']} onClick={IncrementHandler}>Increment</button>
        <button className={classes['btn']} onClick={DecrementHandler}>Decrement</button>
      </div>
      <div>
        <button className={classes['btn']} onClick={IncrementBy2Handler}>IncrementBy2</button>
        <button className={classes['btn']} onClick={DecrementBy2Handler}>DecrementBy2</button>
      </div>
      <div>
        <button className={classes['btn']} onClick={IncrementBy5Handler}>IncrementBy5</button>
        <button className={classes['btn']} onClick={DecrementBy5Handler}>DecrementBy5</button>
      </div>
      <button className={classes['btn']} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
