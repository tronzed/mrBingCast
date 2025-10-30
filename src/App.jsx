import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';

export default function WeatherForecast() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
