import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#paint0_linear_2070_2782)" rx={20} />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      d="M16.7 11.6l3.3 2.46 3.3-2.46M11 20.54l3.36-2.4-1.32-3.84M17.72 28.7l-1.32-3.9h-4.02M27.62 24.8H23.6l-1.32 3.9M26.96 14.3l-1.32 3.84 3.36 2.4"
    />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M20 29a9 9 0 100-18 9 9 0 000 18z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M21.8 22.4h-3.6l-1.5-3.24L20 16.7l3.3 2.46-1.5 3.24z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2070_2782"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D2691E" />
        <Stop offset={1} stopColor="#974A13" />
      </LinearGradient>
    </Defs>
  </Svg>
)
const SVGHoatDong = memo(SvgComponent)
export default SVGHoatDong
