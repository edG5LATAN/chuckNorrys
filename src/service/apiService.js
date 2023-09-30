import axios from "axios";


export const api = axios.create({
  baseURL:"https://api.chucknorris.io/jokes/"
  // baseURL:"https://api.chucknorris.io/jokes/random?category={category}"
})

export const buscar= async(url,setdata)=>{
  const respuesta=await api.get(url);
  setdata(respuesta.data)
}