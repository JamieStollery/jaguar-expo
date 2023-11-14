import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Ellipse, Path } from "react-native-svg";

type PassionFruitProps = {
  style?: StyleProp<ViewStyle>;
};

export default function PassionFruit({ style }: PassionFruitProps) {
  return (
    <Svg viewBox="0 0 250 250" style={style}>
      <Path
        d="M144.024 42.343c1.398 9.156-1.279 18.55-7.444 26.117-6.164 7.567-15.311 12.686-25.428 14.232-10.116 1.545-20.374-.61-28.517-5.99-8.142-5.382-13.503-13.548-14.901-22.704 0 0-1.734-11.348 36.411-17.175 38.145-5.828 39.879 5.52 39.879 5.52z"
        fill="#6E1450"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.293 67.848c6.164-7.567 8.842-16.962 7.443-26.117 0 0-.67-4.384-10.336-6.303 13.767 1.306 14.624 6.915 14.624 6.915 1.398 9.156-1.279 18.55-7.444 26.117-6.164 7.567-15.311 12.686-25.428 14.232a42.15 42.15 0 01-14.485-.293c3.357.302 6.786.202 10.198-.32 10.116-1.545 19.263-6.664 25.428-14.231z"
        fill="#000"
        fillOpacity={0.2}
      />
      <Ellipse
        cx={105.851}
        cy={47.991}
        rx={33.68}
        ry={8.877}
        transform="rotate(-8.686 105.851 47.99)"
        fill="#FDCB0A"
      />
      <Ellipse
        cx={94.628}
        cy={45.42}
        rx={6.022}
        ry={2.623}
        transform="rotate(-8.686 94.628 45.42)"
        fill="#693F19"
      />
      <Ellipse
        cx={106.823}
        cy={42.536}
        rx={6.022}
        ry={2.824}
        transform="rotate(-8.686 106.823 42.536)"
        fill="#693F19"
      />
      <Ellipse
        cx={120.829}
        cy={42.642}
        rx={6.022}
        ry={2.623}
        transform="rotate(-8.686 120.829 42.642)"
        fill="#693F19"
      />
      <Ellipse
        cx={129.467}
        cy={46.016}
        rx={6.022}
        ry={2.824}
        transform="rotate(-8.686 129.467 46.016)"
        fill="#693F19"
      />
      <Ellipse
        cx={117.956}
        cy={50.427}
        rx={6.022}
        ry={2.623}
        transform="rotate(-8.686 117.956 50.427)"
        fill="#693F19"
      />
      <Ellipse
        cx={108.968}
        cy={47.719}
        rx={6.022}
        ry={2.623}
        transform="rotate(-8.686 108.968 47.719)"
        fill="#693F19"
      />
      <Ellipse
        cx={83.269}
        cy={50.828}
        rx={6.022}
        ry={2.623}
        transform="rotate(-8.686 83.27 50.828)"
        fill="#693F19"
      />
      <Ellipse
        cx={96.074}
        cy={51.934}
        rx={6.022}
        ry={2.824}
        transform="rotate(-8.686 96.074 51.934)"
        fill="#693F19"
      />
    </Svg>
  );
}
