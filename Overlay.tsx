import React, { useRef, useState } from "react";
import {
  Animated,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
  image: {
    width: 250,
    height: 250,
  },
});

type OverlayProps = {
  image: ImageSourcePropType;
  hide: Function;
};

export default function Overlay({ image, hide }: OverlayProps) {
  const [canHide, setCanHide] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const color = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"],
  });

  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 500,
    useNativeDriver: false,
  }).start(() => setCanHide(true));

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (canHide) {
          hide();
        }
      }}
    >
      <Animated.View style={[styles.overlay, { backgroundColor: color }]}>
        <Animated.Image
          style={[styles.image, { opacity: animatedValue }]}
          source={image}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
