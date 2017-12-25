import React from 'react'
import Search from './Search';

function _submitCalculator() {

}

export default ({ groups, pokemon }) => {
  return (
    <div className="calculator">
      <form onSubmit={_submitCalculator.bind(this)}>
        <Search label="Choose a Pok&eacute;mon" groups={groups} pokemon={pokemon} />
      </form>
    </div>
  )
}
