import React from "react";
function Faculties() {
  const fac = [
    {
      name: "rajesh",
      salary: 50000,
    },
    {
      name: "raj",
      salary: 1000,
    },
    {
      name: "daksh",
      salary: 102,
    },
  ];
  return (
    <>
      <table border="2">
        {fac.map((f) => {
          return (
            <tr>
              <td>{f.salary}</td>
              <td>{f.name}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default Faculties;
