import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { Id } = useParams();
  return <div>Details about the User {Id}:</div>;
}

export default UserDetails;
