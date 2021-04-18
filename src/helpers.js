export function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getAttitude() {
  const attitudes = [
    'way way bad',
    'way bad',
    'really sucky',
    'horrible',
    'bloody awful',
    'so-so',
    'okay',
    'ok',
    'no big deal',
    'good',
    'cool',
    'nice',
    'great',
    'awesome',
    'fantastic',
    'tremendous',
    'formidable',
    'cuh-razy',
    'crazy',
    'bombastic',
    'jolly great',
    'stupendous',
    'horrendous',
    'invaluable',
  ];

  return getRandomItem(attitudes);
}
