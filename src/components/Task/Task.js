import React from "react";

const Task = ({ task }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <p className="mb-0 text-break me-5">{task}</p>
        <button className="btn text-danger fs-5 fw-bold p-0">X</button>
      </div>
    </li>
  );
};

export default Task;
