import React from "react";
function Student() {
  const stu = [
    {
      name: "pujan",
      roll: 119,
      gender: "male",
    },
    {
      name: "nisarg",
      roll: 113,
      gender: "male",
    },
    {
      name: "donkey",
      roll: 134,
      gender: "female",
    },
    {
      name: "aum",
      roll: 106,
      gender: "male",
    },
  ];

  return (
    <>
      <table border={2}>
        {stu.map((s) => {
          return (
            <tr>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.gender}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default Student;
