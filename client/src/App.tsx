import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import { FC } from "react";
import AboutUs from "./components/aboutus/AboutUs";
import Storage from "./components/storage/Storage";
import Usage from "./components/usage/Usage";
import Methods from "./components/methods/Methods";
import HowItWorks from "./components/howItWorks/HowItWorks";

const App: FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <Storage />
      <Usage />
      <HowItWorks />
      <Methods />
    </>
  );
};

export default App;
