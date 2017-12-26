import React from 'react'
import Search from './Search';
import Message from './Message';

function _submitCalculator() {

}

function _processPokemon(pokemon) {
  return pokemon.map((item) => {
      return {
        groupId: item[1],
        label: item[0],
        value: item[1]
      };
  });
}

export default ({ groups, pokemon }) => {
  const pokemonArray = _processPokemon(pokemon);

  return (
    <div className="calculator">
      <form className="calculator__form" onSubmit={_submitCalculator.bind(this)}>
        <Search label="Choose a Pok&eacute;mon" groups={groups} pokemon={pokemonArray} />
        <Message message="Enter one or more of the following options" />
      </form>
    </div>
  );
}
