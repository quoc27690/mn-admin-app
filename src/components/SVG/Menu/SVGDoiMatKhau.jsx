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
      fill="url(#paint0_linear_1634_16564)"
      d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M26.45 9l-9.281 9.243a6.489 6.489 0 104.588 4.588l1.659-1.696V18.1h3.034v-3.034h3.033L31 13.55V9h-4.55z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M14.884 27.201a2.086 2.086 0 100-4.17 2.086 2.086 0 000 4.17z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1634_16564"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#ACA66B" />
        <Stop offset={0} stopColor="#DFA981" />
        <Stop offset={1} stopColor="#9C3902" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGDoiMatKhau = memo(SvgComponent)
export default SVGDoiMatKhau
