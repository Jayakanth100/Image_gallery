import {useContext, useState} from 'react'
import { ImageContext } from '../App';
const Search = () => {
  const[Searchval , setSearchval] = useState("");
  const {fetchdata , setResName} = useContext(ImageContext);
  const handlechange = (e)=>
  {
    setSearchval(e.target.value)
  }
  const handlesubmit = (s)=>
  {
    fetchdata(`search/photos?page=1&query=${Searchval}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearchval("")
    setResName(Searchval)
  }
  const handleEnter = (k)=>
  {
    if(k.key === 'Enter'){
      fetchdata(`search/photos?page=1&query=${Searchval}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchval("")
      setResName(Searchval)

    }
  }
  return (
    <div className="flex">
      <input
      type = "search"
      className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500
      focus:ring-2 rounded-tl rounded-bl"
      placeholder='Search something'
      value={Searchval}
      onChange = {handlechange}
      onKeyDown = {handleEnter}
      />
      <button
      onClick={handlesubmit}
      className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      disabled = {!Searchval}
      >Search
      </button>

    </div>
  )
}

export default Search