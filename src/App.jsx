
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Table from './Components/Table'

function App() {
const [search,setsearch]=useState("")
const [currency,setcurrency]=useState([])
const [isloading,setisloading]=useState(true)
useEffect(()=>{
  axios.get('https://openapiv1.coinstats.app/coins?currency=INR',{
    headers:{'X-API-KEY':'DD2tRKb4LZ9y0b+xGRUEpQGnyIknfmCOueg5AkSaXrA='}
}
  ).then(response=>{
    // console.log(response.data)
    setcurrency(response.data.result)
  }).catch(err=>console.log(err))
},[])


useEffect(() => {
  setTimeout(() => setisloading(false), 1000)
}, [])

if(isloading){
  return <h1 style={{color:"white"}}>Loading...</h1>
}


  return (
    <div>
    <Table search={search} setsearch={setsearch}
      currency={currency}
    />    
    </div>
  )
}

export default App
