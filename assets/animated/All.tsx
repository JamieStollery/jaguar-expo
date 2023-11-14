import * as React from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import Svg, { Circle, G, Path, Rect } from "react-native-svg";

const AnimatedG = Animated.createAnimatedComponent(G);

type Props = {
  style: StyleProp<ViewStyle>;
  animatedValue: Animated.Value;
};

export default function All({style, animatedValue}: Props) {
  const interpolatedValue = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -50, 0],
  });

  return (
    <Svg width={400} height={400} style={style}>
      <G id="pint">
        <Rect
          x={187.011}
          y={39}
          width={145.925}
          height={36.18}
          rx={15}
          fill="#FFECB3"
        />
        <Path
          d="M281.079 55.884v8.442h50.352a18.031 18.031 0 001.505-7.236c0-9.99-8.099-18.09-18.09-18.09h-18.089c3.33 0 6.03 2.7 6.03 6.03v8.442a2.412 2.412 0 01-2.412 2.412h-19.296z"
          fill="#FEDF81"
        />
        <Path
          d="M300.809 288.451a10 10 0 01-9.906 8.631h-61.859a10 10 0 01-9.906-8.631L188.582 67.252c-.831-6.01 3.839-11.368 9.906-11.368H321.46c6.067 0 10.736 5.358 9.906 11.368l-30.557 221.199z"
          fill="#FFB74D"
        />
        <Path
          d="M296.347 55.884h24.119c7.312 0 12.941 6.453 11.949 13.697l-29.74 217.078a12.059 12.059 0 01-11.948 10.423h-24.12c6.028 0 11.13-4.45 11.948-10.423l29.74-217.078c.992-7.244-4.637-13.697-11.948-13.697z"
          fill="#FE9F00"
        />
        <G opacity={0.75} fill="#C4C4C4">
          <Path d="M256.205 81.21l32.769 48.164h-65.538l32.769-48.164z" />
          <Path d="M275.35 95.682l24.805 33.692h-49.61l24.805-33.692z" />
        </G>
      </G>
      <G id="cocktail">
        <Circle cx={110.854} cy={137.712} r={46.854} fill="#FED001" />
        <G fill="#FEE46D">
          <Path d="M121.334 108.289a1.83 1.83 0 00.134-.738 10.413 10.413 0 00-20.81 0c-.01.253.04.503.134.738l8.412 21.198c.668 1.683 3.05 1.683 3.718 0l8.412-21.198zM121.334 166.544c.093.235.143.485.134.738a10.418 10.418 0 01-10.405 10.03 10.412 10.412 0 01-10.405-10.03c-.01-.253.04-.503.134-.738l8.412-21.198c.668-1.683 3.05-1.683 3.718 0l8.412 21.198zM81.848 127.233a1.83 1.83 0 00-.738-.134 10.412 10.412 0 000 20.81 1.83 1.83 0 00.738-.134l21.198-8.412c1.683-.668 1.683-3.05 0-3.718l-21.198-8.412zM140.103 127.233a1.83 1.83 0 01.738-.134 10.412 10.412 0 010 20.81 1.83 1.83 0 01-.738-.134l-21.198-8.412c-1.684-.668-1.684-3.05 0-3.718l21.198-8.412zM97.9 109.816a1.82 1.82 0 00-.426-.616 10.41 10.41 0 00-14.45.265 10.413 10.413 0 00-.265 14.45c.172.185.384.327.616.427l20.938 9.041c1.662.718 3.347-.967 2.629-2.629l-9.041-20.938zM124.05 109.816c.1-.232.242-.444.427-.616a10.415 10.415 0 0114.45.265 10.415 10.415 0 01.265 14.45 1.82 1.82 0 01-.616.427l-20.938 9.041c-1.663.718-3.347-.967-2.629-2.629l9.041-20.938zM124.05 165.017c.1.232.242.444.427.616a10.41 10.41 0 0017.499-7.628c0-2.633-.998-5.164-2.784-7.087a1.834 1.834 0 00-.616-.427l-20.938-9.041c-1.663-.718-3.347.967-2.629 2.629l9.041 20.938zM97.9 165.017a1.82 1.82 0 01-.426.616 10.41 10.41 0 01-17.5-7.628c0-2.633.998-5.164 2.785-7.087.172-.185.384-.326.616-.427l20.938-9.041c1.662-.718 3.347.967 2.629 2.629l-9.041 20.938z" />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M105.579 184.273c23.394-2.621 41.58-22.467 41.58-46.561s-18.186-43.94-41.58-46.56a47.375 47.375 0 015.275-.294c25.877 0 46.855 20.977 46.855 46.854s-20.978 46.855-46.855 46.855c-1.783 0-3.543-.1-5.275-.294z"
          fill="#000"
          fillOpacity={0.1}
        />
        <G>
          <Rect
            x={145.714}
            y={325.505}
            width={104.954}
            height={14.993}
            rx={7.497}
            fill="#D2DEDF"
          />
          <Path fill="#D2DEDF" d="M190.694 254.286h14.993v74.967h-14.993z" />
          <Path
            d="M235.675 218.302a37.483 37.483 0 01-74.967 0h74.967z"
            fill="#C15824"
          />
          <Path
            d="M108.231 158.328h179.921v9.974c0 27.614-22.386 50-50 50h-79.921c-27.615 0-50-22.386-50-50v-9.974z"
            fill="#D46128"
          />
          <Path
            d="M108.231 145.838c0-5.523 4.477-10 10-10h159.921c5.522 0 10 4.477 10 10v12.49H108.231v-12.49z"
            fill="#E3EAEB"
          />
          <G
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#000"
            fillOpacity={0.1}
          >
            <Path d="M237.924 340.498h5.247a7.496 7.496 0 100-14.993h-5.247a7.496 7.496 0 017.496 7.496 7.496 7.496 0 01-7.496 7.497zM198.191 255.785v69.72h7.497v-70.477c-2.449.5-4.96.757-7.497.757z" />
            <Path d="M209.703 244.807a37.487 37.487 0 0010.978-26.505h14.994a37.483 37.483 0 01-44.981 36.726 37.49 37.49 0 0019.009-10.221zM219.41 218.302h18.742c27.614 0 50-22.386 50-50v-22.464c0-5.523-4.477-10-10-10H259.41c5.523 0 10 4.477 10 10v22.464c0 27.614-22.386 50-50 50z" />
          </G>
        </G>
      </G>
      <G id="shot">
      <AnimatedG {...{ style: { transform: [{ translateY: interpolatedValue }] } }}>
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
      </G>
    </Svg>
  );
}