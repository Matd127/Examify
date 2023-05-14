import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { FC } from 'react';
import AboutUs from './components/aboutus/AboutUs';
import Storage from './components/storage/Storage';
import Usage from './components/usage/Usage';


const App : FC = () => {
  return (
   <>
      <Navigation/>
      <Home/>
      <AboutUs/>
      <Storage/>
      <Usage/>
    </>
  );
}

export default App;
