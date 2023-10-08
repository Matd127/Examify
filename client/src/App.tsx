import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import { FC } from "react";
import AboutUs from "./components/aboutus/AboutUs";
import Storage from "./components/storage/Storage";
import Usage from "./components/usage/Usage";
import Methods from "./components/methods/Methods";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Faq from "./components/faq/Faq";
import Start from "./components/start/Start";
import Footer from "./components/footer/Footer";

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
      <Faq />
      <Start />
      <Footer />
    </>
  );
};

export default App;
