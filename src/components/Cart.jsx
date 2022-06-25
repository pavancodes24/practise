import { useSelector } from "react-redux";

const Cart = () => {
  const counter = useSelector((state) => state.counter);
  return <div>this is cart: {counter}</div>;
};

export default Cart;
