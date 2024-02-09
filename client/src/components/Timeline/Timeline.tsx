import React, { FC } from "react";

const activities = [
  {
    id: 1,
    time: "58 minutes ago",
    title: "Edited exam - English C2",
    color: "primary",
  },
  {
    id: 2,
    time: "267 minutes ago",
    title: "Created exam - English C2",
    color: "success",
  },
];
const Timeline: FC = () => {
  return (
    <div className="timeline">
      {activities.map((activity, i) => (
        <div key={i} className="timeline-event">
          <div className={`timeline-point bg-${activity.color}`}></div>
          <div className="timeline-info">
            <p className="time">{activity.time}</p>
            <p className="title">{activity.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
