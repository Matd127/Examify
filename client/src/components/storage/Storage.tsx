import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import server from "../../assets/cloud-server.png";

const Storage: FC = () => {
  const [animate, setAnimate] = useState(false);
  const { ref: storageRef, inView: storageIsVisible } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (storageIsVisible) {
      setAnimate(true);
    }
  }, [storageIsVisible, animate]);

  return (
    <section id="storage" className="section-storage bg-light mt-3">
      <div className="container w-75" ref={storageRef}>
        <div
          className={`row section-storage--box py-5 ${
            animate ? "animated" : ""
          }`}
        >
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img
              src={server}
              className="section-storage__img p-3"
              alt="server"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="h2 py-2">
              Your data is stored securely on our servers
            </h2>
            <p className="section-storage__info py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              vero pariatur eos veniam laudantium qui placeat eius reprehenderit
              facilis. Fugiat eius accusamus esse animi, dolor repudiandae
              temporibus eum consequatur libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storage;