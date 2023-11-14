import React from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import Svg, { G, Path } from "react-native-svg";

type ShotProps = {
  style: StyleProp<ViewStyle>;
  rotation: Animated.AnimatedInterpolation;
};

const AnimatedG = Animated.createAnimatedComponent(G);

export default function Shot({ style, rotation }: ShotProps) {
  return (
    <Svg width={400} height={400} style={style}>
      <AnimatedG {...{ style: { transform: [{ translateY: rotation }] } }}>
        <Path
          d="M311.239 353.226A10 10 0 01301.49 361h-45.646a9.999 9.999 0 01-9.749-7.774l-21.318-93.363c-1.43-6.26 3.327-12.226 9.749-12.226h88.282c6.421 0 11.178 5.965 9.749 12.226l-21.318 93.363z"
          fill="#E3EAEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M301.511 361a10.001 10.001 0 009.728-7.774l18.932-82.917H227.162l18.933 82.917a10 10 0 009.727 7.774h45.689z"
          fill="#C8D264"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M283.351 361c4.666 0 8.711-3.226 9.75-7.774l21.317-93.363c1.43-6.261-3.327-12.226-9.749-12.226h18.139c6.421 0 11.178 5.965 9.749 12.226l-21.318 93.363A10 10 0 01301.49 361h-18.139z"
          fill="#000"
          fillOpacity={0.05}
        />
      </AnimatedG>
    </Svg>
  );
}
