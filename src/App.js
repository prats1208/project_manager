import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Addproject from "./components/Addproject/Addproject";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Showproject from "./components/Showproject/Showproject";
import { Route, Router } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);
  const [isNewProject, setIsNewProject] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  useEffect(() => {
    
    const all_projects = JSON.parse(localStorage.getItem("Projects"));
    if (all_projects) {
      setProjects(all_projects);
    }
  }, []);

  return (
    <>
      <div className="row col-12 m-0" style={{ height: "100vh" }}>
        <Sidebar
          projects={projects}
          isClicked={isClicked}
          isNewProject={isNewProject}
          setIsNewProject={setIsNewProject}
          setIsClicked={setIsClicked}
          setSelectedProject={setSelectedProject}
        />
        <div className="col-10 p-0">
          {isClicked && (
            <Showproject
              projects={projects}
              setProjects={setProjects}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          )}
          {isNewProject && (
            <Addproject projects={projects} setProjects={setProjects} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
