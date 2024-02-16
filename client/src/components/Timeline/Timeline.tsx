import React, { FC } from "react";

const activities = [
  {
    id: 1,
    time: "58 minutes ago",
    title: "You added question to an exam",
  },
  {
    id: 2,
    time: "267 minutes ago",
    title: "You created an exam",
  },
];
const Timeline: FC = () => {
  return (
    <div className="mt-5">
      <h2 className="h2 fw-bold mb-3">Activity</h2>
      <div className="timeline">
        {activities.map((activity, i) => (
          <div key={i} className="timeline-event">
            <div className={`timeline-point bg-black`}></div>
            <div className="timeline-info">
              <h3 className="title mb-0">{activity.title}</h3>
              <p className="time mb-4">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
