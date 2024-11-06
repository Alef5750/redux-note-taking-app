import { FC } from "react";
import { useAuth } from "../hooks/auth-hooks";

export const Login: FC = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Log In</button>
    </div>
  );
};
