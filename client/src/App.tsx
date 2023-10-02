import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import { FC } from "react";
import AboutUs from "./components/aboutus/AboutUs";
import Storage from "./components/storage/Storage";
import Usage from "./components/usage/Usage";
import Methods from "./components/methods/Methods";

const App: FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <Storage />
      <Usage />
      <Methods />
    </>
  );
};

export default App;
