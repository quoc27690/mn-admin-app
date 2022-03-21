import * as React from "react"
import Svg, { Circle, Path, G } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    enableBackground="new 0 0 512 512"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <Circle cx={256} cy={256} r={256} fill="#FCD063" />
    <Path
      fill="#F7B84E"
      d="M420.256 59.744C457.504 104.208 480 161.456 480 224c0 141.376-114.624 256-256 256-62.544 0-119.792-22.496-164.256-59.744C106.704 476.32 177.152 512 256 512c141.376 0 256-114.624 256-256 0-78.848-35.68-149.296-91.744-196.256z"
    />
    <Circle cx={256} cy={352} r={32} fill="#C98E3F" />
    <Path
      fill="#AB7934"
      d="M256 336c14.896 0 27.296 10.224 30.88 24 .656-2.56 1.12-5.216 1.12-8 0-17.664-14.336-32-32-32s-32 14.336-32 32c0 2.784.464 5.44 1.136 8 3.568-13.776 15.968-24 30.864-24z"
    />
    <G fill="#F7B84E">
      <Circle cx={408} cy={280} r={24} />
      <Circle cx={104} cy={280} r={24} />
    </G>
    <G fill="#50BEE8">
      <Path d="M320 224H384V512H320z" />
      <Path d="M128 224H192V512H128z" />
    </G>
    <Circle cx={160} cy={224} r={32} fill="#C98E3F" />
    <Path
      fill="#AB7934"
      d="M160 208c14.896 0 27.296 10.224 30.864 24 .672-2.576 1.136-5.216 1.136-8 0-17.664-14.336-32-32-32s-32 14.336-32 32c0 2.784.464 5.424 1.136 8 3.568-13.776 15.968-24 30.864-24z"
    />
    <Circle cx={352} cy={224} r={32} fill="#C98E3F" />
    <Path
      fill="#AB7934"
      d="M352 208c14.896 0 27.296 10.224 30.88 24 .656-2.576 1.12-5.216 1.12-8 0-17.664-14.336-32-32-32s-32 14.336-32 32c0 2.784.464 5.424 1.12 8 3.584-13.776 15.984-24 30.88-24z"
    />
  </Svg>
)

const SVGCring = memo(SvgComponent)
export default SVGCring
