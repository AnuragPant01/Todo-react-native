import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.item}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="sticker-emoji"
            size={24}
            color="white"
          />
          <Text> {this.props.text}</Text>
        </View>
        <View>
          <AntDesign name="delete" size={24} color="white" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ADD8E6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
