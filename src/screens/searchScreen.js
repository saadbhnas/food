import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [Term, setTerm] = useState("");
  const [Results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (initesearch) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: initesearch,
          location: "san jose",
          limit: 50,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("something went wrong");
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi("fish");
  }, []);

  return (
    <View>
      <SearchBar
        Term={Term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(Term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> we have found {Results.length} Results </Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SearchScreen;
