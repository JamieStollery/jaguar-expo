import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

type CitrusProps = {
  style?: StyleProp<ViewStyle>;
};

type CitrusBaseProps = CitrusProps & {
  primaryColor: string;
  secondaryColor: string;
};

function Citrus({ primaryColor, secondaryColor, style }: CitrusBaseProps) {
  return (
    <Svg viewBox="0 0 250 250" style={style}>
      <Circle cx={47.851} cy={63.851} r={38.851} fill={primaryColor} />
      <Path
        d="M56.517 39.514c.093-.234.143-.485.132-.737a8.634 8.634 0 00-17.25 0c-.011.252.04.503.132.737l6.634 16.717c.668 1.683 3.05 1.683 3.718 0l6.634-16.717zM56.517 87.698c.093.235.143.485.132.738a8.634 8.634 0 01-17.25 0 1.79 1.79 0 01.132-.738l6.634-16.717c.668-1.683 3.05-1.683 3.718 0l6.634 16.717zM23.86 55.186a1.788 1.788 0 00-.738-.133 8.634 8.634 0 000 17.25c.253.012.503-.038.738-.132l16.717-6.633c1.683-.668 1.683-3.05 0-3.718L23.86 55.186zM72.043 55.186c.235-.093.486-.144.738-.133a8.634 8.634 0 010 17.25 1.79 1.79 0 01-.738-.132l-16.716-6.633c-1.683-.668-1.683-3.05 0-3.718l16.716-6.634zM37.136 40.78a1.79 1.79 0 00-.428-.615A8.634 8.634 0 0024.51 52.363c.17.186.384.328.616.428l16.51 7.13c1.663.717 3.348-.967 2.63-2.63l-7.13-16.51zM58.767 40.78c.1-.232.242-.444.428-.615a8.634 8.634 0 0112.198 12.198c-.17.186-.383.328-.615.428l-16.512 7.13c-1.662.717-3.346-.967-2.628-2.63l7.13-16.51zM58.767 86.432c.1.232.242.445.428.616A8.634 8.634 0 0071.393 74.85a1.789 1.789 0 00-.615-.428l-16.512-7.13c-1.662-.718-3.346.967-2.628 2.63l7.13 16.51zM37.136 86.432a1.79 1.79 0 01-.428.616A8.634 8.634 0 0124.51 74.85c.17-.186.384-.328.616-.428l16.51-7.13c1.663-.718 3.348.967 2.63 2.63l-7.13 16.51z"
        fill={secondaryColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.851 102.384c19.096-2.453 33.852-18.77 33.852-38.533 0-19.762-14.756-36.079-33.852-38.532a39.208 39.208 0 015-.319c21.457 0 38.852 17.394 38.852 38.851s-17.395 38.852-38.852 38.852c-1.694 0-3.363-.109-5-.319z"
        fill="#000"
        fillOpacity={0.1}
      />
    </Svg>
  );
}

export function Lime({style}: CitrusProps) {
  return (
    <Citrus primaryColor="#4EAC2B" secondaryColor="#BAF03A" style={style} />
  );
}

export function Lemon({style}: CitrusProps) {
  return (
    <Citrus primaryColor="#FED001" secondaryColor="#FEE46D" style={style} />
  );
}

export function Orange({style}: CitrusProps) {
  return (
    <Citrus primaryColor="#F18E00" secondaryColor="#FCC60C" style={style} />
  );
}
