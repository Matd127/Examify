import React, { FC } from "react";
import Timeline from "../Timeline/Timeline";
import QuickActions from "../QuickActions/QuickActions";
import DashboardHero from "./DashboardHero";
import ActiveExams from "../ActiveExams/ActiveExams";

const DashboardPanel: FC = () => {
  return (
    <main className="container-sm col px-0">
      <div className="p-5">
        <DashboardHero />
        <Timeline />
        <QuickActions />
        <ActiveExams />
      </div>
    </main>
  );
};

export default DashboardPanel;
