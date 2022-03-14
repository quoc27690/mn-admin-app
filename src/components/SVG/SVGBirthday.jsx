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
    <G stroke={props?.color ? props.color : "#3A3C4B"} strokeMiterlimit={10} clipPath="url(#clip0_1745_11835)">
      <Path d="M1 12.159a3 3 0 005 0 3 3 0 005 0 3 3 0 005 0M10.6 1.395a1.374 1.374 0 00-2.1.208 1.374 1.374 0 00-2.1-.208 1.336 1.336 0 00-.016 1.888L6.4 3.3l2.1 2.075L10.6 3.3a1.336 1.336 0 00.017-1.889l-.017-.016z" />
      <Path strokeLinecap="square" d="M16 10.5H1V16h15v-5.5zM14 10.5V7H3v3.5" />
    </G>
    <Defs>
      <ClipPath id="clip0_1745_11835">
        <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5 .5)" />
      </ClipPath>
    </Defs>
  </Svg>
)

const SVGBirthday = memo(SvgComponent)
export default SVGBirthday
