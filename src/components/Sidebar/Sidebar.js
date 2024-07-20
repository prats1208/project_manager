import React from "react";
import "./Sidebar.css";

const Sidebar = ({ projects,setIsClicked,setSelectedProject,setIsNewProject}) => {

  const projectSelectionHandler = (e) =>{
    setIsNewProject(false)
    setIsClicked(true)
    const project_id = e.target.id
    const selected = projects.filter(project => project.id==project_id)
    setSelectedProject(selected[0])
  }

  return (
    <div className="d-flex flex-column align-items-center py-2 col-2 bg-dark sidebar">
      <h3 className="mt-2 mb-3">Projects</h3>
      <span
        style={{
          height: "1.8px",
          width: "100%",
          backgroundColor: "white",
        }}></span>
      <div className="mt-5 ">
        <button className="btn btn-primary mb-4" onClick={()=>{setIsClicked(false);setIsNewProject(true)}}>New Project +</button>
        <div className="d-flex flex-column align-items-center prlist">
          {projects.map((project) => (
            <h4 className="my-2" key={project.id} id={project.id} onClick={projectSelectionHandler}>
              {project.projectname}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
