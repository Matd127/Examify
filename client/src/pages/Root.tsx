import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

const RootLayout: FC = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
