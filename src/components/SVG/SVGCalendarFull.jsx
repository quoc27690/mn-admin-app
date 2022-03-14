import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 22 23"
    {...props}
  >
    <Path
      fill="#fff"
      d="M16.723 12.825a4.8 4.8 0 00-2.71.84 4.965 4.965 0 00-1.796 2.24 5.092 5.092 0 00-.278 2.88 5.023 5.023 0 001.335 2.554 4.846 4.846 0 002.497 1.365 4.778 4.778 0 002.818-.284 4.902 4.902 0 002.189-1.836c.536-.82.822-1.785.822-2.771a5.045 5.045 0 00-1.428-3.527 4.824 4.824 0 00-3.45-1.46zm2.787 5.7h-3.484v-3.562h1.393V17.1h2.09v1.425z"
    />
    <Path
      fill="#fff"
      d="M10.452 20.663H2.09a.69.69 0 01-.492-.21.72.72 0 01-.204-.503V7.125a.72.72 0 01.204-.504.69.69 0 01.492-.209h16.723a.69.69 0 01.493.21c.13.133.204.314.204.503V11.4h1.393V4.275c0-.378-.147-.74-.408-1.008a1.378 1.378 0 00-.985-.417h-3.484V.712a.72.72 0 00-.204-.503.69.69 0 00-.986 0 .72.72 0 00-.204.504V2.85H6.271V.712A.72.72 0 006.067.21a.69.69 0 00-.986 0 .72.72 0 00-.204.504V2.85H1.394c-.37 0-.724.15-.986.417C.147 3.535 0 3.897 0 4.275v16.388c0 .377.147.74.408 1.007.262.267.616.417.986.417h9.058v-1.424z"
    />
  </Svg>
)

const SVGCalendarFull = memo(SvgComponent)
export default SVGCalendarFull
