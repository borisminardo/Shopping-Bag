// LoginForm.tsx
import React, { useState } from "react";
import "./login.css";

interface Props {
  handleLogin: (username: string, password: string) => void;
}

const LoginForm = ({ handleLogin }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    handleLogin(username, password);
  };

  return (
    <div className=" login-box">
      <h2 className="my-title">Login</h2>
      <form className="login-body">
        <div className="mb-3">
          <div className="mb-1">
            <label className="">Username: </label>
          </div>
          <input
            className="my-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-1">
            {" "}
            <label>Password: </label>
          </div>

          <input
            autoComplete="off"
            className="my-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="my-button login-button"
          type="button"
          onClick={onLogin}
        >
          Login
        </button>
        <a className="my-text mt-3 text-black" href="#">
          <p>Create an account...</p>
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
