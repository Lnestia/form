import React, { useState } from "react";

import "./styles.css";
import { UserForm } from "./components/UserForm";

export const App = () => {
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
  const [selectTab] = useState(["TEST1", "TEST2", "TEST3", "TEST4"]);
  const onClickSelect = (index) => {
    let setForm = 0;
    switch (index) {
      case 0:
        console.log(0);
        setForm = <p>tdfdddddddddddddddddddddddddest</p>;
        break;
      default:
        console.log("etc");
        setForm = <UserForm />;
        break;
    }

    return (
      <>
        <div>{setForm}</div>
      </>
    );
  };
  return (
    <>
      <div className="App">
        <h1>Sample form</h1>
        <h2>input sample </h2>
        <div style={selecttabs}>
          {selectTab.map((tab, index) => {
            return (
              <div key={tab} style={selecttab} className="selecttab">
                <label onClick={() => onClickSelect(index)}>{tab}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App;
