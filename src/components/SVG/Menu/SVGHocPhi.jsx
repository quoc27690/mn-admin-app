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
    <Rect width={40} height={40} fill="url(#paint0_linear_2070_2826)" rx={20} />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      d="M21.8 22.4v2.4c0 .995 1.612 1.8 3.6 1.8s3.6-.805 3.6-1.8v-2.4"
    />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      d="M21.8 24.8v2.4c0 .995 1.612 1.8 3.6 1.8s3.6-.805 3.6-1.8v-2.4"
    />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M25.4 24.2c1.988 0 3.6-.806 3.6-1.8s-1.612-1.8-3.6-1.8-3.6.805-3.6 1.8c0 .994 1.612 1.8 3.6 1.8zM18.8 14.6v4.2h-4.5M20 26.508a7.8 7.8 0 116.6-7.708"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2070_2826"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#31CB31" />
        <Stop offset={1} stopColor="#0B980B" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGHocPhi = memo(SvgComponent)
export default SVGHocPhi
