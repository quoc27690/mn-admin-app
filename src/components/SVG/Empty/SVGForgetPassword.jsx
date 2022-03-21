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
      stroke="url(#paint0_linear_1383_38859)"
      d="M71.723 86.58A8.742 8.742 0 0077 88.084a8.742 8.742 0 005.277-1.506L119.5 66.563v35.355a10.25 10.25 0 01-10.25 10.25h-64.5a10.25 10.25 0 01-10.25-10.25V66.563L71.723 86.58z"
    />
    <Path
      stroke="url(#paint1_linear_1383_38859)"
      d="M34.5 55.336V51.75A10.25 10.25 0 0144.75 41.5h64.5a10.25 10.25 0 0110.25 10.25V55.336a3.257 3.257 0 01-1.543 2.79l-39.398 21.49-.004.002a2.725 2.725 0 01-1.51.3L77 79.916l-.045.004a2.725 2.725 0 01-1.51-.301l-.004-.002-39.398-21.49a3.262 3.262 0 01-1.543-2.79z"
    />
    <Path
      fill="url(#paint2_linear_1383_38859)"
      d="M113 126c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
    />
    <Path
      fill="url(#paint3_linear_1383_38859)"
      d="M106.933 112.133l4.334 4.334 8.666-8.667"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M106.933 112.133l4.334 4.334 8.666-8.667"
    />
    <Path
      fill="url(#paint4_linear_1383_38859)"
      d="M43 24l2.036 5.963L51 32l-5.964 2.036L43 40l-2.036-5.964L35 32l5.964-2.037L43 24z"
    />
    <Path
      fill="url(#paint5_linear_1383_38859)"
      d="M120 55l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L120 67l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L120 55z"
    />
    <Path
      fill="url(#paint6_linear_1383_38859)"
      d="M37.828 122.828l6.693 1.793-4.9 4.899-1.793-6.692z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1383_38859"
        x1={116.573}
        x2={40.624}
        y1={88.907}
        y2={88.352}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1383_38859"
        x1={116.573}
        x2={40.625}
        y1={60.471}
        y2={59.81}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1383_38859"
        x1={124.964}
        x2={102.002}
        y1={112.839}
        y2={112.748}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1383_38859"
        x1={119.415}
        x2={107.934}
        y1={112.08}
        y2={112.011}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1383_38859"
        x1={50.362}
        x2={36.232}
        y1={31.901}
        y2={31.845}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1383_38859"
        x1={125.522}
        x2={114.924}
        y1={60.926}
        y2={60.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1383_38859"
        x1={43.225}
        x2={38.209}
        y1={123.018}
        y2={127.994}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGForgetPassword = memo(SvgComponent)
export default SVGForgetPassword
