import * as React from "react";
import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

export default function Pint(props: SvgProps) {
  return (
    <Svg width={400} height={400} {...props}>
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
    </Svg>
  );
}
