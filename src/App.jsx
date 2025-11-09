import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import { createContext, useState } from 'react';
export const GlobalContext = createContext();
import { getCast } from './utils/function'

export default function WeatherForecast() {

  const [globalData, setGlobalData] = useState('jaipur');

  const [loader, setLoader] = useState(true);


  const getWeather = async (val) => {
    const data = await getCast(val);
    setGlobalData(data)
    setLoader(false);
  }


  return (
    <>
      <GlobalContext.Provider value={{ globalData, setGlobalData, getWeather, loader, setLoader }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}
