import { FC } from "react";

interface IconProps {
  icon: JSX.Element;
}

export const AboutIcon: FC<IconProps> = ({ icon }) => {
  return (
    <svg
      className="about-card__icon"
      width="60"
      height="60"
      viewBox="0 0 60 60"
    >
      <defs>
        <linearGradient id="grad" x1="25%" y1="0%" x2="100%" y2="75%">
          <stop offset="09%" stopColor="rgba(35, 58, 175, 1)" />
          <stop offset="85%" stopColor="rgba(132, 42, 199, 1)" />
        </linearGradient>
      </defs>
      {icon}
    </svg>
  );
};