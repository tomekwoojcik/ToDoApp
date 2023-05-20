/* eslint-disable no-unused-vars */
import React from "react";
import MainTitle from "../components/atoms/mainTitle/mainTitle";
import FormToDo from "../components/organisms/formToDo/formToDo";
import { FormProvider } from "../components/context/formToDoContext/formToDoContext";
import Footer from "../components/organisms/footer/footer";

function ToDoApp() {
  return (
    <main className="background">
      <MainTitle />
      <FormProvider>
        <FormToDo />
        <Footer />
      </FormProvider>
    </main>
  );
}
export default ToDoApp;
