import React from "react";

import { Table } from "reactstrap";

const Gamesdetails = (props) => {
  const { data } = props;

  const tableRows =
    data &&
    data.map((element, index) => {
      return (
        <tr key={index+1}>
          <td>{index +1}</td>
          <td>{element.title}</td>
          <td>{element.platform}</td>
          <td>{element.genre}</td>
          <td>{element.editors_choice}</td>
          <td>{element.score}</td>
        </tr>
      );
    });

  return (
    <div className="container table">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Platform</th>
            <th>Genre</th>
            <th>Editor Choise</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </div>
  );
};

export default Gamesdetails;
