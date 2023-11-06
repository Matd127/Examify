import { FC } from "react";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/Aboutus/AboutUs";
import Storage from "../components/Storage/Storage";
import Usage from "../components/Usage/Usage";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Methods from "../components/Methods/Methods";
import Faq from "../components/Faq/Faq";
import Start from "../components/Start/Start";

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
