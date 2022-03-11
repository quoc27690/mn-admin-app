import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
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
    <Path
      fill="url(#paint0_linear_1634_14657)"
      d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22.667 18.266l4-1.6M13.333 16.666l4 1.6M22.667 23.6l4-1.6M13.333 22l4 1.6M10 10l10 4 10-4v16l-10 4-10-4V10z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1634_14657"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9400D3" />
        <Stop offset={1} stopColor="#5A0C7B" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGHuongDanSuDung = memo(SvgComponent)
export default SVGHuongDanSuDung
