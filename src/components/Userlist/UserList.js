import React from "react";
import UserListStyle from "../../styled/UserList.style";
import Header from "../Header/Header";
import UserCard from "./UserCard";
import UserListData from "../../Mocks/data";
const UserList = () => {
  return (
    <UserListStyle>
      <Header />
      {UserListData.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
        />
      ))}
    </UserListStyle>
  );
};

export default UserList;
