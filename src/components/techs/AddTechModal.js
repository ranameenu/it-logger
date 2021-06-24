import React, { useState } from "react";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      alert("Please enter tech information");
    } else {
      console.log(firstName, lastName);

      //   Clear Field
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div className="modal fade" id="add-tech-modal" style={{ width: "75%" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content ">
          <div className="modal-header ">
            <h4 className="modal-title ">Add New Technician</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="input-field">
                <input
                  type="text"
                  className="form-control"
                  name="fistname"
                  value={firstName}
                  placeholder="firstname"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="input-field">
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={lastName}
                  placeholder="lastname"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <br />
          </div>
          <div className="modal-footer ">
            <a href="#!" onClick={onSubmit} className="btn btn-success">
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTechModal;
