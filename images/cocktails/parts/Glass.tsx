import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { G, Path, Rect } from "react-native-svg";

type GlassProps = {
  primaryColor: string;
  secondaryColor?: string;
  style?: StyleProp<ViewStyle>;
};

export default function Glass({ primaryColor, secondaryColor, style }: GlassProps) {
  return (
    <Svg viewBox="0 0 250 250" style={style}>
      <G>
        <Rect x={85} y={225} width={80} height={10} rx={5} fill="#D2DEDF" />
        <Path fill="#D2DEDF" d="M120 165h10v60h-10z" />
        <Path
          d="M155 136a30 30 0 01-60 0h60zM43 81h164v5c0 27.614-22.386 50-50 50H93c-27.614 0-50-22.386-50-50v-5z"
          fill={primaryColor}
        />
        <Path
          d="M43 71c0-5.523 4.477-10 10-10h144c5.523 0 10 4.477 10 10v10H43V71z"
          fill={secondaryColor || "#E3EAEB"}
        />
        <G fill="#000">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M155 235h5a5 5 0 000-10h-5a5 5 0 010 10zM125 166v59h5v-59.419a30.037 30.037 0 01-5 .419z"
            fillOpacity={0.1}
          />
          <Path d="M155 136a30 30 0 01-60 0h60z" fillOpacity={0.05} />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M136.213 157.213A30 30 0 00145 136h10a30 30 0 01-35 29.581 29.999 29.999 0 0016.213-8.368z"
            fillOpacity={0.05}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M142 136h15c27.614 0 50-22.386 50-50V71c0-5.523-4.477-10-10-10h-15c5.523 0 10 4.477 10 10v15c0 27.614-22.386 50-50 50z"
            fillOpacity={0.1}
          />
        </G>
      </G>
    </Svg>
  );
}
