import React from "react";

export const UserForm = () => {
  const formcolumn = {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px"
  };

  return (
    <>
      <div>
        <label style={formcolumn}>
          PhoneNumber:
          <input type="text" />
        </label>

        <label style={formcolumn}>
          PhoneNumber:
          <input type="text" />
        </label>

        <label style={formcolumn}>
          PhoneNumber:
          <input type="text" />
        </label>

        <label style={formcolumn}>
          PhoneNumber:
          <input type="text" />
        </label>

        <input type="submit" value="Submit" />
      </div>
    </>
  );
};
