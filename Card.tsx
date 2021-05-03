import { Asset } from "expo-asset";
import React from "react";
import { Animated, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: 50,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

type CardProps = {
  theta: number;
  radius: number;
  center: {
    x: number;
    y: number;
  };
  asset: Asset;
  rotationValue: Animated.Value;
};

export default function Card({
  theta,
  radius,
  center,
  asset,
  rotationValue,
}: CardProps) {
  const position = {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };

  const rotation = rotationValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "-360deg"],
  });
  return (
    <Animated.Image
      source={{uri: asset.uri}}
      style={[
        styles.card,
        {
          left: center.x + position.x,
          top: center.y - position.y,
          transform: [
            { translateX: -50 },
            { translateY: -50 },
            { rotate: rotation },
          ],
        },
      ]}
    />
  );
}
