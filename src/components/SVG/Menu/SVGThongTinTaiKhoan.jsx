import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
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
      fill="url(#paint0_linear_1634_10544)"
      d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
    />
    <Path
      stroke={props?.color ||"#fff" }
      strokeMiterlimit={10}
      d="M27 28.485v-.744a3 3 0 00-1.512-2.605l-2.985-1.712M17.497 23.424l-2.985 1.712A3 3 0 0013 27.741v.745"
    />
    <Path
      stroke={props?.color ||"#fff" }
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M20 24.5c-2.209 0-4-2.291-4-4.5v-2a4 4 0 018 0v2c0 2.209-1.791 4.5-4 4.5z"
    />
    <Path
      stroke={props?.color ||"#fff" }
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M20 31c6.075 0 11-4.925 11-11S26.075 9 20 9 9 13.925 9 20s4.925 11 11 11z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1634_10544"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={props?.linearColorFrom ? props.linearColorFrom : "#3CB371"}/>
        <Stop offset={1} stopColor={props?.linearColorTo ? props.linearColorTo : "#167440"} />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGThongTinTaiKhoan = memo(SvgComponent)
export default SVGThongTinTaiKhoan
