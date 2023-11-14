import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Ellipse, Path } from "react-native-svg";

type PineappleProps = {
  style?: StyleProp<ViewStyle>;
};

export default function Pineapple({ style }: PineappleProps) {
  return (
    <Svg viewBox="0 0 250 250" style={style}>
      <Path
        d="M16.594 92.895c-2.667.715-5.434-.867-5.889-3.59a51.787 51.787 0 0159.6-59.6c2.723.455 4.304 3.222 3.59 5.89L62.533 77.996a5 5 0 01-3.536 3.536L16.594 92.895z"
        fill="#F8D53D"
      />
      <Ellipse cx={61.786} cy={46.262} rx={2.158} ry={12.946} fill="#FDE989" />
      <Ellipse
        cx={27.262}
        cy={80.786}
        rx={2.158}
        ry={12.946}
        transform="rotate(-90 27.262 80.786)"
        fill="#FDE989"
      />
      <Ellipse
        cx={37.942}
        cy={56.942}
        rx={2.158}
        ry={12.946}
        transform="rotate(-45 37.942 56.942)"
        fill="#FDE989"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.917 32.18a51.786 51.786 0 0123.387-1.475c2.724.455 4.305 3.222 3.59 5.89L59.534 78.996a5 5 0 01-2.267 3l1.731-.464a5 5 0 003.536-3.536l11.362-42.403c.715-2.667-.867-5.434-3.59-5.889a51.787 51.787 0 00-26.388 2.475z"
        fill="#000"
        fillOpacity={0.1}
      />
    </Svg>
  );
}
