import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = () => {
  return (
    <>
      
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                name={data.name}
                food={data.food}
                Price={data.Price}
                weight={data.weight}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};



const Stock = ({ name, food, Price, weight }) => {
  if (!name) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{food}</h5>
          </td>
          <td>
            <h4>{Price}</h4>
          </td>
          <td>
            <p>{weight}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};