import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Ellipse, G } from "react-native-svg";

type CoffeeProps = {
  style?: StyleProp<ViewStyle>;
};

export default function Coffee({ style }: CoffeeProps) {
  return (
    <Svg viewBox="0 0 250 250" style={style}>
      <G fill="#3F190E">
        <Ellipse cx={107.759} cy={63.482} rx={9.759} ry={4.879} />
        <Ellipse cx={126.626} cy={65.434} rx={9.759} ry={4.879} />
        <Ellipse cx={144.192} cy={60.88} rx={9.759} ry={4.879} />
      </G>
    </Svg>
  );
}
