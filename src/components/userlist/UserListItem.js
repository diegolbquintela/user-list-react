const UserListItem = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
    </li>
  );
};

export default UserListItem;
