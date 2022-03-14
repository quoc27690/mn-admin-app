import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 37 22"
    {...props}
  >
    <Path
      fill="#ED0006"
      fillRule="evenodd"
      d="M18.427 19.372A10.758 10.758 0 0111.374 22C5.368 22 .5 17.075.5 11S5.368 0 11.374 0c2.691 0 5.154.99 7.053 2.628A10.758 10.758 0 0125.48 0c6.006 0 10.874 4.925 10.874 11S31.486 22 25.48 22c-2.691 0-5.154-.99-7.053-2.628z"
      clipRule="evenodd"
    />
    <Path
      fill="#F9A000"
      fillRule="evenodd"
      d="M18.426 19.372A11.028 11.028 0 0022.246 11c0-3.352-1.482-6.355-3.82-8.372A10.758 10.758 0 0125.48 0c6.005 0 10.873 4.925 10.873 11S31.485 22 25.48 22c-2.692 0-5.155-.99-7.054-2.628z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF5E00"
      fillRule="evenodd"
      d="M18.426 19.371A11.028 11.028 0 0022.246 11c0-3.352-1.482-6.354-3.82-8.372a11.028 11.028 0 00-3.82 8.372c0 3.353 1.482 6.355 3.82 8.372z"
      clipRule="evenodd"
    />
  </Svg>
)

const SVGMasterCard = memo(SvgComponent)
export default SVGMasterCard
