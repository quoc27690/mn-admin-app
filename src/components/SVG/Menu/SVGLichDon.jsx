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
    <Rect width={40} height={40} fill="url(#paint0_linear_2070_2816)" rx={20} />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M20 14.682a3.682 3.682 0 117.364 0c0 2.033-1.649 4.5-3.682 4.5-2.034 0-3.682-2.467-3.682-4.5z"
    />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      d="M20.818 21.625a9.946 9.946 0 012.864-.396c2.04 0 3.378.526 4.203 1.044A2.425 2.425 0 0129 24.33v4.67h-5.318"
    />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M12.636 19.591a3.273 3.273 0 016.546 0c0 1.807-1.466 3.682-3.273 3.682-1.807 0-3.273-1.875-3.273-3.682zM20.818 27.566c0-.666-.4-1.268-1.018-1.516-.85-.34-2.197-.732-3.89-.732-1.695 0-3.041.392-3.892.732A1.629 1.629 0 0011 27.566V29h9.818v-1.434z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2070_2816"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5858F1" />
        <Stop offset={1} stopColor="#0000CD" />
      </LinearGradient>
    </Defs>
  </Svg>
)
const SVGLichDon = memo(SvgComponent)
export default SVGLichDon
