import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 17 17"
    {...props}
  >
    <G
      stroke="#3A3C4B"
      strokeLinecap="square"
      strokeMiterlimit={10}
      clipPath="url(#clip0_1745_11842)"
    >
      <Path d="M8.5 6.5v4M2.5 10.5v-2h12v2M8.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2.5 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8.5 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM14.5 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </G>
    <Defs>
      <ClipPath id="clip0_1745_11842">
        <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5 .5)" />
      </ClipPath>
    </Defs>
  </Svg>
)

const SVGParent = memo(SvgComponent)
export default SVGParent
