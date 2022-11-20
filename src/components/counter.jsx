import React from "react";

const Counter = (props) => {
  const { value } = props;

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };

  const getBadgrClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    // setValue((prevState) => prevState + 1);
    console.log("asdas");
  };
  const handleDecrement = () => {
    // setValue((prevState) => prevState - 1);
    console.log("asdas");
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgrClasses()}>{formatCount()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
