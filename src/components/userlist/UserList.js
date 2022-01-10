import UserListItem from "./UserListItem";

const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <UserListItem key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
