import React, { useState } from "react";

export const FormTabs = () => {
  const [selectTab, setSelectTab] = useState([
    "TEST1",
    "TEST2",
    "TEST3",
    "TEST4"
  ]);
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

  return (
    <>
      <div style={selecttabs}>
        {selectTab.map((tab, index) => {
          return (
            <div style={selecttab} className="selecttab">
              <label>{tab}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
