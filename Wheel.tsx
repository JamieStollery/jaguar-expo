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
    borderColor: "black",
    borderWidth: 2,
    top: 75,
    borderRadius: 20,
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

    const cards: JSX.Element[] = [];
    for (var i = 0; i < 8; i++) {
      cards.push(
        <Card
          theta={(Math.PI / 4) * i}
          radius={state.radius}
          center={center}
          key={i}
        />
      );
    }

    setState((state) => ({ ...state, cards: cards }));
  }, []);

  const onPress = () => {
    Animated.timing(rotationValue, {
      toValue: 360,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => rotationValue.setValue(0));
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.box}>
        <Animated.View
          style={[styles.wheel, { transform: [{ rotate: rotation }] }]}
        >
          {state.cards}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
