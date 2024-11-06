import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <>
      <h1>Home Page (Public)</h1>
      <p>Login to view notes</p>
      <Link to="/notes/new">Create Note</Link>
    </>
  );
};
