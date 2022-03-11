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
    <Rect width={40} height={40} fill="url(#paint0_linear_2070_2776)" rx={20} />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      d="M27.409 17.21a2.59 2.59 0 100-5.183 2.59 2.59 0 000 5.182z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M16.92 25.838l1.04 3.802a1.291 1.291 0 102.49-.679l-1.634-6.006 4.038-2.019 2.925 5.999a1.08 1.08 0 101.967-.882l-2.61-6.35a1.27 1.27 0 00-.088-.166l-3.023-4.75a1.293 1.293 0 00-.247-.286l-6.406-5.23a1.076 1.076 0 00-1.668 1.298c.066.126.155.238.265.33l5.608 5.108-4.578 2.289a3.025 3.025 0 00-1.564 1.908l-2.39 8.756a2.375 2.375 0 00-.045.34 1.292 1.292 0 002.54.34l1.994-7.294"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2070_2776"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FD72A4" />
        <Stop offset={1} stopColor="#CE0B98" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGSucKhoe = memo(SvgComponent)
export default SVGSucKhoe
