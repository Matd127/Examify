import { FC } from "react";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";

const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="bg-light py-5">
      <div className="container w-75">
        <div className="row py-5">
          <div className="col-md-3">
            <h3 className="h3">How it works?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              laboriosam provident odio similique quidem sint voluptatem
              reprehenderit illum eius.
            </p>
          </div>
          <div className="col-md-3 px-md-5">
            <div className="text-secondary py-3">
              <BsFill1CircleFill size={30} />
            </div>
            <h3>Creating Tests</h3>
            <p>
              Teachers or administrators use the application to create tests by
              defining questions, their content, answers, and grading criteria,
              thereby making tests available to participants.
            </p>
          </div>
          <div className="col-md-3 px-md-5">
            <div className="text-secondary py-3">
              <BsFill2CircleFill size={30} />
            </div>
            <h3>Conducting Tests</h3>
            <p>
              Participants log into the application, select the appropriate
              test, solve it online, and the application records their answers
              and the time taken to complete the test.
            </p>
          </div>
          <div className="col-md-3 px-md-5">
            <div className="text-secondary py-3">
              <BsFill3CircleFill size={30} />
            </div>
            <h3>Analyzing Results and Reporting</h3>
            <p>
              After the test is completed, the application automatically
              evaluates the answers, generates results accessible to
              participants and administrators, allowing for result analysis and
              the creation of achievement reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;