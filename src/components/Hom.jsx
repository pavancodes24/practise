import { useDispatch, useSelector } from "react-redux";
import { addCounter, redCounter } from "./Redux/action";

export const Hom = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      Hello this is home page
      <div>Counter:{counter}</div>
      <button onClick={() => dispatch(addCounter())}>ADDCounter</button>
      <button onClick={() => dispatch(redCounter())}>REDCounter</button>
    </div>
  );
};
