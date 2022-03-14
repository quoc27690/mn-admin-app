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
    <G stroke="#3A3C4B" strokeMiterlimit={10} clipPath="url(#clip0_1745_11817)">
      <Path
        strokeLinecap="square"
        d="M5.167 11.333a4 4 0 100-8 4 4 0 000 8zM5.167 11.333v4M3.833 14H6.5"
      />
      <Path d="M12.633 4.533l3.2-3.2" />
      <Path
        strokeLinecap="square"
        d="M9.834 11.333a4 4 0 100-8 4 4 0 000 8zM13.167 1.333h2.666V4"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1745_11817">
        <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5)" />
      </ClipPath>
    </Defs>
  </Svg>
)

const SVGGender = memo(SvgComponent)
export default SVGGender
