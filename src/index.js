import {
  createNoPokemons,
  setChild,
  removeChilds,
  resetInput,
  createPokemons
} from './api/elements';

import {
  getPokemonsByName,
  sortPokemonsByName,
  getPokemonsByType
} from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');
const sortButton = document.querySelector('.sort__button');
const typeButton = document.querySelector('.type__button');

// Reset input and results
resetInput(searchInput);
setChild(resultsElement, createNoPokemons());
removeChilds(resultsElement, createPokemons());

let PokemonSearchName = '';
let PokemonSearchType = '';

// Add event listeners

/**
 * Find the correct event to listen for input changes.
 */
searchInput.addEventListener('change', function() {
  removeChilds(resultsElement);
  PokemonSearchType = [];
  PokemonSearchName = getPokemonsByName(searchInput.value);
  PokemonSearchName.forEach(createPokemons);
});

typeButton.addEventListener('click', function() {
  removeChilds(resultsElement);
  PokemonSearchName = [];
  PokemonSearchType = getPokemonsByType(searchInput.value);
  PokemonSearchType.forEach(createPokemons);
});

sortButton.addEventListener('click', function() {
  removeChilds(resultsElement);

  sortPokemonsByName(PokemonSearchName);
  PokemonSearchName.forEach(createPokemons);
  sortPokemonsByName(PokemonSearchType);
  PokemonSearchType.forEach(createPokemons);
});
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
