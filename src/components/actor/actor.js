import styles from './actor.module.css';

export default function Actor({ name, avatar, location }) {
  return (
    <div className={styles.actor}>
      <img className={styles.avatar} src={avatar} alt={`${name}'s portrait`} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.location}>{location}</div>
      </div>
    </div>
  );
}
