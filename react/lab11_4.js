import React from "react";
function Product() {
  const product = [
    {
      name: "keeta",
      price: 100,
      quantity: 5,
    },
    {
      name: "meeta",
      price: 100,
      quantity: 5,
    },
    {
      name: "neeta",
      price: 100,
      quantity: 5,
    },
    {
      name: "reeta",
      price: 10,
      quantity: 5,
    },
  ];

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <td>name</td>
            <td>price</td>
          </tr>
        </thead>
        {product.map((p) => {
          return (
            <tr>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default Product;
