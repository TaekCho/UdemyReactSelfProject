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
  const [isAdding, setIsAdding] = useState(false);

  function handleAddProject() {
    setIsAdding(true);
  }

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">🦾</h1>
      <main className="flex flex-wrap">
        <SideBar onAddProject={handleAddProject} />
        {!isAdding ? <DefaultPage /> : <AddProject />}
      </main>
    </>
  );
}

export default App;
