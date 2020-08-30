import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { HeaderHeightContext } from "react-navigation-stack";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ Term, onChangeTerm, onTermSubmit }) => {
  return (
    <View style={Styles.background}>
      <Feather name="search" style={Styles.IconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={Styles.TextStyle}
        placeholder="search"
        value={Term}
        onChangeText={onChangeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#D3D3D3",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  TextStyle: {
    flex: 1,
  },
  IconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
