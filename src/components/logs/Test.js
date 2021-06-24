import React from "react";

const Test = () => {
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <h4>Enter System Log</h4>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
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

          <div className="row">
            <div className="input-field">
              <select
                name="tech"
                value={tech}
                className="custom-select"
                onChange={(e) => setTech(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="Sam Smith">Sam Smith</option>
                <option value="John Doe">John Doe</option>
                <option value="Sara Wilson">Sara Wilson</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    checked={attention}
                    value={attention}
                    onChange={(e) => setAttention(!attention)}
                  />
                  <span>Need Attention</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} class="btn btn-secondary">
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test;
