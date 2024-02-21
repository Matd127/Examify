import { Dispatch, FC } from "react";
import Timeline from "../Timeline/Timeline";
import QuickActions from "../QuickActions/QuickActions";
import DashboardHero from "./DashboardHero";
import ActiveExams from "../ActiveExams/ActiveExams";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";
import Stats from "../Stats/Stats";

interface DashboardProps {
  setIsSidebarVisible: Dispatch<React.SetStateAction<boolean>>;
}

const DashboardPanel: FC<DashboardProps> = ({
  setIsSidebarVisible,
}: DashboardProps) => {
  return (
    <main className="container-sm col px-0">
      <div className="p-5">
        <DashboardNavigation setIsSidebarVisible={setIsSidebarVisible} />
        <DashboardHero />
        <Stats />
        <Timeline />
        <QuickActions />
        <ActiveExams />
      </div>
    </main>
  );
};

export default DashboardPanel;
