import React, { FC } from "react";

const ContactDetails: FC = () => {
  return (
    <div className="">
      <form className="form ">
        <h2 className="py-3">Get in touch</h2>
        <div className="form-group row">
          <div className="col-md-6">
            <label className=" mt-4" htmlFor="name">
              Name
            </label>
            <input
              type="email"
              className="form-control mt-2"
              id="name"
              autoComplete="name"
            />
          </div>

          <div className="col-md-6">
            <label className=" mt-4" htmlFor="email">
              Name
            </label>
            <input
              type="email"
              className="form-control mt-2"
              id="email"
              autoComplete="email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className=" mt-4" htmlFor="subject">
            Subject
          </label>
          <input type="text" className="form-control mt-2" id="subject" />
        </div>
        <div className="form-group">
          <label className=" mt-4" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control mt-2"
            rows={5}
          />
          <button className="btn btn-primary mt-5 p-3">Send message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactDetails;
