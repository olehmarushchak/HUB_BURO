import "./App.scss";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./custom-hooks/reduxHooks.ts";
import { initProjects, selectProjects } from "./redux/slices/projects.slice.ts";
import { Header } from "./components/Header/Header.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.tsx";
import { ContactsForm } from "./components/ContactsForm/ContactsForm.tsx";

const App: React.FC = () => {
  const { contactsForm } = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    dispatch(initProjects());
  }, [pathname]);

  return (
    <div className="App">
      {!contactsForm && <ContactsForm />}

      <Header />

      <main className="reservedHeader">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
