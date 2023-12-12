import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  const [search, setSearch] = useSearchParams({ n: " " });
  const number = search.get("n");
  return (
    <div>
      <ul>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
        <li>
          <Link to="3">User 3</Link>
        </li>
      </ul>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      <Outlet />
      {showActiveUsers ? (
        <h2>Displaying active users</h2>
      ) : (
        <h2>Displaying all users</h2>
      )}
      <input
        type="number"
        value={number}
        placeholder="Search users..."
        onChange={(e) => setSearch({ n: e.target.value })}
      />
      <br />
      {number && <Link to={`/users/${number}`}>User {number}</Link>}
    </div>
  );
}

export default Users;
