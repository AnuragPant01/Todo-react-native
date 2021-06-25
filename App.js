import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  BackHandler,
  Alert,
} from "react-native";
import Items from "./items.js";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [task, setTask] = useState();
  const [taskArray, settaskArray] = useState([]);

  const button = () => {
    if (!task) {
      return (
        <TouchableOpacity disabled={true}>
          <MaterialIcons name="add-circle-outline" size={60} color="grey" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            addTask();
          }}
        >
          <MaterialIcons name="add-circle-outline" size={60} color="black" />
        </TouchableOpacity>
      );
    }
  };

  const addTask = () => {
    Keyboard.dismiss(), settaskArray([...taskArray, task]);
    setTask(null);
  };

  const deleteTask = (i) => {
    let tasks = [...taskArray];
    tasks.splice(i, 1);
    settaskArray(tasks);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 80, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>TODO TASKS</Text>
        <ScrollView>
          <View style={{ marginTop: 20 }}>
            {taskArray.map((item, i) => {
              return (
                <TouchableOpacity key={i} onPress={() => deleteTask(i)}>
                  <Items text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView behavior={"height"} style={styles.writeTask}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        {button()}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefffc",
  },
  writeTask: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 300,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
  },
});
