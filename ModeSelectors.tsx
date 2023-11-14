import React from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  icon: {
    width: deviceWidth / 2,
    height: deviceWidth / 2,
  },
});

type SelectorProps = {
  setImages: Function;
};

export function DefaultSelector({ setImages }: SelectorProps) {
  const images: ImageSourcePropType[] = [
    require("./assets/images/shots/tequila.png"),
    require("./assets/images/shots/vodka.png"),
    require("./assets/images/pints/lager.png"),
    require("./assets/images/pints/cider.png"),
    require("./assets/images/cocktails/cubalibre.png"),
    require("./assets/images/cocktails/longislandicetea.png"),
    require("./assets/images/cocktails/pinacolada.png"),
    require("./assets/images/cocktails/pornstarmartini.png"),
  ];

  return (
    <TouchableWithoutFeedback onPress={() => setImages(images)}>
      <Image
        style={styles.icon}
        source={require("./assets/images/icon.png")}
      />
    </TouchableWithoutFeedback>
  );
}
export function ShotSelector({ setImages }: SelectorProps) {
  const images: ImageSourcePropType[] = [
    require("./assets/images/shots/rum.png"),
    require("./assets/images/shots/sourz.png"),
    require("./assets/images/shots/tequila.png"),
    require("./assets/images/shots/vodka.png"),
  ];

  return (
    <TouchableWithoutFeedback onPress={() => setImages(images)}>
      <Image
        style={styles.icon}
        source={require("./assets/images/shots/icon.png")}
      />
    </TouchableWithoutFeedback>
  );
}

export function PintSelector({ setImages }: SelectorProps) {
  const images: ImageSourcePropType[] = [
    require("./assets/images/pints/lager.png"),
    require("./assets/images/pints/cider.png"),
    require("./assets/images/pints/ale.png"),
    require("./assets/images/pints/stout.png"),
  ];

  return (
    <TouchableWithoutFeedback onPress={() => setImages(images)}>
      <Image
        style={styles.icon}
        source={require("./assets/images/pints/icon.png")}
      />
    </TouchableWithoutFeedback>
  );
}

export function CocktailSelector({ setImages }: SelectorProps) {
  const images: ImageSourcePropType[] = [
    require("./assets/images/cocktails/cubalibre.png"),
    require("./assets/images/cocktails/espressomartini.png"),
    require("./assets/images/cocktails/longislandicetea.png"),
    require("./assets/images/cocktails/mojito.png"),
    require("./assets/images/cocktails/pinacolada.png"),
    require("./assets/images/cocktails/pornstarmartini.png"),
    require("./assets/images/cocktails/sexonthebeach.png"),
    require("./assets/images/cocktails/strawberrydaiquiri.png"),
  ];

  return (
    <TouchableWithoutFeedback onPress={() => setImages(images)}>
      <Image
        style={styles.icon}
        source={require("./assets/images/cocktails/icon.png")}
      />
    </TouchableWithoutFeedback>
  );
}