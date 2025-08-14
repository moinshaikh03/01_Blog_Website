import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/create">Create Post</Link>
    </nav>
  );
}
