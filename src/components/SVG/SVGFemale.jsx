import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fill="#FFB3B3"
      d="M.5 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z"
    />
    <Path
      stroke="#C71585"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 19v-5M10.5 17h4M12.5 14a5 5 0 100-10 5 5 0 000 10z"
    />
  </Svg>
)

const SVGFemale = memo(SvgComponent)
export default SVGFemale
