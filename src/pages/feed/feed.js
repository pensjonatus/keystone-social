import styles from "./feed.module.css";
import Post from "../../components/post/post";

export default function Feed() {
  return (
    <div className={styles.feed}>
      {[...Array(10)].map((i, key) => (
        <Post key={key} />
      ))}
    </div>
  );
}
