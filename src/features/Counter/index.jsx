import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";
import styles from "./styles.module.css";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncreaseClick = () => {
    const action = increase(); // action creater, return object
    console.log(
      "🚀 ~ file: index.jsx ~ line 11 ~ handleIncreaseClick ~ action",
      action
    );
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease(); // action creater, return object
    dispatch(action);
  };
  return (
    <div className={styles.counter}>
      Counter Feature : {counter}
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  );
}

export default CounterFeature;
