import React from "react";
import { Animated, Dimensions, ImageSourcePropType, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    width: deviceWidth / 2,
    height: deviceWidth / 2,
    position: "absolute",
    // top: "50%",
    // left: "50%",
    //transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

type CardProps = {
  theta: number;
  radius: number;
  center: {
    x: number;
    y: number;
  };
  asset: ImageSourcePropType;
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
      source={asset}
      style={[
        styles.card,
        {
          left: center.x + position.x,
          top: center.y - position.y,
          transform: [
            { translateX: StyleSheet.flatten(styles.card).width / -2 },
            { translateY: StyleSheet.flatten(styles.card).width / -2 },
            { rotate: rotation },
          ],
        },
      ]}
    />
  );
}
