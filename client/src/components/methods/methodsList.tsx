import {
  BsListCheck,
  BsCheck2Square,
  BsOption,
  BsFillMenuAppFill,
  BsUiChecksGrid,
  BsPencilSquare,
  BsFillMicFill,
  BsWebcam,
} from "react-icons/bs";

export const methodsList = [
  {
    icon: <BsListCheck size={20} />,
    title: "Multiple-choice questions",
  },
  {
    icon: <BsCheck2Square size={20} />,
    title: "Checkbox questions",
  },
  {
    icon: <BsOption size={20} />,
    title: "Statement matching",
  },
  {
    icon: <BsFillMenuAppFill size={20} />,
    title: "Fill in the blank",
  },
  {
    icon: <BsUiChecksGrid size={20} />,
    title: "True/False questions",
  },
  {
    icon: <BsPencilSquare size={20} />,
    title: "Answer questions",
  },
  {
    icon: <BsFillMicFill size={20} />,
    title: "Voice questions",
  },
  {
    icon: <BsWebcam size={20} />,
    title: "Video questions",
  },
];