import React from "react";

const AddBtn = () => {
  return (
    <div className="add-person float-right text-center ">
      <a
        href="#add-log-modal"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        style={{
          borderRadius: "50%",
          backgroundColor: "#64a4de",
          border: "none",
        }}
      >
        <i
          className="bi bi-plus"
          style={{
            fontSize: "30px",
          }}
        ></i>
      </a>

      <ul style={{ listStyle: "none", paddingLeft: "2px" }}>
        <li style={{ marginTop: "10px" }}>
          <a
            href="#tech-list-modal"
            className="btn btn-info"
            data-bs-toggle="modal"
            style={{
              borderRadius: "50%",
              backgroundColor: "#0dcaf0",
              border: "none",
            }}
          >
            <i
              className="bi bi-list"
              style={{
                fontSize: "30px",
                color: "#fff",
              }}
            ></i>
          </a>
        </li>

        <li style={{ marginTop: "10px" }}>
          <a
            href="#add-tech-modal"
            className="btn btn-success"
            data-bs-toggle="modal"
            style={{
              borderRadius: "50%",
              backgroundColor: "#0dcaf0",
              border: "none",
            }}
          >
            <i
              className="bi bi-bar-chart-steps"
              style={{
                fontSize: "30px",
              }}
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
