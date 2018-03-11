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
  setResults,
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

  _cantEvolve() {
    const { pokemonAmount, candyAmount, candyCost } = this.props;
    return ( pokemonAmount * candyCost ) > candyAmount;
  }

  _canEvolveThemAll() {
    const { pokemonAmount, candyAmount, candyCost } = this.props;
    return ( pokemonAmount * candyCost ) < candyAmount;
  }

  _candyLeftOver() {
    const { pokemonAmount, candyAmount, candyCost } = this.props;
    return candyAmount - ( pokemonAmount * candyCost );
  }

  _renderMessage() {
    const { pokemonAmount, candyAmount, pokemonName, candyCost } = this.props;

    if (!pokemonAmount && !candyAmount) {
      return this.props.message;
    } else if (pokemonAmount === 0) {
      return `You must have at least one ${pokemonName} if you want to evolve some!`
    } else if (this._cantEvolve()) {
      return `You don't have enough Candy to evolve any of your ${pokemonName}, you need at least ${candyCost}. Catch some more to get more Candy!`;
    } else if (this._canEvolveThemAll()) {
      const candyLeftOver = this._candyLeftOver();
      return `You can evolve all your ${pokemonName} using your ${candyAmount} Candy. You\'ll have ${candyLeftOver} Candy left over, better go catch some more!`
    }
  }

  render() {
    const {
      pokemon,
      groups,
      luckyEgg,
      transfer,
      pokemonAmountDispatch,
      candyAmountDispatch,
      luckyEggDispatch,
      transferDispatch,
      resetDispatch
    } = this.props;
    const pokemonArray = this._processPokemon(pokemon);
    const message = this._renderMessage();

    return (
      <div className="calculator">
        <form className="calculator__form">
          <Search label="Choose a Pok&eacute;mon" groups={groups} pokemon={pokemonArray} onChange={(e) => this._updatePokemonState(e)}/>
          <EntryBox id="pokemon" label="How many of these Pok&eacute;mon?" changeCallback={pokemonAmountDispatch}/>
          <EntryBox id="candy" label="How many of these candy?" changeCallback={candyAmountDispatch} />
          <TickBox id="luckyEgg" label="Using a Lucky Egg?" isChecked={luckyEgg} clickCallback={luckyEggDispatch} />
          <TickBox id="transfer" label="Transfer evolution?" isChecked={transfer} clickCallback={transferDispatch} />
          <Message message={message} overrideClass="message--info" />
          <Message message="You can evolve roughly 60 Pokémon in the 30 minutes a Lucky Egg is active for. So try and get as many candy as you can!" overrideClass="message--hint" />
          <input type="reset" className="calculator__reset" value="Start Again" onClick={resetDispatch} />
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
