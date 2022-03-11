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
    <Rect width={40} height={40} fill="url(#paint0_linear_2070_2805)" rx={20} />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M16.4 23.412l2.4 2.483 4.8-4.965"
    />
    <Path stroke="#fff" strokeMiterlimit={10} d="M29 17.828H11" />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M27.2 12.863H12.8c-.994 0-1.8.834-1.8 1.862V27.14c0 1.029.806 1.862 1.8 1.862h14.4c.994 0 1.8-.834 1.8-1.862V14.725c0-1.028-.806-1.862-1.8-1.862zM15.2 11v3.724M24.8 11v3.724"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2070_2805"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#40E0D0" />
        <Stop offset={1} stopColor="#238177" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGNghiPhep = memo(SvgComponent)
export default SVGNghiPhep
