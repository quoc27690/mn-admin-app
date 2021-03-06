import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        width={24}
        height={24}
        {...props}>
        <Circle cx={256} cy={256} r={256} fill="#FCD063" />
        <G fill="#F7B84E">
            <Path d="M420.256 59.744C457.504 104.208 480 161.456 480 224c0 141.376-114.624 256-256 256-62.544 0-119.776-22.496-164.256-59.744C106.704 476.32 177.152 512 256 512c141.376 0 256-114.624 256-256 0-78.848-35.68-149.296-91.744-196.256z" />
            <Circle cx={424} cy={232} r={24} />
            <Circle cx={88} cy={232} r={24} />
        </G>
        <Path
            fill="#C98E3F"
            d="M192 208c-8.848 0-16-7.168-16-16 0-8.816-7.168-16-16-16s-16 7.184-16 16c0 8.832-7.152 16-16 16s-16-7.168-16-16c0-26.464 21.536-48 48-48s48 21.536 48 48c0 8.832-7.152 16-16 16z"
        />
        <Path
            fill="#AB7934"
            d="M160 160c22.944 0 42.128 16.208 46.848 37.744.688-1.792 1.152-3.712 1.152-5.744 0-26.464-21.536-48-48-48s-48 21.536-48 48c0 2.032.464 3.952 1.152 5.744C117.872 176.208 137.056 160 160 160z"
        />
        <Path
            fill="#C98E3F"
            d="M384 208c-8.848 0-16-7.168-16-16 0-8.816-7.168-16-16-16s-16 7.184-16 16c0 8.832-7.152 16-16 16s-16-7.168-16-16c0-26.464 21.536-48 48-48s48 21.536 48 48c0 8.832-7.152 16-16 16z"
        />
        <Path
            fill="#AB7934"
            d="M352 160c22.944 0 42.128 16.208 46.848 37.744.688-1.792 1.152-3.712 1.152-5.744 0-26.464-21.536-48-48-48s-48 21.536-48 48c0 2.032.464 3.952 1.152 5.744C309.872 176.208 329.056 160 352 160z"
        />
        <Path
            fill="#FFF"
            d="M401.472 288H110.528C102.496 288 96 293.968 96 301.344 96 382.224 167.776 448 256 448s160-65.776 160-146.656c0-7.376-6.496-13.344-14.528-13.344z"
        />
        <G fill="#E2E5E7">
            <Path d="M414.944 314.656c.464-4.4 1.056-8.784 1.056-13.312 0-7.376-6.496-13.344-14.528-13.344H110.528C102.496 288 96 293.968 96 301.344c0 4.528.592 8.912 1.056 13.312h317.888z" />
            <Path d="M128 388.976c4.912 6 10.192 11.68 16 16.944V288h-16v100.976zM208 441.232c5.216 1.52 10.56 2.8 16 3.808V288h-16v153.232zM288 445.04c5.44-1.008 10.784-2.304 16-3.808V288h-16v157.04zM384 388.976V288h-16v117.904c5.808-5.248 11.088-10.928 16-16.928z" />
        </G>
        <G fill="#CAD1D8">
            <Path d="M128 288H144V314.656H128z" />
            <Path d="M208 288H224V314.656H208z" />
            <Path d="M288 288H304V314.656H288z" />
            <Path d="M368 288H384V314.656H368z" />
        </G>
    </Svg>
);

const SVGGrinning = memo(SvgComponent);
export default SVGGrinning;
