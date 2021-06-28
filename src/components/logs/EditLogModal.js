import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/LogActions";

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      alert("Enter Details first");
    } else {
      const updtLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(updtLog);
    }
  };

  return (
    <div className="modal fade" id="edit-log-modal" style={{ width: "100%" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content ">
          <div className="modal-header ">
            <h4 className="modal-title ">Edit Tech</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body" style={{ margin: "20px 0px 200px 0px" }}>
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
                  className="form-select"
                  value={tech}
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
            <div className="row" style={{ margin: "20px 0px" }}>
              <div className="input-field" style={{ padding: "0px" }}>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
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
              Edit Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
