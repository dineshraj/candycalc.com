import React from 'react'
import { SimpleSelect } from "react-selectize";

export default ({ placeholder, groups, pokemon }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <SimpleSelect
      className="search"
      placeholder={placeholder}
      groups={groups}
      options={
        pokemon.map((item) => {
            return {
              groupId: item[1],
              label: item[0],
              value: item[1]
            };
        })
      }
    />
  )
}
