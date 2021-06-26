import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/LogActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="list-group ">
      <h2 className="text-center m-1 p-2">System Logs</h2>

      {!loading && logs.length === 0 ? (
        <p className="">No Logs to show</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
