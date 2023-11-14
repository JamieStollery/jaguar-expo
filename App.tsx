import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Icon, LongIslandIceTea } from "./images/cocktails/Cocktails";
// import { CubaLibre, EspressoMartini, Icon, LongIslandIceTea, Mojito, PinaColada, PornstarMartini, SexOnTheBeach, StrawberryDaiquiri } from "./images/cocktails/Cocktails";

export default function App() {
  return (
    <View style={styles.svgs}>
      <Icon style={styles.svg} />
      <LongIslandIceTea style={styles.svg} />
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
  svgs: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  svg: {
    width: deviceWidth / 2,
    height: deviceWidth / 2,
  },
});
