import { useAssets } from "expo-asset";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import Card from "./Card";

const styles = StyleSheet.create({
  wheel: {
    top: 300,
    width: 150,
    height: 150,
    position: "absolute",
  },
  box: {
    width: 150,
    height: 150,
    position: "absolute",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    top: 75,
    borderRadius: 20,
    overflow: "hidden",
  },
});

type WheelState = {
  radius: number;
  cards?: JSX.Element[];
};

export default function Wheel() {
  const [state, setState] = useState<WheelState>({
    radius: 300,
    cards: [],
  });
  
  const [assets] = useAssets([
    require("./assets/images/beer.png"),
    require("./assets/images/beer.png"),
    require("./assets/images/beer.png"),
    require("./assets/images/beer.png"),
    require("./assets/images/beer.png"),
    require("./assets/images/beer.png"),
    require("./assets/images/beer.png"),
    require("./assets/images/beer.png"),
  ]);

  const rotationValue = useRef(new Animated.Value(0)).current;

  const rotation = rotationValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    const center = {
      x: StyleSheet.flatten(styles.wheel).width / 2,
      y: StyleSheet.flatten(styles.wheel).height / 2,
    };
    const cards = assets?.map((asset, i) => (
      <Card
        theta={(Math.PI / 4) * i}
        radius={state.radius}
        center={center}
        asset={asset}
        rotationValue={rotationValue}
        key={i}
      />
    ));
    setState((state) => ({ ...state, cards: cards }));
  }, [assets]);

  const onPress = () => {
    rotationValue.setValue(0);

    const randomValue = Math.floor(Math.random() * 8) + 1;
    const toValue = 360 + randomValue * 45;

    Animated.timing(rotationValue, {
      toValue: toValue,
      duration: toValue * 4,
      easing: Easing.bezier(0.3, 1, 0.3, 1),
      useNativeDriver: true,
    }).start(() => rotationValue.setValue(toValue - 360));
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.box]}>
          <Animated.View
            style={[styles.wheel, { transform: [{ rotate: rotation }] }]}
          >
            {state.cards}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
