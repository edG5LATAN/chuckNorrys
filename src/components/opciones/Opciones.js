import React, { useEffect, useState } from 'react'
import './Opciones.css'
import { buscar } from '../../service/apiService'

function Opciones({setCategories,categories}) {

  const [data,setData]=useState([])
   

  useEffect(() => {
    buscar("categories",setData)
  }, [])
  
  const cambio=(e)=>{
     if(e.target.value===''){
      return
     }
    setCategories(e.target.value)

  }
  

  return (
    <select onChange={(e)=>cambio(e)} value={categories}>
     <option disabled value=""  hidden defaultValue="" >Categories</option>
      {
       data.map((data,index)=>{
        return<option key={index} value={data}>{data}</option>
       })
      }
    </select>
  )
}

export default Opciones
