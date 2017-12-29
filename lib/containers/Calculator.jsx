import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Message from '../components/Message';
import EntryBox from '../components/EntryBox';
import TickBox from '../components/Tickbox';
import { setLuckyEgg } from '../store/actions/';

class Calculator extends React.Component {

  _processPokemon(pokemon) {
    return pokemon.map((item) => {
      return {
        groupId: item[1],
        label: item[0],
        value: item[1]
      };
    });
  }

  _resetApp() {
    console.log('resetting app');
  }

  _updateEntryBox(type, e) {
    console.log('updating', type, 'with value', e.target.value);
  }

  _updateTickBox(type, checked) {
    console.log('updating', type, 'with value', checked);
  }

  render() {
    const pokemonArray = this._processPokemon(this.props.pokemon);

    return (
      <div className="calculator">
        <form className="calculator__form">
          <Search label="Choose a Pok&eacute;mon" groups={this.props.groups} pokemon={pokemonArray} />
          <Message message="Enter one or more of the following options" />
          <EntryBox id="pokemon" label="How many of these Pok&eacute;mon?" changeCallback={(e) => this._updateEntryBox('pokemonNum', e)} />
          <EntryBox id="candy" label="How many of these candy?" changeCallback={(e) => this._updateEntryBox('candyNum', e)} />
          <TickBox id="luckyEgg" label="Using a Lucky Egg?" isChecked={this.props.luckyEgg} clickCallback={(checked) => this._updateTickBox('luckyEgg', checked)} />
          <TickBox id="transfer" label="Transfer evolution?" isChecked={this.props.transfer} clickCallback={(checked) => this._updateTickBox('transfer', checked)} />
          <Message message="Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have." overrideClass="message--info" />
          <Message message="You can evolve roughly 60 Pokémon in the 30 minutes a Lucky Egg is active for. So try and get as many candy as you can!" overrideClass="message--hint" />
          <input type="reset" className="calculator__reset" value="Start Again" onClick={this._resetApp.bind(this)} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
