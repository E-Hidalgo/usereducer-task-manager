import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Heading } from "./components/Heading";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route exact path="/" element={<TaskList />} />
        <Route exact path="/add" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
