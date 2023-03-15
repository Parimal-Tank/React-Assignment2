import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const Gamesdetails = (props) => {
const {data}= props

console.log(data)  

// console.log("This is Total Data", props.data)

// console.log('This is Search Data', props.searchData);

  const tableRows = data && data.map((element, index) => {

      return (
        <tr>
          <td>{index}</td>
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
        <tbody>
          {/* {searchedData && searchedData.length > 0 ? searchedData : tableRows} */}
          {tableRows}
        </tbody>
      </Table>
    </div>
  );
};

export default Gamesdetails;

