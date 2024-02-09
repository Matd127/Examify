import React, { FC } from "react";
import Timeline from "../Timeline/Timeline";
import Stats from "../Stats/Stats";
import QuickActions from "../QuickActions/QuickActions";
import DashboardHero from "./DashboardHero";

const DashboardPanel: FC = () => {
  return (
    <main className="container-sm col px-0 bg-light">
      <DashboardHero />
      <div className="container-sm" style={{ transform: "TranslateY(-10%)" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card dashboard-card h-100 px-5 ">
              <h5 className="pt-4 text-primary fs-2">Recent activity</h5>
              <div className="card-body">
                <Timeline />
              </div>
            </div>
          </div>
          <div className="col-md-8 ">
            <Stats />
          </div>
        </div>
        <QuickActions />
      </div>
    </main>
  );
};

export default DashboardPanel;
