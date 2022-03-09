import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 22 24"
    {...props}
  >
    <Path
      stroke="#2175EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.25 23.25H2.75a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5zM5.75 9.75V6A5.25 5.25 0 0111 .75v0A5.25 5.25 0 0116.25 6v3.75"
    />
    <Path
      stroke="#2175EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 18.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
    />
  </Svg>
)

const SVGLoginPassword = memo(SvgComponent)
export default SVGLoginPassword
