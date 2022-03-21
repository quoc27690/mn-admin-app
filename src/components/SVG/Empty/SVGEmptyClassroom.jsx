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
    <Rect
      width={59}
      height={41}
      x={42.5}
      y={35.5}
      fill="#fff"
      stroke="url(#paint0_linear_1633_17262)"
      rx={7.5}
    />
    <Path stroke="url(#paint1_linear_1633_17262)" d="M55 123v-8h8v8" />
    <Path stroke="url(#paint2_linear_1633_17262)" d="M80 123v-8h8v8" />
    <Path
      fill="url(#paint3_linear_1633_17262)"
      d="M102.382 97h22.271L127 117h-27l2.382-20z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint4_linear_1633_17262)"
      d="M101.5 76.5c0-6.627 5.373-12 12-12s12 5.373 12 12v20h-24v-20z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint5_linear_1633_17262)"
      d="M119 50.436c5.362-.898 10.286 1.071 12.393 5.822-5.997 1.004-9.925-1.802-12.393-5.822z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint6_linear_1633_17262)"
      d="M106.017 58.5a9 9 0 1114.965-10 9 9 0 01-14.965 10z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint7_linear_1633_17262)"
      d="M78.595 108.611a6.499 6.499 0 1111.41-6.098 6.497 6.497 0 01-4.737 8.862 6.498 6.498 0 01-6.673-2.764z"
    />
    <Rect
      width={18}
      height={14}
      x={75}
      y={101}
      fill="url(#paint8_linear_1633_17262)"
      rx={2}
    />
    <Path
      fill="url(#paint9_linear_1633_17262)"
      d="M77 90a7 7 0 1114 0v2a5 5 0 01-5 5h-9v-7z"
    />
    <Path
      fill="#fff"
      stroke="url(#paint10_linear_1633_17262)"
      d="M53.595 108.611a6.499 6.499 0 1111.41-6.098 6.497 6.497 0 01-4.737 8.862 6.498 6.498 0 01-6.673-2.764z"
    />
    <Rect
      width={18}
      height={14}
      x={50}
      y={101}
      fill="url(#paint11_linear_1633_17262)"
      rx={2}
    />
    <Path
      fill="url(#paint12_linear_1633_17262)"
      d="M52 90a7 7 0 1014 0 7 7 0 00-14 0z"
    />
    <Path
      fill="url(#paint13_linear_1633_17262)"
      d="M29 93l2.037 5.963L37 101l-5.963 2.036L29 109l-2.037-5.964L21 101l5.963-2.037L29 93z"
    />
    <Path
      fill="url(#paint14_linear_1633_17262)"
      d="M113 19l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L113 31l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L113 19z"
    />
    <Path
      fill="url(#paint15_linear_1633_17262)"
      d="M23.828 44.828l6.693 1.794-4.9 4.899-1.793-6.693z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1633_17262"
        x1={99.609}
        x2={46.62}
        y1={55.741}
        y2={55.438}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1633_17262"
        x1={62.681}
        x2={55.616}
        y1={118.951}
        y2={118.922}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1633_17262"
        x1={87.681}
        x2={80.616}
        y1={118.951}
        y2={118.922}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1633_17262"
        x1={125.924}
        x2={102.079}
        y1={106.876}
        y2={106.748}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1633_17262"
        x1={125.004}
        x2={102.924}
        y1={80.296}
        y2={80.229}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1633_17262"
        x1={123.472}
        x2={126.644}
        y1={49.108}
        y2={57.298}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1633_17262"
        x1={122.243}
        x2={105.463}
        y1={53.383}
        y2={53.316}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_1633_17262"
        x1={90.442}
        x2={78.078}
        y1={104.914}
        y2={104.864}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint8_linear_1633_17262"
        x1={76.059}
        x2={94.464}
        y1={96.333}
        y2={96.257}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1749FB" />
        <Stop offset={1} stopColor="#44BCFF" />
      </LinearGradient>
      <LinearGradient
        id="paint9_linear_1633_17262"
        x1={90.442}
        x2={78.078}
        y1={89.913}
        y2={89.864}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint10_linear_1633_17262"
        x1={65.442}
        x2={53.078}
        y1={104.914}
        y2={104.864}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint11_linear_1633_17262"
        x1={51.059}
        x2={69.464}
        y1={96.333}
        y2={96.257}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1749FB" />
        <Stop offset={1} stopColor="#44BCFF" />
      </LinearGradient>
      <LinearGradient
        id="paint12_linear_1633_17262"
        x1={65.442}
        x2={53.078}
        y1={89.913}
        y2={89.864}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint13_linear_1633_17262"
        x1={36.362}
        x2={22.232}
        y1={100.901}
        y2={100.845}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint14_linear_1633_17262"
        x1={118.522}
        x2={107.924}
        y1={24.926}
        y2={24.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint15_linear_1633_17262"
        x1={29.225}
        x2={24.209}
        y1={45.019}
        y2={49.995}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGEmptyClassroom = memo(SvgComponent)
export default SVGEmptyClassroom
