import { TfiWrite, TfiPencilAlt, TfiHome } from "react-icons/tfi";
import {
  BsTrophy,
  BsPencil,
  BsPersonUp,
  BsClipboardData,
  BsPersonBadge,
  BsPass,
} from "react-icons/bs";

export const usesList = [
  {
    name: "schools",
    uses: [
      {
        title: "Classroom exams",
        description: "Administering and grading classroom exams online",
        icon: <TfiWrite className="usage-card__icon" />,
      },
      {
        title: "Homeworks",
        description: "Administering and grading classroom exams online",
        icon: <TfiPencilAlt className="usage-card__icon" />,
      },
      {
        title: "Final exams",
        description:
          "Conducting final exams online, such as high school graduation exams",
        icon: <TfiHome className="usage-card__icon" />,
      },
      {
        title: "Preparation for competitions.",
        description:
          "Providing online tests to students for competition and olympiad preparation",
        icon: <BsTrophy className="usage-card__icon" />,
      },
      {
        title: "Educational diagnosis",
        description:
          "Using online tests to diagnose individual students' needs",
        icon: <BsPencil className="usage-card__icon" />,
      },
    ],
  },
  {
    name: "universities",
    uses: [
      {
        title: "Admissions",
        description:
          "Conducting online entrance exams during the admission process",
        icon: <BsPencil className="usage-card__icon" />,
      },
      {
        title: "Student knowledge assessment",
        description: "Student knowledge assessment",
        icon: <TfiWrite className="usage-card__icon" />,
      },
      {
        title: "Online training",
        description:
          "Providing online courses with progress-assessment tests for students",
        icon: <BsPersonUp className="usage-card__icon" />,
      },
    ],
  },
  {
    name: "companies",
    uses: [
      {
        title: "Employee training",
        description:
          "Conducting online training and assessing training effectiveness",
        icon: <BsPersonUp className="usage-card__icon" />,
      },
      {
        title: "Recruitment and selection",
        description:
          "Using online tests to assess candidate skills and competencies",
        icon: <BsPersonBadge className="usage-card__icon" />,
      },
      {
        title: "Employee evaluation",
        description:
          "Evaluating employee performance and identifying areas for developments",
        icon: <BsClipboardData className="usage-card__icon" />,
      },
      {
        title: "Certifications and accreditations",
        description:
          "Offering certificates or accreditations through online tests for employees or business partners",
        icon: <BsPass className="usage-card__icon" />,
      },
    ],
  },
];