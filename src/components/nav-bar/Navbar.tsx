import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth-hooks";
import styles from "./Navbar.module.css";

export const Navbar: FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">
        Home
      </Link>{" "}
      |
      <Link className={styles.link} to="/Notes">
        Notes
      </Link>{" "}
      |
      <Link className={styles.link} to="/profile">
        Profile
      </Link>{" "}
      |
      {isAuthenticated ? (
        <button className={styles.button} onClick={logout}>
          Logout
        </button>
      ) : (
        <Link className={styles.link} to="/login">
          Login
        </Link>
      )}
    </nav>
  );
};
