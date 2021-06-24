import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
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

export default Logs;
