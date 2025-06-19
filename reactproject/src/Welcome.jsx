import React from 'react'

const Welcome = (props) => {
  return (
    <div>
      <h1>Hello  {props.name}</h1>
      <h1>I am from {props.country}</h1>
    </div>
  )
}

export default Welcome
