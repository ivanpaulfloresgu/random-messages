const messages = [
  "Ivan",
  "Yelsi",
  "Diana",
  "Sofia",
  "Luis",
  "Julio",
  "Bendy",
  "Sebas"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };