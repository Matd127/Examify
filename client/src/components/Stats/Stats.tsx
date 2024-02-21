import StatsCard from "./StatsCard";
import { BsClipboard2, BsPeople, BsExclamationTriangle } from "react-icons/bs";

const Stats = () => {
  return (
    <div className="row ">
      <StatsCard
        title="Number of Exams"
        background="primary"
        icon={<BsClipboard2 size={50} />}
      />
      <StatsCard
        title="Number of Participants"
        background="info"
        icon={<BsPeople size={50} />}
      />
      <StatsCard
        title="Needs your attention"
        background="danger"
        icon={<BsExclamationTriangle size={50} />}
      />
    </div>
  );
};

export default Stats;
