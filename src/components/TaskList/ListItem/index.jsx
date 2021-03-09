import React from 'react'

const ListItem = props => {
  const { itemBody } = props
  return <li> {itemBody} </li>
}

export default ListItem
