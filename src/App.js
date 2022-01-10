import React, { useState } from "react";

import UserForm from "./components/userform/UserForm";
import UserList from "./components/userlist/UserList";

import "./App.css";

const App = () => {
  const savedUserDataHandler = (enteredData) => {
    console.log("from app.js " + enteredData);
  };

  return (
    <div>
      <h1>user list</h1>
      <UserForm onSavedUserData={savedUserDataHandler} />
      <UserList />
    </div>
  );
};

export default App;
