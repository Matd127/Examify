import React, { Dispatch, FC } from "react";
import { BsList } from "react-icons/bs";

interface DashboardNavigationProps {
  setIsSidebarVisible: Dispatch<React.SetStateAction<boolean>>;
}

const DashboardNavigation: FC<DashboardNavigationProps> = ({
  setIsSidebarVisible,
}: DashboardNavigationProps) => {
  return (
    <nav className="d-flex justify-content-between">
      <BsList
        size={40}
        onClick={() => setIsSidebarVisible((prevState) => !prevState)}
      />
      <div
        className="bg-primary rounded-circle"
        style={{
          width: "4rem",
          height: "4rem",
        }}
      ></div>
    </nav>
  );
};

export default DashboardNavigation;
