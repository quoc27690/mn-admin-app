import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
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
    <G
      stroke="#2175EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      clipPath="url(#clip0_956_4658)"
    >
      <Path d="M5.625 14.875h8.75M5.625 11.125h8.75M5.625 7.375h2.5M11.875 1.125h-10v18.75h16.25v-12.5l-6.25-6.25z" />
      <Path d="M11.875 1.125v6.25h6.25" />
    </G>
    <Defs>
      <ClipPath id="clip0_956_4658">
        <Path fill="#fff" d="M0 0H20V20H0z" transform="translate(0 .5)" />
      </ClipPath>
    </Defs>
  </Svg>
)

const SVGPickFile = memo(SvgComponent)
export default SVGPickFile
