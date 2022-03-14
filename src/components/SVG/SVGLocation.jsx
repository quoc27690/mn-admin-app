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
      d="M20.25 9c0 6.75-8.25 14.25-8.25 14.25S3.75 15.75 3.75 9a8.25 8.25 0 1116.5 0v0z"
    />
    <Path
      stroke={props?.color ? props.color : "#3A3C4B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
    />
  </Svg>
)

const SVGLocation = memo(SvgComponent)
export default SVGLocation
