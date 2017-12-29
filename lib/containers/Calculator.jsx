import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Message from '../components/Message';
import EntryBox from '../components/EntryBox';
import TickBox from '../components/Tickbox';
import {
  setPokemonName,
  setCandyCost,
  setPokemonAmount,
  setCandyAmount,
  setLuckyEgg,
  setTransfer,
  reset
} from '../store/actions/';

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

  _updatePokemonState(e) {
    const pokemonName = e.label;
    const candyCost = e.value;

    this.props.pokemonNameDispatch(pokemonName);
    this.props.candyCostDispatch(candyCost);
  }

  render() {
    const pokemonArray = this._processPokemon(this.props.pokemon);

    return (
      <div className="calculator">
        <form className="calculator__form">
          <Search label="Choose a Pok&eacute;mon" groups={this.props.groups} pokemon={pokemonArray} onChange={(e) => this._updatePokemonState(e)}/>
          <EntryBox id="pokemon" label="How many of these Pok&eacute;mon?" changeCallback={this.props.pokemonAmountDispatch} />
          <EntryBox id="candy" label="How many of these candy?" changeCallback={this.props.candyAmountDispatch} />
          <TickBox id="luckyEgg" label="Using a Lucky Egg?" isChecked={this.props.luckyEgg} clickCallback={this.props.luckyEggDispatch} />
          <TickBox id="transfer" label="Transfer evolution?" isChecked={this.props.transfer} clickCallback={this.props.transferDispatch} />
          <Message message="Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have." overrideClass="message--info" />
          <Message message="You can evolve roughly 60 Pokémon in the 30 minutes a Lucky Egg is active for. So try and get as many candy as you can!" overrideClass="message--hint" />
          <input type="reset" className="calculator__reset" value="Start Again" onClick={this.props.resetDispatch} />
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
    pokemonNameDispatch: (payload) => dispatch(setPokemonName(payload)),
    candyCostDispatch: (payload) => dispatch(setCandyCost(payload)),
    pokemonAmountDispatch: (payload) => dispatch(setPokemonAmount(payload)),
    candyAmountDispatch: (payload) => dispatch(setCandyAmount(payload)),
    luckyEggDispatch: (payload) => dispatch(setLuckyEgg(payload)),
    transferDispatch: (payload) => dispatch(setTransfer(payload)),
    resetDispatch: () => dispatch(reset())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
