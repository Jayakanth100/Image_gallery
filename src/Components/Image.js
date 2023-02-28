import { ImageContext } from "../App"
import {useContext} from 'react'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Image = ({data}) => {

const {setVisvalue , setResponse2} = useContext(ImageContext)
  const handleclick = ()=>
  {
    setVisvalue(true)
    setResponse2({data})
  }
  return (
    <div onClick = {handleclick} target = "_blank" rel = "noreferrer" className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className = "h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt = ""/>
        <div className="px-6 py-4">
          <div className="font-montserrat text-black-800 text-xl mb-2">
            {data.user.username}
          </div>
          <button><strong><FontAwesomeIcon icon={faThumbsUp} /> {data.likes}</strong></button>
        </div>
    </div>
  )
}
export default Image

