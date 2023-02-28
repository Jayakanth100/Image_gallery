import { useContext } from "react"
import { ImageContext } from "../App"
import Image from "./Image";
import Skeleton from "./Skeleton";
const Images = () => {

    const {response , isLoading , ResName} = useContext(ImageContext);
    {!isLoading && <h1>Not loading</h1>}
  return (
    <>
      <h1 className = "font-shantell text-center mt-6 text-2xl">Results for {ResName || "??"}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ?<Skeleton item = {10}/>: response.map( (data , key)=> <Image key={key} data = {data}/>)}
      </div>
    </>
  )
}

export default Images
