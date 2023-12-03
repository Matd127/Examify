import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar /> <main className="col ps-md-2 bg-light">Dashboard</main>
      </div>
    </div>
  );
};

export default Dashboard;
