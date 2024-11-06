import { FC } from "react";
import { useAuth } from "../hooks/auth-hooks";

export const Login: FC = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Log In</button>
    </div>
  );
};
