import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <G
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      clipPath="url(#clip0_1614_8503)"
    >
      <Path d="M1.5 6h14M14.5 3h-12a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4.5 1v2M12.5 1v2M8.5 1v2M6.5 8v6M10.5 8v6M3.5 11h10" />
    </G>
    <Defs>
      <ClipPath id="clip0_1614_8503">
        <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(0 .5)" />
      </ClipPath>
    </Defs>
  </Svg>
)

const SVGCalendar = memo(SvgComponent)
export default SVGCalendar
