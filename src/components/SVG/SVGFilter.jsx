import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Rect width={32} height={32} fill="#2175EF" rx={16} />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M24 11.4l-6.4 6.4v5.6l-3.2 2.4v-8L8 11.4V9h16v2.4z"
    />
  </Svg>
)

const SVGFilter = memo(SvgComponent)
export default SVGFilter
