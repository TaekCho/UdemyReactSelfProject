import { useState, useRef } from "react";

import DefaultPage from "./components/DefaultPage";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        // update the project without losing the previous data
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <AddProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <DefaultPage onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      {/* <h1 className="my-4 text-center text-2xl font-bold">🦾</h1> */}
      <main className="flex flex-wrap h-screen mt-16">
        <SideBar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
