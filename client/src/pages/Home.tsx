import { FC } from "react";
import Navigation from "../components/navigation/Navigation";
import Hero from "../components/hero/Hero";
import AboutUs from "../components/aboutus/AboutUs";
import Storage from "../components/storage/Storage";
import Usage from "../components/usage/Usage";
import HowItWorks from "../components/howItWorks/HowItWorks";
import Methods from "../components/methods/Methods";
import Faq from "../components/faq/Faq";
import Start from "../components/start/Start";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Storage />
      <Usage />
      <HowItWorks />
      <Methods />
      <Faq />
      <Start />
    </>
  );
};

export default Home;
