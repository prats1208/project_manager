import React, { useEffect, useRef, useState } from "react";
import styles from "./Addproject.module.css";

const Addproject = ({projects,setProjects}) => {
  

  const name = useRef();
  const description = useRef();
  const due = useRef();

  

  const submitHandler = () => {
    let newProject = {
      projectname: name.current.value,
      projectdesc: description.current.value,
      projectdue: due.current.value,
      id:Math.floor(Math.random() * 50),
      tasks:[]
    };

    const updateProjects = [...projects, newProject]
    setProjects(updateProjects);

    localStorage.setItem("Projects", JSON.stringify(updateProjects));
    name.current.value = "";
    description.current.value = "";
    due.current.value = "";
  };

  const resetHandler = () => {
    name.current.value = "";
    description.current.value = "";
    due.current.value = "";
  };

  return (
    <div className="container">
      <h1 className="ms-5 mt-4">Add Project</h1>
      <div className="mt-5 w-100  d-flex justify-content-center p-2">
        <form className={`form w-50 p-4 ${styles.formdiv}`}>
          <div className={`${styles.forminput}`}>
            <label htmlFor="pname" className="form-label fw-bold">
              Project Name
            </label>
            <input
              id="pname"
              type="text"
              placeholder="Enter project name"
              className="form-control"
              ref={name}
            />
          </div>
          <div className="form-input">
            <label htmlFor="desc" className="form-label fw-bold">Description</label>
            <textarea
            id="desc"
              placeholder="Enter project description"
              ref={description}
              className="form-control"></textarea>
          </div>
          <div className="form-input">
            <label htmlFor="due" className="form-label fw-bold">Due date</label>
            <input id="due" type="date" className="form-control" ref={due} />
          </div>
          <div className="mt-4">
            <button
              className="btn btn-primary px-3 me-3"
              type="button"
              onClick={submitHandler}>
              Save
            </button>
            <button
              className="btn btn-dark px-3"
              type="reset"
              onReset={resetHandler}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproject;
