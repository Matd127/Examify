import { FC, ReactElement } from "react";

interface StatsCardProps {
  title: string;
  background: string;
  icon?: ReactElement;
}

const StatsCard: FC<StatsCardProps> = ({
  title,
  background,
  icon,
}: StatsCardProps) => {
  return (
    <div className="col-lg-4">
      <div className={`bg-${background} text-white rounded shadow p-5 h-100 `}>
        <div className="d-flex flex-column text-center align-items-center">
          <div>{icon}</div>
          <h2 className="text-white mt-4">{title}</h2>
          <h3 className="text-white mt-3">13</h3>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
