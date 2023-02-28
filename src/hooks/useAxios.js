import axios from "axios"
import {useEffect , useState } from "react"
const useAxios = (params) => {
    const [response , setResponse] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState('');
 
    axios.defaults.baseURL = 'https://api.unsplash.com'

    const fetchdata = async(url)=>
    {
        try{
            setIsLoading(true);
            
            const res = await axios(url);
            setResponse(res.data.results);
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    //here fetchdata is called
    useEffect(()=>{
        fetchdata(params)
    },[params])


  return {
    response,
    isLoading,
    error,
    fetchdata: url =>fetchdata(url)
}
}

export default useAxios
