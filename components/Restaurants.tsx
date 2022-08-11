import React from "react";
import { tableHeadings } from "../constants/tableHeadings";

const Restaurants = () => {
  return (
    <div className="list-group">
      <table className="table table-dark table-hover">
        <thead>
          <tr className="table-primary">
            {tableHeadings.map((item) => (
              <th scope="col" key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Milan Poudel</td>
                <td>New York</td>
                <td>3</td>
                <td>Rating</td>
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Restaurants;
