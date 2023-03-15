import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Gamesdetails from "./Gamesdetails";
import axios from "axios";

const Search = (props) => {

    const [data, setData] = useState([{}]);

    const [searchData , setSearchData] = useState([]);

    const [inputText, setInputText] = useState("");

    const loadData = async()=> {
        const result = await axios(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
        );
        result.data.splice(0, 1);
        setData(result.data);
        setSearchData(result.data);
      }
    
      useEffect(() => {
        loadData();
      }, []);

     
      

        const inputHandler = (e) => {
            //convert input text to lower case
            const lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
           

            if (lowerCase !== "") {
                let result = data.filter(f => f.title.toLowerCase().includes(lowerCase))
console.log("result", result)
       if(result?.length ){
            
           setSearchData(result);
       }else{
          setSearchData(data);
       }
               
            }
        };
console.log(data)

  return (
    <div>
      <div className="main">
        <h1>Games Search</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <Gamesdetails  data={searchData} />
      </div>
    </div>
  );
};

export default Search;

