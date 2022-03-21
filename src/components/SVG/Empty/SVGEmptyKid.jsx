import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 153 153"
    {...props}
  >
    <Rect width={153} height={153} fill="#F0F8FF" rx={76.5} />
    <Path
      fill="url(#paint0_linear_1633_17291)"
      d="M93 112c0-6.075 4.925-11 11-11s11 4.925 11 11v15H95a2 2 0 01-2-2v-13z"
    />
    <Path
      fill="url(#paint1_linear_1633_17291)"
      d="M66 111c0-6.075 4.925-11 11-11s11 4.925 11 11v15H68a2 2 0 01-2-2v-13z"
    />
    <Path
      fill="url(#paint2_linear_1633_17291)"
      d="M39 112c0-6.075 4.925-11 11-11s11 4.925 11 11v15H41a2 2 0 01-2-2v-13z"
    />
    <Path
      fill="url(#paint3_linear_1633_17291)"
      d="M93 61c0-6.075 4.925-11 11-11s11 4.925 11 11v15H95a2 2 0 01-2-2V61z"
    />
    <Path
      fill="url(#paint4_linear_1633_17291)"
      d="M66 61c0-6.075 4.925-11 11-11s11 4.925 11 11v15H68a2 2 0 01-2-2V61z"
    />
    <Path
      fill="url(#paint5_linear_1633_17291)"
      d="M39 61c0-6.075 4.925-11 11-11s11 4.925 11 11v15H41a2 2 0 01-2-2V61z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint6_linear_1633_17291)"
      d="M96.933 44.722a8.5 8.5 0 1114.134-9.444 8.5 8.5 0 01-14.134 9.444z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint7_linear_1633_17291)"
      d="M69.933 94.722a8.5 8.5 0 1114.134-9.444 8.5 8.5 0 01-14.134 9.444z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint8_linear_1633_17291)"
      d="M42.932 44.722a8.5 8.5 0 1114.135-9.444 8.5 8.5 0 01-14.135 9.444z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint9_linear_1633_17291)"
      d="M95.5 90a8.5 8.5 0 0117 0v7a1.5 1.5 0 01-1.5 1.5H97a1.5 1.5 0 01-1.5-1.5v-7z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint10_linear_1633_17291)"
      d="M68.5 39a8.5 8.5 0 0117 0v7a1.5 1.5 0 01-1.5 1.5H70a1.5 1.5 0 01-1.5-1.5v-7z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint11_linear_1633_17291)"
      d="M41.5 90a8.5 8.5 0 0117 0v7a1.5 1.5 0 01-1.5 1.5H43a1.5 1.5 0 01-1.5-1.5v-7z"
    />
    <Path
      fill="url(#paint12_linear_1633_17291)"
      d="M23 44l2.037 5.964L31 52l-5.963 2.036L23 60l-2.037-5.964L15 52l5.963-2.036L23 44z"
    />
    <Path
      fill="url(#paint13_linear_1633_17291)"
      d="M123 25l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L123 37l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L123 25z"
    />
    <Path
      fill="url(#paint14_linear_1633_17291)"
      d="M125.828 105.828l6.693 1.794-4.899 4.899-1.794-6.693z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1633_17291"
        x1={114.123}
        x2={94.694}
        y1={113.839}
        y2={113.774}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1633_17291"
        x1={87.123}
        x2={67.694}
        y1={112.839}
        y2={112.774}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1633_17291"
        x1={60.123}
        x2={40.694}
        y1={113.839}
        y2={113.774}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1633_17291"
        x1={114.123}
        x2={94.694}
        y1={62.839}
        y2={62.774}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1633_17291"
        x1={87.123}
        x2={67.694}
        y1={62.839}
        y2={62.774}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1633_17291"
        x1={60.123}
        x2={40.694}
        y1={62.839}
        y2={62.774}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1633_17291"
        x1={112.283}
        x2={96.386}
        y1={39.889}
        y2={39.825}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_1633_17291"
        x1={85.283}
        x2={69.386}
        y1={89.889}
        y2={89.825}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint8_linear_1633_17291"
        x1={58.283}
        x2={42.386}
        y1={39.889}
        y2={39.825}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint9_linear_1633_17291"
        x1={112.283}
        x2={96.386}
        y1={89.889}
        y2={89.825}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint10_linear_1633_17291"
        x1={85.283}
        x2={69.386}
        y1={38.889}
        y2={38.825}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint11_linear_1633_17291"
        x1={58.283}
        x2={42.386}
        y1={89.889}
        y2={89.825}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint12_linear_1633_17291"
        x1={30.363}
        x2={16.232}
        y1={51.901}
        y2={51.845}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint13_linear_1633_17291"
        x1={128.522}
        x2={117.924}
        y1={30.926}
        y2={30.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint14_linear_1633_17291"
        x1={131.225}
        x2={126.209}
        y1={106.019}
        y2={110.995}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGEmptyKid = memo(SvgComponent)
export default SVGEmptyKid
