import { FC } from "react";
import { usesList } from "./usesList";

interface Institutions {
  name: string;
}

const UsageItems: FC<Institutions> = ({ name }) => {
  return (
    <>
      {usesList
        .find((uses) => uses.name === name)
        ?.uses.map((use) => (
          <div className="col-lg-4 col-md-6 mt-4" key={use.title}>
            <div className="card usage-card p-5 my-2">
              <div className="card-body p-5">
                {use?.icon}
                <h3 className="usage-card__title fw-bolder py-3">
                  {use.title}
                </h3>
                <p className="usage-card__text py-2">{use.description}</p>
                <a className="usage-card__link" href="/home">
                  Card Link
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default UsageItems;
