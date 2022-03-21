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
      fill="#fff"
      stroke="url(#paint0_linear_1633_17247)"
      strokeWidth={2}
      d="M61.049 57.14a18.09 18.09 0 1130.08-20.1 18.09 18.09 0 01-30.08 20.1z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint1_linear_1633_17247)"
      strokeWidth={2}
      d="M43 106.5C43 87.999 57.998 73 76.5 73c18.501 0 33.5 14.999 33.5 33.5V120H43v-13.5z"
    />
    <Path
      fill="url(#paint2_linear_1633_17247)"
      d="M29 56l2.037 5.964L37 64l-5.963 2.037L29 72l-2.037-5.963L21 64l5.963-2.036L29 56z"
    />
    <Path
      fill="url(#paint3_linear_1633_17247)"
      d="M113 44l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L113 56l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L113 44z"
    />
    <Path
      fill="url(#paint4_linear_1633_17247)"
      d="M118.828 107.829l6.693 1.793-4.899 4.899-1.794-6.692z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1633_17247"
        x1={93.658}
        x2={59.939}
        y1={46.854}
        y2={46.719}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1633_17247"
        x1={108.251}
        x2={47.313}
        y1={96.197}
        y2={95.855}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1633_17247"
        x1={36.362}
        x2={22.232}
        y1={63.901}
        y2={63.845}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1633_17247"
        x1={118.522}
        x2={107.924}
        y1={49.926}
        y2={49.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1633_17247"
        x1={124.225}
        x2={119.209}
        y1={108.019}
        y2={112.995}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGEmptyContact = memo(SvgComponent)
export default SVGEmptyContact
