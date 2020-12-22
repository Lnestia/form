import React from "react";
import "./styles.css";
import { UserForm } from "./components/UserForm";
import { FormTabs } from "./components/FormTabs";
import { PhoneNumber } from "./components/PhoneNumber";

export default function App() {
  return (
    <div className="App">
      <h1>Sample form</h1>
      <h2>input sample </h2>
      <FormTabs />
      <form>
        <UserForm />
        <PhoneNumber />
      </form>
    </div>
  );
}
