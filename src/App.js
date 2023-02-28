import Jumbotron from './Components/Jumbotron';
import Search from './Components/Search';
import Images from './Components/Images';
import useAxios from "./hooks/useAxios";
import { createContext } from 'react';
import {useState} from "react";
import Modal from './Components/Modal';


export const ImageContext = createContext();

function App() {
  const[ResName , setResName] = useState("");

  const[Visvalue , setVisvalue] = useState(false);

  const[Response2 , setResponse2] = useState();
  
  const {response , isLoading , error , fetchdata} = 
  useAxios(`https://api.unsplash.com/search/photos?page=1&query=aesthetic&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  

  const value = {
    response,
    isLoading,
    error,
    fetchdata,
    ResName,
    setResName,
    Visvalue,
    setVisvalue,
    Response2,
    setResponse2
  }

  return (
    <div className='jaya'>
    <ImageContext.Provider value = {value}>
      <Jumbotron><Search/></Jumbotron>
      <Images/>
      <Modal value = {Visvalue} data={Response2}/>
    </ImageContext.Provider>
    </div>
  );
}

export default App;
