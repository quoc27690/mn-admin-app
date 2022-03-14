import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 16 25"
    {...props}
  >
    <Path fill="url(#paint0_linear_1647_1478)" d="M15.5 7H.5v11h15V7z" />
    <Path
      stroke="url(#paint1_linear_1647_1478)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 7L8 3l4.5 4"
    />
    <Path
      stroke="#3A3C4B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 11h7M4.5 14h7"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1647_1478"
        x1={14.902}
        x2={1.655}
        y1={12.432}
        y2={12.36}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1647_1478"
        x1={12.141}
        x2={4.193}
        y1={4.975}
        y2={4.904}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGItemLop = memo(SvgComponent)
export default SVGItemLop
