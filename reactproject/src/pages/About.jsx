//import React from 'react'
import { useContext } from 'react'
import State from '../hooks/State'
import {Link} from "react-router-dom"
import { UserContext } from '../hooks/UserContext'
const About = () => {
  const name=useContext(UserContext)
  return (
    <div>
      <h1>Hi! {name}</h1>
      <Link to='/State'>UseState Example</Link>
      <br />
      <Link to='/Form'>Controlled Form</Link>
      <br />
      <Link to='/Effect'>UseEffect Example</Link>
      <br />
      <Link to='/Reducer'>UseReducer Example</Link>
    </div>
  )
}

export default About
