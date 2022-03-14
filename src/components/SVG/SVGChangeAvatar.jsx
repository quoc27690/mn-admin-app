import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Rect width={24} height={24} fill="#000" fillOpacity={0.51} rx={12} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.375 15.25a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zM7.5 10h.75"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16.5 8.5H15L14.25 7H10.5l-.75 1.5h-3a.75.75 0 00-.75.75V16c0 .414.336.75.75.75h9.75a.75.75 0 00.75-.75V9.25a.75.75 0 00-.75-.75z"
    />
  </Svg>
)

const SVGChangeAvatar = memo(SvgComponent)
export default SVGChangeAvatar
