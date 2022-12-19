import React from "react";
import { MdOutlineLocationSearching } from "react-icons/md";

export default function Form(props) {
  return (
    <section>
      <div className="container py-3">
        <div className="d-flex justify-content-center">
          <form
            className="d-flex align-items-center justify-content-around my-3"
            onSubmit={props.getData}
          >
            <input
              type="city"
              className="form-control rounded-0"
              placeholder="Enter City Name"
              name="city"
            />
          </form>
        </div>
      </div>
    </section> 
  );
}
