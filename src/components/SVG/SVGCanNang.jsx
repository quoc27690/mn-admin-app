import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <G
      stroke={props?.color ? props.color : "#3A3C4B"}
      strokeLinecap="square"
      strokeMiterlimit={10}
      clipPath="url(#clip0_1549_13765)"
    >
      <Path d="M8.5 3.333V6M1.167.667V2c0 .737.596 1.333 1.333 1.333h12c.737 0 1.333-.596 1.333-1.333V.667H1.167zM8.5 6a5.334 5.334 0 015.333 5.333v4H3.167v-4A5.334 5.334 0 018.5 6z" />
      <Path d="M8.5 12.667a2 2 0 100-4 2 2 0 000 4z" />
    </G>
    <Defs>
      <ClipPath id="clip0_1549_13765">
        <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5)" />
      </ClipPath>
    </Defs>
  </Svg>
)

const SVGCanNang = memo(SvgComponent)
export default SVGCanNang
