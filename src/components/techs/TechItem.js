import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className="list-group-item">
      <div>
        {" "}
        {tech.firstName}
        {tech.lastName}
        <a href="#!" className="text-dark">
          <i className="bi bi-trash "></i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
