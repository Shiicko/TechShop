export const pickRandom = (productos, cantidad) => {
  const randomId = new Set();

  while (randomId.size < cantidad) {
    randomId.add(Math.floor(Math.random() * productos.length));
  }

  return Array.from(randomId).map((index) => productos[index]);
};
