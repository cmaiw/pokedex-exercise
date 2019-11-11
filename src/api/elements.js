/**
 * <div class="results__empty">
 *    No Pokemons found
 * </div>
 */
const resultsElement = document.querySelector('.results');

export function createNoPokemons() {
  const element = document.createElement('div');
  element.className = 'results__empty';
  const content = document.createTextNode('No Pokemons found');
  element.appendChild(content);
  return element;
}

export function createPokemons(pokemon) {
  const pokemonObject = document.createElement('div');
  const pokemonObjectName = document.createElement('div');
  const pokemonObjectId = document.createElement('div');
  const pokemonObjectTypeList = document.createElement('div');
  appendChild(resultsElement, pokemonObject);
  appendChild(pokemonObject, pokemonObjectName);
  appendChild(pokemonObject, pokemonObjectId);
  appendChild(pokemonObject, pokemonObjectTypeList);
  pokemonObjectId.innerHTML = pokemon.id;
  pokemonObjectName.innerHTML = pokemon.name;
  pokemonObjectTypeList.innerHTML = pokemon.typeList;
  return pokemon;
  /**
   * This function could receive an array of pokemons and creates elements for each of them.
   * You can use createPokemon to create a single element.
   */
  /**
   * This function could create a new element and displays the properties of a pokemon.
   */
}

export function removeChilds(parent) {
  parent.innerHTML = '';
}

export function appendChild(parent, child) {
  parent.appendChild(child);
}

export function setChild(parent, child) {
  removeChilds(parent);
  appendChild(parent, child);
}

export function resetInput(input) {
  input.value = '';
}
