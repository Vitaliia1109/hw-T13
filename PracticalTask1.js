function getPokemonInfo(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

getPokemonInfo("pikachu")
  .then(pokemonData => {
    const name = pokemonData.name;
    const weight = pokemonData.weight;
    const abilities = pokemonData.abilities;

    console.log(`Name: ${name}`);
    console.log(`Weight: ${weight}`);
    console.log("Abilities:");
    console.log(abilities);
  })
  .catch(error => console.error(error));


