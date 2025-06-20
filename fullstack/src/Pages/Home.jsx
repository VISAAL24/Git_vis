import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
         <Welcome name="Virat" country="India"/>
     <Skills skills={['React','Node','Express','MongoDB']}/>
      <h1>Hello World</h1>

    </div>
  )
}

export default Home