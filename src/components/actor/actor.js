import styles from "./actor.module.css";

export default function Actor({ name, avatar, description }) {
  return (
    <div className={styles.actor}>
      <img className={styles.avatar} src={avatar} alt={`${name}'s portrait`} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
