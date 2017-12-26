import React from 'react'
import Search from './Search';
import Message from './Message';
import EntryBox from './EntryBox';
import TickBox from './Tickbox';

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
  return (
    <div className="calculator">
      <form className="calculator__form" onSubmit={_submitCalculator.bind(this)}>
        <Search label="Choose a Pok&eacute;mon" groups={groups} pokemon={_processPokemon(pokemon)} />
        <Message message="Enter one or more of the following options" />
        <EntryBox id="pokemon" label="How many of these Pok&eacute;mon?" />
        <EntryBox id="candy" label="How many of these candy?" />
        <TickBox id="egg" label="Using a Lucky Egg?" />
        <TickBox id="transfer" label="Transfer evolution?" />
      </form>
    </div>
  );
}
