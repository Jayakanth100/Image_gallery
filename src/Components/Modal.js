import { ImageContext } from "../App"
import {useContext} from 'react'

export default function Modal({value , data}) {
const {setVisvalue} = useContext(ImageContext)

    if(!value)return null;
    const handleclose= (e)=>
    {
      if(e.target.id === "container")
      {
        setVisvalue(false)
      }
    }
    const handleCloseKey = (e)=>
    {
      if(e.key === "Esc")
      {
        setVisvalue(false)
      }
    }
  console.log({data})
  return (
    <div id = "container" onClick = {handleclose} className = " rounded overflow-hidden shadow-lg fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center overflow-hidden">
      <div onKeyDown = {handleCloseKey} className = "bg-white max-w-sm rounded overflow-hidden shadow-lg">
        <img alt ="" className = "h-72 w-full object-cover rounded-lg shadow-md" src={data.data.urls.small}></img>  
        
        <div className="p-4 grid grid-cols-2 gap-6 overflow-hidden max-w-sm">
          <div>
            <b><h1 className="font-montserrat">{data.data.user.username}</h1></b>
            <b><h1 className="font-popins">@ {data.data.user.username}</h1></b>
          </div>
          <div>
            <b><h1 className="font-popins"><i class="fa-brands fa-instagram"></i> { 
data.data.user.instagram_username
}</h1></b>
            <b><h1 className="font-popins"><i class="fa-brands fa-twitter"></i> {data.data.user.twitter_username}</h1></b>
          </div>

          <div>
          <i class="fa-solid fa-heart"></i> {data.data.likes}
          </div>

          <div className="justify-center">
<button class="relative group overflow-hidden pl-5 h-9 flex space-x-1 items-center bg-blue-500">
<span class="relative uppercase text-base text-white">Download</span>
<div aria-hidden="true" class="w-14 bg-blue-600 transition duration-300 -translate-y-5 group-hover:translate-y-5">
  <div class="h-9 flex">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-5 m-auto fill-white" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="h-9 flex">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto fill-white" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  </div>
</div>
</button>
</div>
          
        </div>
      </div>
      

    </div>
  )
}
