import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  setColor,
} from "~/store/reducers/counter";

export default function Counter() {
  const counterObj = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counterObj);

  return (
    <div>
      <h1>Counter</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() => {
            const action = increaseCounter();
            console.log(action);
            dispatch(action); //action을 제출하는 함수
          }}
        >
          증가
        </button>

        <button
          onClick={() => {
            const action = decreaseCounter();
            console.log(action);
            dispatch(action); //action을 제출하는 함수
          }}
        >
          감소
        </button>
      </div>

      <div>
        <input
          type="text"
          onChange={(e) => {
            dispatch(setColor(e.target.value));
          }}
        ></input>
      </div>
      <div style={{ color: counterObj.color }}>{counterObj.counter}</div>
    </div>
  );
}
