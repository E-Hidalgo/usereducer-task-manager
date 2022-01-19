import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Heading } from "./components/Heading";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ContextProvider } from "./context/globalContext";

function App() {
  return (
    <>
      <div className="h.screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route exact path="/" element={<TaskList />} />
              <Route exact path="/add" element={<TaskForm />} />
              <Route exact path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
