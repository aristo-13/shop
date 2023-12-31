import { useEffect, useState } from "react"
import api from "../../api/api"


function useFetch(url) {
const [data,setData] =  useState([])
const [Loading,setLoading] = useState(true)
const [error,setError] = useState(false)


useEffect(() => {
   const FetchData = async () => {
     try {
        const res = await api.get(url)
        setData(res.data.data)
     } catch (error) {
        setError(true)
     }finally{
        setLoading(false)
     }
   }

   setTimeout(FetchData,3000)

},[url])

  return {data,Loading,error}
}

export default useFetch
