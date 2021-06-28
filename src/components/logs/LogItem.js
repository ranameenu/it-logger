import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/LogActions";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    alert("Log Deleted");
  };

  return (
    <li className="list-group-item ">
      <div>
        <a
          href="#edit-log-modal"
          data-bs-toggle="modal"
          className={`modal-trigger ${log.attention ? "text-danger" : ""}`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="text-secondary">
          <span className="text-dark">ID#{log.id}</span>last updated by
          <span className="text-dark"> {log.tech}</span> on{" "}
          <Moment format="MMMM do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="text-dark">
          <i className="bi bi-trash pe-0"></i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
