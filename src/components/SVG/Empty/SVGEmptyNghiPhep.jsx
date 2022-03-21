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
    <Rect width={153} height={153} fill="#F8F8FF" rx={76.5} />
    <Path
      fill="#fff"
      stroke="url(#paint0_linear_1017_10711)"
      d="M103.693 45.905v61.003a2.404 2.404 0 01-2.405 2.404H51.905a2.404 2.404 0 01-2.405-2.404V45.905a2.404 2.404 0 012.405-2.405h49.383a2.404 2.404 0 012.405 2.405z"
    />
    <Path
      fill="url(#paint1_linear_1017_10711)"
      d="M91.12 60.43h-8.714a1.452 1.452 0 110-2.906h8.715a1.452 1.452 0 110 2.905z"
    />
    <Path
      fill="url(#paint2_linear_1017_10711)"
      d="M91.12 72.049h-8.714a1.452 1.452 0 110-2.905h8.715a1.452 1.452 0 110 2.905z"
    />
    <Path
      fill="url(#paint3_linear_1017_10711)"
      d="M91.12 83.669H62.073a1.452 1.452 0 110-2.905h29.049a1.452 1.452 0 110 2.905z"
    />
    <Path
      fill="url(#paint4_linear_1017_10711)"
      d="M91.12 95.288H62.073a1.452 1.452 0 110-2.905h29.049a1.452 1.452 0 110 2.905z"
    />
    <Path
      fill="url(#paint5_linear_1017_10711)"
      d="M73.692 72.049h-11.62c-.803 0-1.452-.65-1.452-1.453v-11.62c0-.8.649-1.452 1.452-1.452h11.62c.803 0 1.452.651 1.452 1.453v11.62c0 .801-.65 1.452-1.452 1.452z"
    />
    <Path
      fill="url(#paint6_linear_1017_10711)"
      d="M36 40l2.036 5.964L44 48l-5.964 2.036L36 56l-2.036-5.964L28 48l5.964-2.036L36 40z"
    />
    <Path
      fill="url(#paint7_linear_1017_10711)"
      d="M113 71l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L113 83l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L113 71z"
    />
    <Path
      fill="url(#paint8_linear_1017_10711)"
      d="M110.172 115.172l6.692 1.793-4.899 4.899-1.793-6.692z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1017_10711"
        x1={101.994}
        x2={53.249}
        y1={75.994}
        y2={75.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1017_10711"
        x1={92.11}
        x2={81.851}
        y1={58.959}
        y2={58.795}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1017_10711"
        x1={92.11}
        x2={81.851}
        y1={70.579}
        y2={70.415}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1017_10711"
        x1={91.3}
        x2={63.133}
        y1={82.198}
        y2={80.962}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1017_10711"
        x1={91.3}
        x2={63.133}
        y1={93.818}
        y2={92.582}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1017_10711"
        x1={74.565}
        x2={61.738}
        y1={64.697}
        y2={64.646}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1017_10711"
        x1={43.362}
        x2={29.232}
        y1={47.901}
        y2={47.845}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_1017_10711"
        x1={118.522}
        x2={107.924}
        y1={76.926}
        y2={76.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint8_linear_1017_10711"
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

const SVGEmptyNghiPhep = memo(SvgComponent)
export default SVGEmptyNghiPhep
