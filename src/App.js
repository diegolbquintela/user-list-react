import React, { useState } from "react";

import UserForm from "./components/userform/UserForm";
import UserList from "./components/userlist/UserList";

import "./App.css";

const INITIAL_USER = [
  {
    id: 1,
    name: "esther",
    age: 27,
  },
];

const App = () => {
  const [users, setUsers] = useState(INITIAL_USER);

  const savedUserDataHandler = (user) => {
    console.log(user);
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <h1>user list</h1>
      <UserForm onSavedUserData={savedUserDataHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
