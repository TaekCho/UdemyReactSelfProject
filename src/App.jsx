import { useState } from "react";

import DefaultPage from "./components/DefaultPage";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";

function App() {
  // array type data
  const MOCK_DATA = [
    {
      title: "Title_1",
      description: "default_description",
      dueDate: "default_date",
    },
    {
      title: "Title_2",
      description: "second_default_description",
      dueDate: "second_default_date",
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
  };

  const [isAdding, setIsAdding] = useState(false);
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
      },
      ...prevProjectList,
    ]);
    // empty the project input to receive new data
    setProjectInput({ ...DEFAULT_DATA });
  }

  // pop up an input page on the main
  function onAddProject() {
    setIsAdding((prev) => !prev);
  }

  // console.log(projectList[0][0].title);

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">🦾</h1>
      <main className="flex flex-wrap">
        <SideBar onAddProject={onAddProject} projectList={projectList} />
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
