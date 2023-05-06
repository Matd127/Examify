import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { FC } from 'react';
import AboutUs from './components/aboutus/AboutUs';


const App : FC = () => {
  return (
   <>
      <Navigation/>
      <Home/>
      <AboutUs/>
    </>
  );
}

export default App;
