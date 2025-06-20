import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Welcome name='tharun' country='India'/>
  <Skills skill={['React','Node','Express','MongoDb']}/>
  <h1>How are you</h1>
    </div>
  )
}

export default Home
