import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Gamesdetails from "./Gamesdetails";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([{}]);

  const [searchData, setSearchData] = useState([]);

  const [text, setText] = useState("");

  const [inputText, setInputText] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const loadData = async () => {
    const result = await axios(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    );
    result.data.splice(0, 1);
    setData(result.data);
    setSearchData(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);

    const result = data.filter(
      (f) => f.title.toLowerCase() === text.toLowerCase()
    );

    if (inputText) {
      setSuggestions([]);
    }

    setSearchData(result);
    setSuggestions([]);
  };

  const inputHandler = (e) => {
    //convert input text to lower case and check(for case sensitive scenario)
    const lowerCase = e.target.value.toLowerCase();

    if (e.target.value === "") {
      setSuggestions([]);
      setSearchData(data);
    }

    setText(e.target.value);
    setInputText(lowerCase);

    if (lowerCase !== "") {

      // filter the search data from the data
      const result = data.filter((f) =>
        f.title.toLowerCase().includes(lowerCase)
      );

      if (result?.length) {
        const storeSuggestion = [];

        // store suggestion data based on search
        result.map((suggestionData, index) => (
          storeSuggestion.push(result[index].title)
        ));

        setSuggestions(storeSuggestion);
      }
    }
  };

  return (
    <div>
      <div className="main">
        <h1>Games Search</h1>
        <div className="container search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            value={text}
          />
          <div className="search-decoration">
            {suggestions &&
              suggestions.map((title, index) => {
                return (
                  <div
                    className="search suggestions p-3"
                    key={index}
                    onClick={() => onSuggestHandler(title)}
                  >
                    {title}
                  </div>
                );
              })}
          </div>
        </div>

        <Gamesdetails data={searchData} />
      </div>
    </div>
  );
};

export default Search;
