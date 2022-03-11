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
      fill="url(#paint0_linear_1634_16591)"
      d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.998 24.181a3.795 3.795 0 100-7.59 3.795 3.795 0 000 7.59z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M28.348 20.386c0-.706-.097-1.386-.261-2.04l2.91-1.681-2.277-3.944-2.907 1.679a8.312 8.312 0 00-3.537-2.04V9H17.72v3.358a8.35 8.35 0 00-3.537 2.042l-2.907-1.68L9 16.666l2.91 1.68a8.365 8.365 0 00-.261 2.04c0 .705.097 1.387.261 2.04L9 24.107l2.277 3.944 2.909-1.679a8.313 8.313 0 003.537 2.04v3.36h4.554v-3.358a8.353 8.353 0 003.537-2.04l2.909 1.679L31 24.108l-2.91-1.68a8.544 8.544 0 00.258-2.042z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1634_16591"
        x1={0}
        x2={39.994}
        y1={19.902}
        y2={22.157}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3C3CD9" />
        <Stop offset={1} stopColor="#101082" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGCaiDat = memo(SvgComponent)
export default SVGCaiDat
