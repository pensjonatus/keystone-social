import Actor from "../actor/actor";
import styles from "./post.module.css";

export default function Post({ actor, content }) {
  const { name, avatar, description } = actor;
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <Actor name={name} avatar={avatar} description={description} />
        {content}
      </div>
    </div>
  );
}
