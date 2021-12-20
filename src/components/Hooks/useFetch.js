import  { useEffect,useState } from "react"
const useFetch = (url) => {

  let [data,setData]=useState([])

  async function getApiData(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setData(data)
  }

  useEffect(()=>{
    getApiData()
  },[url])


  return [data];
}
 
export default useFetch;