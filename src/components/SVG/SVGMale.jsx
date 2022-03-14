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
      fill="#DBE0FC"
      d="M.5 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z"
    />
    <Path
      stroke="#2A27BC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5h5v5M19 5l-5.318 5.318M10.5 18a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
    />
  </Svg>
)

const SVGMale = memo(SvgComponent)
export default SVGMale
