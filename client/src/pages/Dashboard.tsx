import { useState } from "react";
import DashboardPanel from "../components/Dashboard/DashboardPanel";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth > 768
  );

  return (
    <div className="container-fluid dashboard">
      <div className="row flex-nowrap">
        {isSidebarVisible && <Sidebar />}
        <DashboardPanel setIsSidebarVisible={setIsSidebarVisible} />
      </div>
    </div>
  );
};

export default Dashboard;
