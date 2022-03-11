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
    <Rect width={40} height={40} fill="url(#paint0_linear_2070_2795)" rx={20} />
    <Path stroke="#fff" strokeMiterlimit={10} d="M20.62 27.56l6.942-6.943" />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M15.062 15.06l4.111 4.112M24.554 16.748a4.089 4.089 0 00-6.628-4.551L12.2 17.924a4.09 4.09 0 004.554 6.628"
    />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      d="M24.09 29a4.91 4.91 0 100-9.818 4.91 4.91 0 000 9.818z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2070_2795"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CD5C5C" />
        <Stop offset={1} stopColor="#BB1212" />
      </LinearGradient>
    </Defs>
  </Svg>
)
const SVGDanThuoc = memo(SvgComponent)
export default SVGDanThuoc
