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
      clipPath="url(#clip0_956_4653)"
    >
      <Path d="M.625 16.125l3.75-3.75 2.5 2.5 6.25-6.25 6.25 6.25" />
      <Path d="M17.5 19.875h-15A1.875 1.875 0 01.625 18V3A1.875 1.875 0 012.5 1.125h15A1.875 1.875 0 0119.375 3v15a1.875 1.875 0 01-1.875 1.875v0z" />
      <Path d="M6.25 8.625a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
    </G>
    <Defs>
      <ClipPath id="clip0_956_4653">
        <Path fill="#fff" d="M0 0H20V20H0z" transform="translate(0 .5)" />
      </ClipPath>
    </Defs>
  </Svg>
)

const SVGPickImage = memo(SvgComponent)
export default SVGPickImage
