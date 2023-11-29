import { useState, useRef } from "react";

import DefaultPage from "./components/DefaultPage";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  // array type data
  const MOCK_DATA = [
    {
      title: "Title_1",
      description: "default_description",
      dueDate: "default_date",
      tasks: [
        "Practice, practice!",
        "Learn advanced concepts",
        "Learn the basics",
      ],
    },
    {
      title: "Learning React",
      description: "second_default_description",
      dueDate: "Dec 29, 2024",
      tasks: [
        "Practice, practice!",
        "Learn advanced concepts",
        "Learn the basics",
      ],
    },
  ];
  // TESTING TO MAP 'MOCK DATA'
  // MOCK_DATA.map((each) => {
  //   console.log(each);
  // });

  const DEFAULT_DATA = {
    title: "",
    description: "",
    dueDate: "",
    tasks: [],
  };

  const [showSection, setShowSection] = useState("");
  const [projectInput, setProjectInput] = useState({ ...DEFAULT_DATA });
  // set projectList value by making a deep copy
  const [projectList, setProjectList] = useState([...MOCK_DATA]);

  function inputHandler(event) {
    const { id, value } = event.target;
    setProjectInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  // add a project to the projectList to render it on the sidebar
  function clickHandlerToAddProject(event) {
    setProjectList((prevProjectList) => [
      {
        title: projectInput.title,
        description: projectInput.description,
        dueDate: projectInput.dueDate,
        tasks: projectInput.tasks,
      },
      ...prevProjectList,
    ]);
    // empty the project input to receive new data
    setProjectInput({ ...DEFAULT_DATA });
  }

  // pop up an input page on the main
  function onAddProject() {
    setShowSection("addProject");
  }

  function onShowProject() {
    setShowSection("showProject");
  }

  // console.log(projectList[0][0].title);

  return (
    <>
      {/* <h1 className="my-4 text-center text-2xl font-bold">🦾</h1> */}
      <main className="flex flex-wrap h-screen mt-16">
        <SideBar
          onAddProject={onAddProject}
          projectList={projectList}
          showProject={onShowProject}
        />
        {projectList.length === 0 && <DefaultPage />}
        {showSection === "addProject" && (
          <AddProject
            inputHandler={inputHandler}
            clickHandlerToAddProject={clickHandlerToAddProject}
          />
        )}
        {showSection === "showProject" && <ProjectInfo />}
        {/* <ProjectInfo projectList={projectList[1]} /> */}

        <DefaultPage onAddProject={onAddProject} />

        {/* : (
          <AddProject
            inputHandler={inputHandler}
            clickHandler={clickHandlerToAddProject}
          />
        )} */}
      </main>
    </>
  );
}

export default App;
