import styles from "./feed.module.css";
import Post from "../../components/post/post";

export default function Feed() {
  return (
    <div className={styles.feed}>
      {[...Array(10)].map((key) => (
        <Post key={key} />
      ))}
    </div>
  );
}
