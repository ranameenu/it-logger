import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs } from "../../actions/LogActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <div className="shadow bg-body rounded">
      <form class="search-form ">
        <label for="search" class="form-label w-100 d-flex flex-row ">
          <i className="bi bi-search my-auto"></i>
          <input
            type="text"
            class="search-input form-control-lg w-100 border-0"
            placeholder="Search logs..."
            ref={text}
            onChange={onChange}
          />
        </label>{" "}
      </form>
    </div>
  );
};
SearchBar.prototype = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(SearchBar);
