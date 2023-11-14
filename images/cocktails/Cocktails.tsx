import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg from "react-native-svg";
import { Lemon, Lime, Orange } from "./parts/Citrus";
import Coffee from "./parts/Coffee";
import Glass from "./parts/Glass";
import PassionFruit from "./parts/PassionFruit";
import Pineapple from "./parts/Pineapple";
import Strawberry from "./parts/Strawberry";

type CocktailProps = {
  style?: StyleProp<ViewStyle>;
};

type CocktailBaseProps = CocktailProps & {
  children: JSX.Element[];
};

function Cocktail({ style, children }: CocktailBaseProps) {
  return (
    <Svg style={style}>
      {children}
    </Svg>
  );
}

export function Icon({ style }: CocktailProps) {
  return (
    <Svg viewBox="20 0 250 200" style={style}>
      <Svg x={60} y={-25}>
        <PinaColada />
      </Svg>
      <CubaLibre />
      <Svg x={30} y={30}>
        <PornstarMartini />
      </Svg>
    </Svg>
  );
}

export function LongIslandIceTea({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <Lemon />
      <Glass primaryColor="#D46128" />
    </Cocktail>
  );
}

export function CubaLibre({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <Lime />
      <Glass primaryColor="#AD5900" />
    </Cocktail>
  );
}

export function SexOnTheBeach({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <Orange />
      <Glass primaryColor="#FF8B30" />
    </Cocktail>
  );
}

export function Mojito({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <Lemon />
      <Glass primaryColor="#B8F5C9" />
    </Cocktail>
  );
}

export function PinaColada({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <Pineapple />
      <Glass primaryColor="#F7DE5F" />
    </Cocktail>
  );
}

export function StrawberryDaiquiri({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <Strawberry />
      <Glass primaryColor="#F12C36" />
    </Cocktail>
  );
}

export function PornstarMartini({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <PassionFruit />
      <Glass primaryColor="#FF8B30" secondaryColor="#FCF2C0" />
    </Cocktail>
  );
}

export function EspressoMartini({ style }: CocktailProps) {
  return (
    <Cocktail style={style}>
      <Glass primaryColor="#522112" secondaryColor="#C5996C" />
      <Coffee />
    </Cocktail>
  );
}
