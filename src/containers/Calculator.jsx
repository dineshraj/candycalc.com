import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Message from '../components/Message';
import EntryBox from '../components/EntryBox';
import TickBox from '../components/TickBox';
import {
  setPokemonName,
  setCandyCost,
  setPokemonAmount,
  setCandyAmount,
  setLuckyEgg,
  setTransfer
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

  _cantEvolveAny() {
    const { pokemonAmount, candyAmount, candyCost } = this.props;
    const totalCost = pokemonAmount * candyCost;

    return (totalCost > candyAmount) && (candyAmount / candyCost) < 1;
  }

  _addTransferCandy(numberEvolved) {
    const { transfer } = this.props;
    return transfer ? numberEvolved : 0;
  }

  _canEvolveThemAll() {
    const { pokemonAmount, candyAmount, candyCost } = this.props;
    return ( pokemonAmount * candyCost ) <= (candyAmount + this._addTransferCandy(pokemonAmount));
  }

  _candyLeftOver(numberEvolved) {
    const { candyAmount, candyCost } = this.props;
    const totalCandyAmount = candyAmount + numberEvolved + this._addTransferCandy(numberEvolved);
    return totalCandyAmount - ( numberEvolved * candyCost );
  }

  _xpEarned(numberToEvolve) {
    const { luckyEgg } = this.props;
    const multiplier = luckyEgg ? 1000 : 500;
    return `You'll earn ${multiplier * numberToEvolve} XP`;
  }

  _maximumCanEvolve() {
    const { candyAmount, candyCost} = this.props;
    return Math.floor(candyAmount / candyCost);
  }

  _renderMessage() {
    const { pokemonAmount, candyAmount, pokemonName, candyCost, transfer } = this.props;
    const transferText = transfer ? ' if you transfer your evolutions': '';

    if (!pokemonAmount && !candyAmount) {
      return this.props.message;
    } else if (!pokemonAmount) {
      return `You must have at least one ${pokemonName} if you want to evolve some!`;
    } else if (this._cantEvolveAny()) {
      return `You don't have enough Candy to evolve any of your ${pokemonName}, you need at least ${candyCost}. Catch some more to get more Candy!`;
    } else if (this._canEvolveThemAll()) {
      const candyLeftOver = this._candyLeftOver(pokemonAmount);
      const xpEarnt = this._xpEarned(pokemonAmount);
      return `You can evolve all your ${pokemonName} using your ${candyAmount} Candy${transferText}. You'll have ${candyLeftOver} Candy left over, better go catch some more! ${xpEarnt}`;
    } else {
      const maxCanEvolve = this._maximumCanEvolve();
      const xpEarnt = this._xpEarned(maxCanEvolve);
      const candyLeftOver = this._candyLeftOver(maxCanEvolve);
      return `You can evolve ${maxCanEvolve} of your ${pokemonAmount} ${pokemonName}${transferText}. You'll have ${candyLeftOver} Candy left over, better go catch some more! ${xpEarnt}`;
    }
  }

  componentDidMount() {
    if (navigator !== undefined && ('serviceWorker' in navigator)) {
      navigator.serviceWorker.register('/service-worker.js');
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
      transferDispatch
    } = this.props;
    const pokemonArray = this._processPokemon(pokemon);
    const message = this._renderMessage();

    return (
      <div className="calculator">
        <form className="calculator__form">
          <Message message={message} overrideClass="message--info" />
          <Search label="Choose a Pok&eacute;mon" groups={groups} pokemon={pokemonArray} onChange={(e) => this._updatePokemonState(e)}/>
          <EntryBox id="pokemon" label="How many of these Pok&eacute;mon?" changeCallback={pokemonAmountDispatch}/>
          <EntryBox id="candy" label="How many of these candy?" changeCallback={candyAmountDispatch} />
          <TickBox id="luckyEgg" label="Using a Lucky Egg?" isChecked={luckyEgg} changeCallback={luckyEggDispatch} />
          <TickBox id="transfer" label="Transfer evolution?" isChecked={transfer} changeCallback={transferDispatch} />
          <Message message="You can evolve roughly 60 Pokémon in the 30 minutes a Lucky Egg is active for. So try and get as many candy as you can!" overrideClass="message--hint" />
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
    transferDispatch: (payload) => dispatch(setTransfer(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
