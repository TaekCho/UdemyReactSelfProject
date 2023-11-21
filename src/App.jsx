import {
  BarChart3,
  LayoutDashboard,
  LifeBuoy,
  Receipt,
  Settings,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

import DefaultPage from "./components/DefaultPage";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";

function App() {
  const DEFAULT_DATA = { title: "", description: "", dueDate: "" };

  const [isAdding, setIsAdding] = useState(false);
  const [projectInput, setProjectInput] = useState(DEFAULT_DATA);
  const [addedProject, setAddedProject] = useState([]);

  function inputHandler(event) {
    const { id, value } = event.target;
    setProjectInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  function clickHandlerToAddProject() {
    setAddedProject(projectInput);
    setProjectInput();
  }

  function onAddProject() {
    setIsAdding((prev) => !prev);
  }

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">🦾</h1>
      <main className="flex flex-wrap">
        <SideBar onAddProject={onAddProject} projectData={addedProject} />
        {!isAdding ? (
          <DefaultPage />
        ) : (
          <AddProject
            inputHandler={inputHandler}
            clickHandler={clickHandlerToAddProject}
          />
        )}
      </main>
    </>
  );
}

export default App;
