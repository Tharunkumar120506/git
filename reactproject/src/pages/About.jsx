//import React from 'react'
import State from '../hooks/State'
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div>
      <Link to='/State'>UseState Example</Link>
      <br />
      <Link to='/Form'>Controlled Form</Link>
      <br />
      <Link to='/Effect'>UseEffect Example</Link>
    </div>
  )
}

export default About
