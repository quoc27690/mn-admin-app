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
      stroke="url(#paint0_linear_1104_14841)"
      d="M109.618 87.108h0l-14.986 7.486a9.794 9.794 0 01-8.489 6.508h-.002l-19.743 1.411-.017.001H66.24a2.278 2.278 0 01-1.625-.611l.34-.366-.34.366a2.285 2.285 0 01-.58-2.466 2.277 2.277 0 012.055-1.48h.131l19.56-1.018a5.23 5.23 0 00-.005-10.434l-.026-.002-.027-.005-18.319-3.329s0 0 0 0a14.61 14.61 0 01-2.54-.7h0l-9.848-3.708h-.001a13.769 13.769 0 00-6.334-.782h0l-11.044 1.227h0a1.28 1.28 0 00-1.138 1.27v21.522a1.279 1.279 0 001.279 1.279h1.49c2.608.001 5.169.693 7.422 2.006v.001l13.284 7.767 49.643-25.943zm0 0l.008-.004m-.008.004l.008-.004m0 0a5.312 5.312 0 016.244.983c.131.143.255.293.371.448l.001.002a5.176 5.176 0 01-1.028 7.249l-14.719 11.05h-.001a13.703 13.703 0 01-5.414 2.454h0l-25.36 5.336h-.001m39.907-27.522l-39.907 27.522m0 0c-3.33.702-6.804.141-9.743-1.575l9.743 1.575z"
    />
    <Path
      stroke="url(#paint1_linear_1104_14841)"
      d="M88.163 67.453l4.42-4.42 9.075 9.075-4.42 4.42a6.417 6.417 0 11-9.075-9.075z"
    />
    <Path
      fill="url(#paint2_linear_1104_14841)"
      stroke="url(#paint3_linear_1104_14841)"
      d="M101.988 56.29c1.701 0 3.333.674 4.538 1.875a6.427 6.427 0 01-.001 9.076l-4.16 4.16-9.075-9.075 4.16-4.16a6.426 6.426 0 014.538-1.876z"
    />
    <Path
      fill="url(#paint4_linear_1104_14841)"
      stroke="url(#paint5_linear_1104_14841)"
      d="M74.116 40.38l4.289 4.288-9.076 9.075-4.288-4.288a6.417 6.417 0 019.075-9.075z"
    />
    <Path
      stroke="url(#paint6_linear_1104_14841)"
      d="M74.329 58.743l-4.292-4.292 9.075-9.076 4.292 4.292a6.417 6.417 0 01-9.075 9.076z"
    />
    <Path
      fill="url(#paint7_linear_1104_14841)"
      d="M36 40l2.036 5.964L44 48l-5.964 2.036L36 56l-2.036-5.964L28 48l5.964-2.036L36 40z"
    />
    <Path
      fill="url(#paint8_linear_1104_14841)"
      d="M113 71l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L113 83l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L113 71z"
    />
    <Path
      fill="url(#paint9_linear_1104_14841)"
      d="M110.172 115.172l6.692 1.793-4.899 4.899-1.793-6.692z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1104_14841"
        x1={114.522}
        x2={42.3}
        y1={96.172}
        y2={95.553}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1104_14841"
        x1={101.705}
        x2={87.06}
        y1={70.515}
        y2={70.456}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1104_14841"
        x1={108.252}
        x2={93.839}
        y1={63.848}
        y2={63.791}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1104_14841"
        x1={108.252}
        x2={93.839}
        y1={63.848}
        y2={63.791}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1104_14841"
        x1={78.456}
        x2={63.928}
        y1={46.124}
        y2={46.066}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1104_14841"
        x1={78.456}
        x2={63.928}
        y1={46.124}
        y2={46.066}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1104_14841"
        x1={85.128}
        x2={70.596}
        y1={52.794}
        y2={52.736}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_1104_14841"
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
        id="paint8_linear_1104_14841"
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
        id="paint9_linear_1104_14841"
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

const SVGEmptyDanThuoc = memo(SvgComponent)
export default SVGEmptyDanThuoc
