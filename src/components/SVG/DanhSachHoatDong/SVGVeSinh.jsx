import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <Path
      fill="#40E0D0"
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
    />
    <Path
      fill="#E6E6E6"
      d="M34.044 24.783H13.696a.782.782 0 01-.783-.783V9.913A3.918 3.918 0 0116.826 6h14.087a3.918 3.918 0 013.913 3.913V24c0 .433-.35.783-.782.783z"
    />
    <Path
      fill="#B3B3B3"
      d="M28.565 42h-9.391a.782.782 0 01-.783-.783v-4.695c0-.433.35-.783.783-.783h9.391c.433 0 .783.35.783.783v4.695c0 .433-.35.783-.783.783z"
    />
    <Path
      fill="#E6E6E6"
      d="M28.565 37.304h-9.391C13.564 37.304 9 32.74 9 27.13V24c0-.433.35-.783.783-.783h28.174c.432 0 .782.35.782.783v3.13c0 5.61-4.564 10.174-10.174 10.174z"
    />
    <Path
      fill="#B3B3B3"
      d="M38.74 26.348H9v-1.566c0-.864.7-1.565 1.565-1.565h26.609c.865 0 1.565.7 1.565 1.566v1.565z"
    />
  </Svg>
)

const SVGVeSinh = memo(SvgComponent)
export default SVGVeSinh
