import * as React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Timeline from "react-native-beautiful-timeline";
import { ModernHeader } from "@freakycoder/react-native-header-view";

const dummyData = [
  {
    date: 1574342522000,
    data: [
      {
        title: "React Native Beautiful Timeline",
        subtitle: "Sed at justo eros. Phasellus.",
        date: 1574342522000,
      },
      {
        title: "React Native",
        subtitle: "Sed viverra. Nam sagittis.",
        date: 1574342501000,
      },
    ],
  },
  {
    date: 1574248261000,
    data: [
      {
        title: "Timeline",
        subtitle: "Morbi magna orci, consequat in.",
        date: 1574248261000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: "Beauty Timeline",
        subtitle: "Nulla a eleifend urna. Morbi. Praesent.",
        date: 1574125621000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: "Timeline Title",
        subtitle: "Ut viverra. Nunc interdum.",
        date: 1574125621000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: "In imperdiet.",
        subtitle:
          "Etiam at libero eu lacus.Proin pellentesque tempus neque, quis.",
        date: 1574125621000,
      },
    ],
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fdfdfd", padding: 16 }}
      >
        <ModernHeader
          backgroundColor="#fdfdfd"
          text="November 2019"
          rightIconName="dots-vertical"
          textStyle={{
            color: "#566184",
            fontFamily: "Alata-Regular",
          }}
          rightIconType="MaterialCommunityIcons"
          rightIconColor="#984cf8"
          leftIconName="arrowleft"
          leftIconType="AntDesign"
          leftIconColor="#984cf8"
        />
        <Timeline
          data={dummyData}
          dashThickness={2}
          dashLength={dummyData.length}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
