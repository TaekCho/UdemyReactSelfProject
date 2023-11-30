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

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        // update the project without losing the previous data
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);

  let content;

  if (projectState.selectedProjectId === null) {
    content = <AddProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <DefaultPage onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      {/* <h1 className="my-4 text-center text-2xl font-bold">🦾</h1> */}
      <main className="flex flex-wrap h-screen mt-16">
        <SideBar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;
