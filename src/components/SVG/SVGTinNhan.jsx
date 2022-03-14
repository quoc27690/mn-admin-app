import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 23"
    {...props}
  >
    <Path
      stroke="#696969"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M21.75 1.25H2.25a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h4.5v6l7-6h8a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5z"
    />
  </Svg>
)

const SVGTinNhan = memo(SvgComponent)
export default SVGTinNhan
