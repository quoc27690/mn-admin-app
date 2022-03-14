import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke={props?.color ? props.color : "#3A3C4B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.75 7.5l11.25 6 11.25-6"
    />
    <Path
      stroke={props?.color ? props.color : "#3A3C4B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21.75H3A2.25 2.25 0 01.75 19.5v-15A2.25 2.25 0 013 2.25h18a2.25 2.25 0 012.25 2.25v15A2.25 2.25 0 0121 21.75v0z"
    />
  </Svg>
)

const SVGEmail = memo(SvgComponent)
export default SVGEmail