import DashboardPanel from "../components/Dashboard/DashboardPanel";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <DashboardPanel />
      </div>
    </div>
  );
};

export default Dashboard;
