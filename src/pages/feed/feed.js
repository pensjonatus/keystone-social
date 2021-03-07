import styles from "./feed.module.css";
import Post from "../../components/post/post";
import gotAvatar from "./got-guy.jpg";

const actor = {
  name: "Game of thrones guy",
  avatar: gotAvatar,
  description: "I like games of thrones",
};

const content = (
  <>
    <h1>Cool GOT reference</h1>
    <p>When I was at GOT camp, I made like a-finity of Jon Snow bracelets!</p>
  </>
);

export default function Feed() {
  return (
    <div className={styles.wrapper}>
      <Post actor={actor} content={content} />
    </div>
  );
}
