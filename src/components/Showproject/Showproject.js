import React, { useEffect, useRef, useState } from "react";
import styles from "./Showproject.module.css";
import Task from "../Task/Task";

const Showproject = ({ selectedProject, setSelectedProject,setProjects,projects }) => {
  const [taskList, setTaskList] = useState(selectedProject.tasks);

  const taskRef = useRef();


  const clickHandler = (e) => {
    e.preventDefault();
    const task = taskRef.current.value;
    const updatedTaskList = [...selectedProject.tasks, task];
    setTaskList(updatedTaskList);
    const prog_id = selectedProject.id;
    const updatedProjects = projects.map(project => project.id == prog_id ? { ...project, tasks: [...project.tasks,task] }:project);
    const tasks = updatedProjects.map(project => project.id == prog_id ? project.tasks : null)
    setTaskList(tasks)
    console.log(taskList)
    setProjects(updatedProjects)
    // setProjects((prev) => {return [...prev, { ...selectedProject, tasks: updatedTaskList }]});
    taskRef.current.value = "";
  };

  return (
    <div className="container px-5">
      <div
        className={`d-flex flex-column  position-relative  mt-4 py-2 px-4 ${styles.details}`}>
        <h1 className="fs-3">{selectedProject.projectname}</h1>
        <p className="fw-bold mb-2">{selectedProject.projectdue}</p>
        <p className="">{selectedProject.projectdesc}</p>
        <button
          className="btn btn-danger fw-semibold position-absolute end-0 me-3 mt-1"
          style={{ width: "7rem" }}>
          Delete
        </button>
      </div>
      <div className="mt-5 w-50">
        <form className="d-flex">
          <input
            className="form-control"
            type="text"
            placeholder="Enter your task"
            ref={taskRef}
          />
          <button
            className="btn btn-primary fw-semibold ms-4 px-4 text-nowrap"
            onClick={clickHandler}>
            Add Task
          </button>
        </form>
      </div>
      <div className="mt-5 w-50">
        <h4 className="mb-3">Tasks</h4>
        <ul className="list-group list-group-flush">
          {taskList.length != 0 &&
            taskList.map((task, index) => <Task task={task} key={index} />)}
        </ul>
      </div>
    </div>
  );
};

export default Showproject;
