import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <Path
      stroke="#2175EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11.25 16.125a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zM3.125 7.375h1.25"
    />
    <Path
      stroke="#2175EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18.125 4.875h-2.5l-1.25-2.5h-6.25l-1.25 2.5h-5c-.69 0-1.25.56-1.25 1.25v11.25c0 .69.56 1.25 1.25 1.25h16.25c.69 0 1.25-.56 1.25-1.25V6.125c0-.69-.56-1.25-1.25-1.25z"
    />
  </Svg>
)

const SVGCapture = memo(SvgComponent)
export default SVGCapture
