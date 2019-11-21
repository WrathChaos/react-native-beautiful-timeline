import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import Timeline from "./lib/src/Timeline";
import { ScreenHeight } from "@freakycoder/react-native-helpers";

const dummyData = [
  {
    date: 1574342522000,
    data: [
      {
        title: "React Native Beautiful Timeline",
        subtitle: "Sed at justo eros. Phasellus.",
        date: 1574342522000
      },
      {
        title: "React Native",
        subtitle: "Sed at justo eros. Phasellus.",
        date: 1574342501000
      }
    ]
  },
  {
    date: 1574248261000,
    data: [
      {
        title: "Timeline",
        subtitle: "Sed at justo eros. Phasellus. 2",
        date: 1574248261000
      }
    ]
  },
  {
    date: 1574125621000,
    data: [
      {
        title: "Beauty Timeline",
        subtitle: "Sed at justo eros. Phasellus. 3",
        date: 1574125621000
      }
    ]
  }
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fdfdfd" }}>
        <Timeline data={dummyData} />
      </SafeAreaView>
    </>
  );
};

export default App;
