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
    <Path
      fill="#C98E3F"
      d="M343.28 304H168.72c-4.816 0-8.72 3.584-8.72 8 0 48.528 43.056 88 96 88s96-39.472 96-88c0-4.416-3.904-8-8.72-8z"
    />
    <Path
      fill="#AB7934"
      d="M351.36 320c.288-2.656.64-5.28.64-8 0-4.416-3.904-8-8.72-8H168.72c-4.816 0-8.72 3.584-8.72 8 0 2.72.352 5.344.64 8h190.72z"
    />
    <G fill="#F7B84E">
      <Circle cx={408} cy={280} r={24} />
      <Circle cx={104} cy={280} r={24} />
    </G>
    <Path
      fill="#F15642"
      d="M160 256c-2.56 0-5.104-.96-7.056-2.864l-45.728-44.928C99.984 201.104 96 191.664 96 181.616s3.984-19.504 11.216-26.624C114.448 147.92 124.064 144 134.304 144c9.584 0 18.64 8.4 25.696 14.704C167.056 152.4 176.128 144 185.728 144c10.24 0 19.84 3.92 27.072 11.008 7.248 7.12 11.2 16.56 11.2 26.624 0 10.048-3.968 19.488-11.2 26.592l-45.728 44.928A10.134 10.134 0 01160 256z"
    />
    <Path
      fill="#DA4E3C"
      d="M107.216 171.008C114.448 163.92 124.064 160 134.304 160c9.584 0 18.656 8.4 25.712 14.704C167.056 168.4 176.128 160 185.728 160c10.24 0 19.84 3.92 27.072 11.008 5.28 5.184 8.752 11.632 10.288 18.608.576-2.608.928-5.264.928-8 0-10.048-3.968-19.504-11.2-26.624C205.568 147.92 195.968 144 185.728 144c-9.6 0-18.672 8.4-25.712 14.704C152.944 152.4 143.888 144 134.304 144c-10.24 0-19.856 3.92-27.088 11.008C99.984 162.112 96 171.568 96 181.616c0 2.72.352 5.392.928 8 1.52-6.992 5.024-13.424 10.288-18.608z"
    />
    <Path
      fill="#F15642"
      d="M352 256c-2.56 0-5.088-.96-7.056-2.864l-45.712-44.928C291.984 201.104 288 191.664 288 181.616s3.984-19.504 11.216-26.624C306.432 147.92 316.064 144 326.304 144c9.568 0 18.64 8.4 25.696 14.704C359.056 152.4 368.128 144 377.712 144c10.256 0 19.84 3.92 27.072 11.008 7.232 7.12 11.2 16.56 11.2 26.624 0 10.048-3.968 19.488-11.2 26.592l-45.728 44.928C357.12 255.04 354.56 256 352 256z"
    />
    <Path
      fill="#DA4E3C"
      d="M299.216 171.008C306.432 163.92 316.064 160 326.304 160c9.584 0 18.64 8.4 25.696 14.704C359.056 168.4 368.128 160 377.712 160c10.256 0 19.84 3.92 27.072 11.008 5.264 5.184 8.768 11.632 10.288 18.608.576-2.608.928-5.264.928-8 0-10.048-3.968-19.504-11.2-26.624C397.568 147.92 387.968 144 377.712 144c-9.6 0-18.656 8.4-25.712 14.704C344.944 152.4 335.872 144 326.304 144c-10.24 0-19.856 3.92-27.072 11.008-7.248 7.104-11.232 16.56-11.232 26.608 0 2.72.336 5.392.928 8 1.52-6.992 5.008-13.424 10.288-18.608z"
    />
  </Svg>
)

const SVGLove = memo(SvgComponent)
export default SVGLove
