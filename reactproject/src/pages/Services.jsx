import React, { useContext } from 'react'
import { ArrContext } from '../hooks/ArrContext'
const Services = () => {
  const info =useContext(ArrContext)
  return (
    <div>
      <h1>Services</h1>
      <h1>{info.name} <br />{info.age} <br /> {info.DOB} <br /> {info.Dep}</h1>
    </div>
  )
}

export default Services
