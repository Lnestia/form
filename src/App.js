import React, { useState } from "react";
import { InputForm } from "./components/InputForm";
import { UserForm } from "./components/UserForm";
import { SampleForm } from "./components/SampleForm";
import { TestForm } from "./components/TestForm";
import "./styles.css";

//Tab関係
const selecttab = {
  width: "25%",
  color: "green",
  float: "left"
};
const selecttabs = {
  margin: " auto",
  width: "60%",
  padding: "50px",
  TextAlign: "center"
};

//Form関係
const ViewInputForm = () => {
  return <InputForm />;
};

const ViewUserForm = () => {
  return <UserForm />;
};

const ViewSampleForm = () => {
  return <SampleForm />;
};
const ViewTestForm = () => {
  return <TestForm />;
};

//propsの結果について返り値を渡す
const SelectForm = (props) => {
  switch (props.setSelectForm) {
    case 0:
      return <ViewInputForm />;
    case 1:
      return <ViewUserForm />;
    case 2:
      return <ViewSampleForm />;
    case 3:
      return <ViewTestForm />;
    default:
      return <ViewInputForm />;
  }
};

// nowHour={}の中の数字を変えれば画面に表示される挨拶が変わる。
const App = () => {
  const [formNumber, setFormNumber] = useState(0);
  const onClickSelect = (number) => {
    console.log(number);
    setFormNumber(number);
  };

  return (
    <>
      <div style={selecttabs}>
        <label onClick={() => onClickSelect(0)} style={selecttab}>
          InputoForm
        </label>
        <label onClick={() => onClickSelect(1)} style={selecttab}>
          UserForm
        </label>
        <label onClick={() => onClickSelect(2)} style={selecttab}>
          SampleForm
        </label>
        <label onClick={() => onClickSelect(3)} style={selecttab}>
          TestForm
        </label>
      </div>
      <SelectForm setSelectForm={formNumber} />
    </>
  );
};

export default App;
