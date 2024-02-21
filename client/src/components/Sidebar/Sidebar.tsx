import { Link } from "react-router-dom";
import {
  BsGrid,
  BsClipboard2,
  BsPeople,
  BsGear,
  BsHeadset,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="sidebar min-vh-100 col-auto p-5">
      <h2 className="h2 fw-bolder text-center pb-4">Examify</h2>

      <div className="sidebar__nav list-group py-4 ">
        <h3 className="h3 fw-bold mb-3">Core</h3>
        <div className="d-flex align-items-center">
          <BsGrid size={16} />
          <Link to="" className="mx-3 py-3">
            Dashboard
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <BsClipboard2 size={16} />
          <Link to="" className="mx-3 py-3">
            Tests
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <BsPeople size={16} />
          <Link to="" className="mx-3 py-3">
            Groups
          </Link>
        </div>
      </div>

      <div className="sidebar__nav list-group py-4">
        <h3 className="h3 fw-bold mb-3">Help</h3>
        <div className="d-flex align-items-center">
          <BsGear size={16} />
          <Link to="" className="mx-3 py-3">
            Settings
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <BsHeadset size={16} />
          <Link to="" className="mx-3 py-3">
            Support
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
