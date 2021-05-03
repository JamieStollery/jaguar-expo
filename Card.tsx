import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    position: "absolute",
    borderColor: "red",
    borderWidth: 2,
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
};

export default function Card({ theta, radius, center }: CardProps) {
  const position = {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };

  return (
    <View
      style={[
        styles.card,
        {
          left: center.x + position.x,
          top: center.y - position.y,
        },
      ]}
    />
  );
}
