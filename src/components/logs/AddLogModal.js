import React, { useState } from "react";
import { connect } from "react-redux";
import { addLog } from "../../actions/LogActions";
import PropTypes from "prop-types";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      alert("Enter Details first");
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);
      // alert(`log added by ${tech}`);

      //   Clear Field
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div className="modal fade" id="add-log-modal" style={{ width: "75%" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content ">
          <div className="modal-header ">
            <h4 className="modal-title ">Enter System Log</h4>
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
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <label htmlFor="message" className="active">
                  Log Message
                </label>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="input-field">
                <select
                  name="tech"
                  value={tech}
                  className="form-select"
                  onChange={(e) => setTech(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="Sam Smith">Sam Smith</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Sara Wilson">Sara Wilson</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="input-field">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-select"
                      checked={attention}
                      value={attention}
                      onChange={(e) => setAttention(!attention)}
                    />
                    <span> Need Attention</span>
                  </label>
                </p>
              </div>
            </div>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModal);
