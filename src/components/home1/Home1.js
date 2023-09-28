import React from 'react'
import './Home1.css'
import Boton from '../boton/Boton'

function Home1() {
  return (
    <div className='home'>
      <div className='home-contenedor'>
        <h2>select one category</h2>
         <form>
            <select>
            <option value="">data</option>
            <option value="">informacion</option>
            <option value="">tecnologia</option>
            </select>
            <textarea rows="10" cols=""></textarea>
           <Boton />
         </form>
        
      </div>
    </div>
  )
}

export default Home1
