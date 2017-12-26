import React from 'react'
import { SimpleSelect } from "react-selectize";

export default ({ placeholder, groups, pokemon }) => {

  return (
    <SimpleSelect
      className="search"
      placeholder={placeholder}
      groups={groups}
      options={pokemon}
      defaultValue = {{label: pokemon[0].label, value: pokemon[0].value}}
    />
  )
}
