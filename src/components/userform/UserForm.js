import React, { useState } from "react";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    props.onSavedUserData(enteredData);

    // return console.log(enteredData);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>name</label>
          <input
            type="text"
            value={enteredName}
            onChange={onNameChangeHandler}
          />
        </div>
        <div>
          <label>age</label>
          <input type="age" value={enteredAge} onChange={onAgeChangeHandler} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserForm;
