import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

function App() {

  const [areaList, setareaList] = useState([])
  useEffect( () => {
      getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, []);


  const getCountry= async(url)=>{
    const responsive = await axios.get(url).then((res) => {
      setareaList(res.data.data[96].cities)
      console.log(res.data.data[96].cities);
      // res.data.data[96].cities[639]); -- mys
    })
  }

  const values ={areaList}

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};