import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="list-group-item ">
      <div>
        <a
          href="#edit-log-modal"
          data-bs-toggle="modal"
          className={`modal-trigger ${log.attention ? "text-danger" : ""}`}
        >
          {log.message}
        </a>
        <br />
        <span className="text-secondary">
          <span className="text-dark">ID#{log.id}</span>last updated by
          <span className="text-dark"> {log.tech}</span> on{" "}
          <Moment format="MMMM do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="text-dark">
          <i className="bi bi-trash pe-0"></i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
