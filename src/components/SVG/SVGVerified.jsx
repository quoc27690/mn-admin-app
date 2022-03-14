import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 27 27"
    {...props}
  >
    <Path
      fill="#72C472"
      d="M23.717 2.257L13.592.57a.596.596 0 00-.184 0L3.283 2.257a.563.563 0 00-.47.555v11.813c0 3.407 1.831 6.532 5.295 9.034a21.462 21.462 0 005.214 2.75c.116.038.24.038.356 0a21.462 21.462 0 005.214-2.75c3.464-2.502 5.296-5.627 5.296-9.034V2.812a.562.562 0 00-.47-.555z"
    />
    <Path
      fill="#4DA34D"
      d="M23.716 2.258L13.591.57a.562.562 0 00-.092 0v25.868c.06 0 .12-.01.178-.03a21.476 21.476 0 005.214-2.749c3.464-2.502 5.296-5.626 5.296-9.034V2.813a.563.563 0 00-.471-.555z"
    />
    <Path
      fill="#fff"
      d="M20.346 9.305l-7.512 8.763a.562.562 0 01-.825.032l-4.202-4.202a.562.562 0 010-.796l.795-.795a.563.563 0 01.796 0l2.914 2.914 6.325-7.38a.563.563 0 01.793-.061l.854.731a.56.56 0 01.062.794z"
    />
  </Svg>
)

const SVGVerified = memo(SvgComponent)
export default SVGVerified
