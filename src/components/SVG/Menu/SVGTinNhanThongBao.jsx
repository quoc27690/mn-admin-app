import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      fill="#E3C8FF"
      d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
    />
    <Path
      stroke="#31056A"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M28.317 25.257C30.003 23.608 31 21.5 31 19.2c0-5.213-5.137-9.2-11.5-9.2S8 13.987 8 19.2c0 5.213 5.137 9.392 11.5 9.392 1.112 0 2.185-.154 3.22-.384L28.7 30.7l-.383-5.443z"
    />
  </Svg>
)

const SVGTinNhanThongBao = memo(SvgComponent)
export default SVGTinNhanThongBao
