/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 *
 */

import pokemons from 'json-pokemon';

export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const pickPokemons = pokemons.filter(pokemon => {
    const normalizedPokemonName = pokemon.name.toLowerCase();
    return normalizedPokemonName.startsWith(normalizedName);
  });
  return pickPokemons;
}
/**
 * pokemonName is unused.
 * You could use this property to filter the pokemons by name.
 * Take a look: Array.prototype.filter()
 *
 * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
 * It should be case independend.
 */

//  EXPERIMENT
// export function getPokemonsById(pokemonId) {
//   const selected = pokemons.filter(({ id }) =>
//     id.toLowerCase().match(pokemonId.toLowerCase())
//   );
//   return selected;
// }

// export function getPokemonsByType(TypeName) {
//   const selected = pokemons.filter(({ typeList }) =>
//     typeList.includes(TypeName)
//   );
//   return selected;
// }

// export function sortPokemonsByName(pokemons) {
//   pokemons.sort(function(a, b) {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
//   });
// }

// export function sortPokemonsById(pokemonId) {
//   const numbers = numbers.sort(function(a, b) {
//     return a - b;
//   });
//   return pokemonId;
// }

//ENDE EXPERIMENT

// export function sortPokemonsByName(pokemons, `DESC`)
//   const sortedPokemons = selected.filter(
//     (selected, index) => selected.lastIndexOf(selected) === index
//   );
//   keywords.sort((a, b) => (a < b ? -1 : 1));

//   return sortedPokemons;

// export function sortPokemonsByName(pokemons, `ASC`)
//   const sortedPokemons = selected.filter((selected, index) => selected.lastIndexOf(selected) === index)
//     .sort((b, a) => (a > b ? 1 : -1));

//   return sortedPokemons;

// /**
//  * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
//  *
//  * See Array.prototype.sort()
//  */

// ORIGINAL LEON BELOW

// /**
//  * json-pokemon is a package which is installed with `npm i json-pokemon`.
//  * See https://www.npmjs.com/package/json-pokemon
//  *
//  * You will find details about the properties of a pokemon.
//  *
//  * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
//  */
// import pokemons from 'json-pokemon';

// export function getAllPokemons() {
//   return pokemons;
// }

// export function getPokemonsByName(pokemonName) {
//   const normalizedName = pokemonName.toLowerCase();
//   const pickPokemons = pokemons.filter(pokemon => {
//     const normalizedPokemonName = pokemon.name.toLowerCase();
//     return normalizedPokemonName.startsWith(normalizedName);
//   });

//   return pickPokemons;
// }

// export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
//   /**
//    * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
//    *
//    * See Array.prototype.sort()
//    */
//   return pokemons;
// }
