import "./App.scss";
import React, { useEffect } from "react";
import { useAppDispatch } from "./custom-hooks/reduxHooks.ts";
import { initProjects } from "./redux/slices/projects.slice.ts";
import { Header } from "./components/Header/Header.tsx";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initProjects());
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
