import React, { useEffect, useRef, useState } from 'react'
import './Home1.css'
import Opciones from '../opciones/Opciones'
import { buscar } from '../../service/apiService.js'


function Home1() {

  const sonido=useRef("")
  const [imagen,setimagen]=useState("")
  const [audio,setaudio]=useState("")
  const [categories,setcategories]=useState("")
  const [chiste,setchiste]=useState({})

  


  const risas=[
    {
      "nombre":"bobesponja",
      "audio":"audio/bobesponja.mp3",
      "imagen":"https://cdn.getstickerpack.com/storage/uploads/sticker-pack/el-paquete-de-bob-esponja/sticker_12.png?0dbe53159ffc5be8af64362d82d3adba"
    },
    {
      "nombre":"chucky",
      "audio":"audio/chucky.mp3",
      "imagen":"https://img.ecartelera.com/noticias/47700/47768-m.jpg"
    },
    {
      "nombre":"calamardo",
      "audio":"audio/calamardo.mp3",
      "imagen":"https://pbs.twimg.com/media/E38Hx6BWYAIy78v.jpg"
    },
    {
      "nombre":"goofy",
      "audio":"audio/goofy.mp3",
      "imagen":"https://i.pinimg.com/736x/b7/38/75/b738754342c316e27e933f1ad0854378.jpg"
    },
    {
      "nombre":"minion",
      "audio":"audio/minions.mp3",
      "imagen":"https://i.pinimg.com/originals/b8/4e/30/b84e301bc8e58188528c40dca744a401.jpg"
    },
    {
      "nombre":"thriller",
      "audio":"audio/thriller.mp3",
      "imagen":"https://www.pascalhaumont.fr/wp-content/uploads/2016/11/thriller.jpg"
    },
  ]

  const mostrar=(e)=>{
   e.preventDefault()
   if(categories==""){
     return
   }else{
     mostrarTodo()
     setcategories("")
   }
 
  }
  const mostrarTodo=()=>{
    aleatorio()
     buscarChiste()
  }
  
  const buscarChiste=()=>{
   buscar(`random?category=${categories}`,setchiste).catch(error=>console.log(error))
  }

  const aleatorio=()=>{
    const tipoRisa=Math.round(Math.random()*6);
    setimagen(risas[tipoRisa].imagen)
    setaudio(risas[tipoRisa].audio)
  }

  return (
    <div className='home'>
      <div className='home-contenedor'>
        <h2>Select one category</h2>
         <form onSubmit={mostrar}>
           <Opciones setCategories={setcategories} categories={categories}/>
            <textarea rows="8" cols="" readOnly value={chiste.value}></textarea>
          {
            imagen!=""?<div className='imagen-contenedor'>
            <img className='img' src={imagen} alt="cargando..."/>
          </div>:<p>Select Category</p>
          }
         <div>
           <button type='submit'>Search</button>
         </div>
         </form>
        
      </div>
      <audio autoPlay ref={sonido} src={audio}>
        
      </audio>
    </div>
  )
}

export default Home1
