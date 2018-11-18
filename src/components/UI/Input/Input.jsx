import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  let inputElement = null;
  const InputClasses = [classes.InputElement];

  let validationError = null;
  let invalid = props.invalid && props.shouldValidate && props.touched;
  if (invalid) {
    InputClasses.push(classes.Invalid);
    validationError = (
      <p className={classes.ValidationError}>
        Please enter a valid {props.valueType}
      </p>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={InputClasses.join(" ")}
          value={props.elementValue}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={InputClasses.join(" ")}
          value={props.elementValue}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={InputClasses.join(" ")}
          value={props.elementValue}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={InputClasses.join(" ")}
          value={props.elementValue}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={classes.Input}>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
