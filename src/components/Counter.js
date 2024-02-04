import { counterActions } from '../Store';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter)

  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const DecrementHandler = () => {
    dispatch(counterActions.decrement());

  };

  const IncrementBy2Handler = () => {
    dispatch(counterActions.incrementby2());
  };

  const IncrementBy5Handler = () => {
    dispatch(counterActions.incrementby5());
  };

  const DecrementBy2Handler = () => {
    dispatch(counterActions.decrementby2());
  };

  const DecrementBy5Handler = () => {
    dispatch(counterActions.decrementby5());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(220))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
      <button className={classes['btn']} onClick={increaseHandler}>increase</button>
      <button className={classes['btn']} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
