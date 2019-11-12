/**
 * <div class="results__empty">
 *    No Pokemons found
 * </div>
 */

export function createNoPokemons() {
  const element = document.createElement('div');
  element.className = 'results__empty';
  const content = document.createTextNode('No Pokemons found');
  element.appendChild(content);
  return element;
}

export function createPokemonElements(pokemons) {
  /**
   * This function could receive an array of pokemons and creates epaElements for each of them.
   * You can use createPokemon to create a single element.
   */
  const listElement = document.createElement('ul');
  pokemons.forEach(pokemon => {
    const pokemonElement = createPokemonElement(pokemon);
    listElement.appendChild(pokemonElement);
  });
  return listElement;
}

export function createPokemonElement(pokemon) {
  //   /**
  //    * This function could create a new element and displays the properties of a pokemon.
  //    */

  const itemElement = document.createElement('li');
  itemElement.innerHTML = pokemon.name;
  return itemElement;
}

// MEIN EXPERIMENT
// export function createPokemonElement(pokemon) {
//   const pokemonElement = document.createPokemonElement('div');
//   const pokemonElementName = document.createPokemonElementName('div');
//   const pokemonElementId = document.createPokemonElementID('div');
//   const pokemonElementTypeList = document.createPokemonElementTypeList('div');
//   appendChild(pokemonElement, pokemonElementName);
//   appendChild(pokemonElement, pokemonElementId);
//   appendChild(pokemonElement, pokemonElementTypeList);
//   pokemonElementId.innerHTML = pokemon.id;
//   pokemonElementName.innerHTML = pokemon.name;
//   pokemonElementTypeList.innerHTML = pokemon.typeList;
//   return pokemonElement;

// MEIN EXPERIMENT ENDE
/**
 * This function could receive an array of pokemons and creates elements for each of them.
 * You can use createPokemon to create a single element.
 */
/**
 * This function could create a new element and displays the properties of a pokemon.
 */
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

// ORIGINAL VON LEON
// /**
//  * <div class="results__empty">
//  *    No Pokemons found
//  * </div>
//  */
// export function createNoPokemons() {
//   const element = document.createElement('div');
//   element.className = 'results__empty';
//   const content = document.createTextNode('No Pokemons found');
//   element.appendChild(content);
//   return element;
// }

// export function createPokemonElements(pokemons) {
//   /**
//    * This function could receive an array of pokemons and creates epaElements for each of them.
//    * You can use createPokemon to create a single element.
//    */
//   const listElement = document.createElement('ul');
//   pokemons.forEach(pokemon => {
//     const pokemonElement = createPokemonElement(pokemon);
//     listElement.appendChild(pokemonElement);
//   });
//   return listElement;
// }

// export function createPokemonElement(pokemon) {
//   /**
//    * This function could create a new element and displays the properties of a pokemon.
//    */
//   const itemElement = document.createElement('li');
//   itemElement.innerHTML = pokemon.name;
//   return itemElement;
// }

// export function removeChilds(parent) {
//   console.log(`Remove childs from`, parent);
//   parent.innerHTML = '';
// }

// export function appendChild(parent, child) {
//   console.log(`Append child`, parent, child);
//   parent.appendChild(child);
// }

// export function setChild(parent, child) {
//   removeChilds(parent);
//   appendChild(parent, child);
// }

// export function resetInput(input) {
//   input.value = '';
// }
