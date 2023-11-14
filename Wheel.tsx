import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import Card from "./Card";
import {
  CocktailSelector,
  DefaultSelector,
  PintSelector,
  ShotSelector
} from "./ModeSelectors";
import Overlay from "./Overlay";

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  wheel: {
    top: deviceWidth,
    width: deviceWidth / 2,
    height: deviceWidth / 2,
    position: "absolute",
  },
  box: {
    width: deviceWidth / 2,
    height: deviceWidth / 2,
    position: "absolute",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    top: "5%",
    borderRadius: 20,
    overflow: "hidden",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
    opacity: 0.5,
    zIndex: 1,
  },
  icons: {
    bottom: 0,
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    flexWrap: "wrap",
  },
});

type WheelState = {
  radius: number;
  images: ImageSourcePropType[];
  overlay?: JSX.Element;
  showOverlay: boolean;
  canSpin: boolean;
  currentRotation: number;
};

export default function Wheel() {
  const [state, setState] = useState<WheelState>({
    radius: StyleSheet.flatten(styles.wheel).width * 2,
    images: [
      require("./assets/images/pints/lager.png"),
      require("./assets/images/pints/cider.png"),
      require("./assets/images/pints/ale.png"),
      require("./assets/images/pints/stout.png"),
    ],
    showOverlay: false,
    canSpin: true,
    currentRotation: 0,
  });

  const rotationValue = useRef(new Animated.Value(0)).current;

  const rotation = rotationValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const onPress = () => {
    if (state.canSpin) {
      setState((state) => ({ ...state, canSpin: false }));
      const randomValue = Math.floor(Math.random() * state.images!.length);
      const angle =
        state.currentRotation + randomValue * (360 / state.images!.length);
      const toValue = 360 + angle;

      Animated.timing(rotationValue, {
        toValue: toValue,
        duration: toValue * 4,
        easing: Easing.bezier(0.3, 1, 0.3, 1),
        useNativeDriver: true,
      }).start(() => {
        const currentRotation = angle < 360 ? angle : angle - 360;
        setState((state) => ({
          ...state,
          showOverlay: true,
          currentRotation: currentRotation,
          overlay: (
            <Overlay
              image={
                state.images[currentRotation / (360 / state.images.length)]
              }
              hide={() =>
                setState((state) => ({
                  ...state,
                  showOverlay: false,
                  canSpin: true,
                }))
              }
            />
          ),
        }));
        rotationValue.setValue(currentRotation);
      });
    }
  };

  const setImages = (images: ImageSourcePropType[]) => {
    if (state.canSpin) {
      setState((state) => ({ ...state, images: images, currentRotation: 0 }));
      rotationValue.setValue(0);
    }
  };

  const createCards = () =>
    state.images.map((image, i) => (
      <Card
        theta={
          (Math.PI / (state.images.length / 2)) * (i + state.images.length / 4)
        }
        radius={state.radius}
        center={{
          x: StyleSheet.flatten(styles.wheel).width / 2,
          y: StyleSheet.flatten(styles.wheel).height / 2,
        }}
        asset={image}
        rotationValue={rotationValue}
        key={i}
      />
    ));

  return (
    <>
      {state.showOverlay ? state.overlay : []}
      <View style={styles.icons}>
        <DefaultSelector setImages={setImages} />
        <CocktailSelector setImages={setImages} />
        <PintSelector setImages={setImages} />
        <ShotSelector setImages={setImages} />
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.box]}>
          <Animated.View
            style={[styles.wheel, { transform: [{ rotate: rotation }] }]}
          >
            {createCards()}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
