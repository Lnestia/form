import React, { useState } from "react";
import { UserForm } from "./components/UserForm";
import { PhoneNumber } from "./components/PhoneNumber";
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
const ViewTest = () => {
  return <h1>おはようございます。</h1>;
};

const ViewUserForm = () => {
  return <UserForm />;
};

const ViewPhoneNumber = () => {
  return <PhoneNumber />;
};

//propsの結果について返り値を渡す
const SelectForm = (props) => {
  switch (props.setSelectForm) {
    case 0:
      return <ViewTest />;
    case 1:
      return <ViewUserForm />;
    default:
      return <ViewPhoneNumber />;
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
        <label onClick={(setFormNumber) => onClickSelect(0)} style={selecttab}>
          TEST1
        </label>
        <label onClick={() => onClickSelect(1)} style={selecttab}>
          TEST2
        </label>
        <label onClick={() => onClickSelect(2)} style={selecttab}>
          TEST3
        </label>
        <label onClick={() => onClickSelect(3)} style={selecttab}>
          TEST4
        </label>
      </div>
      <SelectForm setSelectForm={formNumber} />
    </>
  );
};

export default App;
