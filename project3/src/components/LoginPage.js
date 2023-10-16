import React from "react";

function LoginPage() {
  return (
    <div>
      <form>
        <label>Usrname:</label>
        <input type="text" placeholder="Username" />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Password" />
        <button type="submit" value="Login">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
