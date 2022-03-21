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
      stroke="url(#paint0_linear_1633_17239)"
      d="M44.954 117.995V51.18a5.227 5.227 0 015.227-5.226h64.905a5.229 5.229 0 015.226 5.227v43.906a5.227 5.227 0 01-5.226 5.227H69.781l-.14.116-22.375 18.648v.001a1.411 1.411 0 01-2.312-1.084zm-.5-66.815v66.814a1.91 1.91 0 003.132 1.468l22.375-18.648h45.125a5.729 5.729 0 005.726-5.727V51.18a5.726 5.726 0 00-5.726-5.726H50.181a5.727 5.727 0 00-5.727 5.727z"
    />
    <Path
      fill="url(#paint1_linear_1633_17239)"
      d="M33 53.09a19.09 19.09 0 1038.179 0 19.09 19.09 0 00-38.179 0z"
    />
    <Path
      fill="#fff"
      d="M53.999 45.454v5.727h5.727a1.909 1.909 0 110 3.818h-5.727v5.727a1.91 1.91 0 01-3.818 0v-5.727h-5.727a1.909 1.909 0 110-3.818h5.727v-5.727a1.91 1.91 0 013.818 0z"
    />
    <Path
      fill="url(#paint2_linear_1633_17239)"
      d="M29 75l2.037 5.963L37 83l-5.963 2.037L29 91l-2.037-5.963L21 83l5.963-2.037L29 75z"
    />
    <Path
      fill="url(#paint3_linear_1633_17239)"
      d="M130 56l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L130 68l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L130 56z"
    />
    <Path
      fill="url(#paint4_linear_1633_17239)"
      d="M110.172 115.172l6.692 1.793-4.899 4.899-1.793-6.692z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1633_17239"
        x1={117.77}
        x2={50.332}
        y1={82.22}
        y2={81.944}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1633_17239"
        x1={69.658}
        x2={35.939}
        y1={52.854}
        y2={52.719}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1633_17239"
        x1={36.362}
        x2={22.232}
        y1={82.901}
        y2={82.845}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1633_17239"
        x1={135.522}
        x2={124.924}
        y1={61.926}
        y2={61.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1633_17239"
        x1={115.568}
        x2={110.552}
        y1={115.362}
        y2={120.338}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGEmptyChat = memo(SvgComponent)
export default SVGEmptyChat
