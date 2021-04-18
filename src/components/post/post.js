import { useEffect, useState } from 'react';
import Actor from '../actor/actor';
import { getAttitude, getRandomItem } from '../../helpers';
import bots from './bots';
import styles from './post.module.css';

async function getContent(interests) {
  switch (interests) {
    case 'game-of-thrones':
      const content = await fetch(
        `https://anapioficeandfire.com/api/characters/3${Math.floor(
          Math.random() * 100
        )}`
      )
        .then((result) => result.json())
        .then((character) => {
          const miniRant = [];
          const pronoun = character.gender === 'Male' ? 'he' : 'she';
          miniRant.push(`${character.name} is ${getAttitude()}.`);
          if (character.titles && character.titles[0].length > 0) {
            miniRant.push(
              `Did you know ${pronoun} was also known as ${character.titles[0]}?`
            );
          }
          if (character.culture) {
            miniRant.push(
              `Ekhm, ${pronoun} was one of the ${character.culture}, in case you don't know.`
            );
          }
          miniRant.push();
          return miniRant.join(' ');
        });
      return content;

    default:
      break;
  }
}

async function getActor() {
  const actorData = await fetch('https://randomuser.me/api/')
    .then((result) => result.json())
    .then((json) => json.results[0]);
  return {
    name: `${actorData.name.first} ${actorData.name.last}`,
    avatar: actorData.picture.thumbnail,
    location: `${actorData.location.city}, ${actorData.location.country}`,
  };
}

export default function Post() {
  const interests = getRandomItem(bots).interests;
  const [content, setContent] = useState(undefined);
  const [actorInformation, setActorInformation] = useState(undefined);

  useEffect(
    function () {
      getContent(interests).then((result) => setContent(result));
    },
    [interests]
  );

  useEffect(function () {
    getActor().then((actorData) => setActorInformation(actorData));
  }, []);
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        {actorInformation && (
          <Actor
            name={actorInformation.name}
            avatar={actorInformation.avatar}
            location={actorInformation.location}
          />
        )}
        <div className={styles.content}>{content && content}</div>
      </div>
    </div>
  );
}
