import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { FC } from 'react';
import AboutUs from './components/aboutus/AboutUs';
import Storage from './components/storage/Storage';


const App : FC = () => {
  return (
   <>
      <Navigation/>
      <Home/>
      <AboutUs/>
      <Storage/>
    </>
  );
}

export default App;
