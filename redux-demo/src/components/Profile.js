import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: themeColor }}>
      Profile Page
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
