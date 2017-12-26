import React from 'react';
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

function _resetApp() {
  console.log('resetting app');
}

function _updateEntryBox(type, e) {
  console.log('updating', type, 'with value', e.target.value);
}

function _updateTickBox(type, checked) {
  console.log('updating', type, 'with value', checked);
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: 'Pidgey',
      candyCost: 12,
      pokemonNum: null,
      candyNum: null,
      luckyEgg: false,
      transfer: false,
      error: false
    }
  }

  render() {
    return (
      <div className="calculator">
        <form className="calculator__form" onSubmit={_submitCalculator.bind(this)}>
          <Search label="Choose a Pok&eacute;mon" groups={this.props.groups} pokemon={_processPokemon(this.props.pokemon)} />
          <Message message="Enter one or more of the following options" />
          <EntryBox id="pokemon" label="How many of these Pok&eacute;mon?" changeCallback={(e) => _updateEntryBox('pokemonNum', e)} />
          <EntryBox id="candy" label="How many of these candy?" changeCallback={(e) => _updateEntryBox('candyNum', e)} />
          <TickBox id="egg" label="Using a Lucky Egg?" clickCallback={(checked) => _updateTickBox('luckyEgg', checked)} />
          <TickBox id="transfer" label="Transfer evolution?" clickCallback={(checked) => _updateTickBox('transfer', checked)} />
          <Message message="Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have." overrideClass="message--info" />
          <Message message="You can evolve roughly 60 Pokémon in the 30 minutes a Lucky Egg is active for. So try and get as many candy as you can!" overrideClass="message--hint" />
          <input type="reset" className="calculator__reset" value="Start Again" onClick={_resetApp} />
        </form>
      </div>
    );
  }
}

export default Calculator;
