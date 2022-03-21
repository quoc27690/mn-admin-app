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
      stroke="url(#paint0_linear_1028_19969)"
      d="M76.906 122.312c-25.036 0-45.406-20.368-45.406-45.406S51.87 31.5 76.906 31.5c25.036 0 45.406 20.368 45.406 45.406s-20.37 45.406-45.406 45.406z"
    />
    <Path
      fill="url(#paint1_linear_1028_19969)"
      stroke="url(#paint2_linear_1028_19969)"
      d="M56.844 71.423h0c-.2-.615.02-1.29.542-1.67h0l18.64-13.543h.001a1.489 1.489 0 011.758 0h.001l18.64 13.542h0c.525.38.743 1.056.543 1.67h0l-7.12 21.914s0 0 0 0a1.497 1.497 0 01-1.422 1.034H65.386a1.497 1.497 0 01-1.423-1.034l-7.12-21.913z"
    />
    <Path
      fill="url(#paint3_linear_1028_19969)"
      stroke="url(#paint4_linear_1028_19969)"
      d="M63.89 33.858a1.386 1.386 0 01-.335-.347A45.234 45.234 0 0176.906 31.5c4.646 0 9.127.709 13.35 2.012-.09.134-.202.251-.333.346 0 0 0 0 0 0L77.779 42.61h0c-.259.188-.564.28-.873.28-.308 0-.614-.092-.872-.28h-.001L63.89 33.858s0 0 0 0z"
    />
    <Path
      fill="url(#paint5_linear_1028_19969)"
      stroke="url(#paint6_linear_1028_19969)"
      d="M31.507 76.203a45.134 45.134 0 018.263-25.38 1.375 1.375 0 01.22.417l4.567 14.235h0a1.494 1.494 0 01-.54 1.663h0l-12.079 8.846c-.133.097-.279.17-.43.219z"
    />
    <Path
      fill="url(#paint7_linear_1028_19969)"
      stroke="url(#paint8_linear_1028_19969)"
      d="M62.133 119.386v.001c.05.152.072.309.068.467-8.668-2.975-16.161-8.502-21.574-15.688.15-.053.306-.082.466-.082h.006l14.938.054s0 0 0 0a1.497 1.497 0 011.415 1.028v.001l4.68 14.219z"
    />
    <Path
      fill="url(#paint9_linear_1028_19969)"
      stroke="url(#paint10_linear_1028_19969)"
      d="M96.359 105.167v-.001c.2-.612.769-1.025 1.415-1.028 0 0 0 0 0 0l14.737-.054.001.002h.207c.16 0 .316.029.467.083-5.413 7.183-12.905 12.711-21.575 15.687a1.38 1.38 0 01.067-.47v-.001l4.68-14.218z"
    />
    <Path
      fill="url(#paint11_linear_1028_19969)"
      stroke="url(#paint12_linear_1028_19969)"
      d="M109.793 67.138h0a1.498 1.498 0 01-.54-1.664s0 0 0 0l4.567-14.233s0 0 0 0c.049-.152.124-.291.22-.417a45.133 45.133 0 018.261 25.378 1.502 1.502 0 01-.429-.218l-12.079-8.846z"
    />
    <Path
      fill="url(#paint13_linear_1028_19969)"
      d="M28.16 108.982l4.65 4.254 6.208-1.076-4.254 4.649 1.076 6.209-4.65-4.254-6.208 1.076 4.254-4.649-1.076-6.209z"
    />
    <Path
      fill="url(#paint14_linear_1028_19969)"
      d="M123 37l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L123 49l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L123 37z"
    />
    <Path
      fill="url(#paint15_linear_1028_19969)"
      d="M109.836 114.164l7.486 2.006-5.48 5.481-2.006-7.487z"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1028_19969"
        x1={119.154}
        x2={38.068}
        y1={76.339}
        y2={76.016}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1028_19969"
        x1={95.898}
        x2={59.448}
        y1={74.902}
        y2={74.75}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1028_19969"
        x1={95.898}
        x2={59.448}
        y1={74.902}
        y2={74.75}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1028_19969"
        x1={89.827}
        x2={65.03}
        y1={37.119}
        y2={36.895}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1028_19969"
        x1={89.827}
        x2={65.03}
        y1={37.119}
        y2={36.895}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1028_19969"
        x1={44.566}
        x2={32.089}
        y1={63.257}
        y2={63.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1028_19969"
        x1={44.566}
        x2={32.089}
        y1={63.257}
        y2={63.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_1028_19969"
        x1={61.792}
        x2={41.644}
        y1={111.942}
        y2={111.834}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint8_linear_1028_19969"
        x1={61.792}
        x2={41.644}
        y1={111.942}
        y2={111.834}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint9_linear_1028_19969"
        x1={113.016}
        x2={92.867}
        y1={111.943}
        y2={111.835}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint10_linear_1028_19969"
        x1={113.016}
        x2={92.867}
        y1={111.943}
        y2={111.835}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint11_linear_1028_19969"
        x1={122.244}
        x2={109.769}
        y1={63.257}
        y2={63.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint12_linear_1028_19969"
        x1={122.244}
        x2={109.769}
        y1={63.257}
        y2={63.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint13_linear_1028_19969"
        x1={38.412}
        x2={25.988}
        y1={112.38}
        y2={119.112}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint14_linear_1028_19969"
        x1={128.522}
        x2={117.924}
        y1={42.926}
        y2={42.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
      <LinearGradient
        id="paint15_linear_1028_19969"
        x1={115.873}
        x2={110.262}
        y1={114.377}
        y2={119.944}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17DFFB" stopOpacity={0.46} />
        <Stop offset={1} stopColor="#44F" />
      </LinearGradient>
    </Defs>
  </Svg>
)

const SVGEmptyHoatDong = memo(SvgComponent)
export default SVGEmptyHoatDong
