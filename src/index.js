import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput,
  removeChilds
} from './api/elements';

import {
  getPokemonsByName,
  getAllPokemons
  // getPokemonsById,
  // getPokemonsByType
} from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get all pokemons
const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
const allPokemonElement = createPokemonElements(allPokemons);
setChild(resultsElement, allPokemonElement);

// Add event listeners

/**
 * Find the correct event to listen for input changes.
 */
searchInput.addEventListener('input', event => {
  const searchValue = event.target.value;
  console.log('Great! This event is fired:', searchValue);
  // resultsElement.innerHTML ="";
  removeChilds(resultsElement);

  const pokemons = getPokemonsByName(searchValue);
  console.log(pokemons);
  const pokemonList = createPokemonElements(pokemons);
  setChild(resultsElement, pokemonList);

  if (pokemons.length === 0) {
    const noPokemonsElement = createNoPokemons();
    setChild(resultsElement, noPokemonsElement);
  }
});

// sortButton.addEventListener('click', function() {
//   removeChilds(resultsElement);

//   sortPokemonsByName(PokemonSearchName);
//   PokemonSearchName.forEach(createPokemons);
//   sortPokemonsByName(PokemonSearchType);
//   PokemonSearchType.forEach(createPokemons);
// });
/**
 * You can verify that this event is fired in the Browser console.
 * Can you find the value of searchInput in this event?
 */

/**
 * Search for your pokemons now, create elements and add them to your results.
 */

/**
 * Later, you can add sort functionality.
 */
// ORIGINAL VON LEON

// import {
//   createNoPokemons,
//   createPokemonElements,
//   setChild,
//   resetInput,
//   removeChilds
// } from './api/elements';
// import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// // Query elements
// const searchInput = document.querySelector('.search__input');
// const resultsElement = document.querySelector('.results');

// // Get all pokemons
// const allPokemons = getAllPokemons();

// // Reset input and results
// resetInput(searchInput);
// const allPokemonElement = createPokemonElements(allPokemons);
// setChild(resultsElement, allPokemonElement);

// // Add event listeners
// searchInput.addEventListener('input', event => {
//   const searchValue = event.target.value;
//   console.log('Great! This event is fired:', searchValue);
//   // resultsElement.innerHTML = '';
//   removeChilds(resultsElement);

//   const pokemons = getPokemonsByName(searchValue);
//   console.log(pokemons);
//   /**
//    * Search for your pokemons now, create elements and add them to your results.
//    */
// });

// /**
//  * Later, you can add sort functionality.
//  */
