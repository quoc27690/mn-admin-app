import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 17 17"
        {...props}>
        <G stroke={props?.color ? props.color : "#3A3C4B"} strokeMiterlimit={10} clipPath="url(#clip0_1745_11826)">
            <Path
                strokeLinecap="square"
                d="M11 6.5l3.5-3M2.5 3.5l3.5 3M11 6.5H6V11h5V6.5zM6 11l-1.267 1.69a.5.5 0 00.01.613L6.5 15.5M11 11l1.268 1.69a.5.5 0 01-.01.613L10.5 15.5"
            />
            <Path d="M8.5 5a2 2 0 100-4 2 2 0 000 4z" />
        </G>
        <Defs>
            <ClipPath id="clip0_1745_11826">
                <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5 .5)" />
            </ClipPath>
        </Defs>
    </Svg>
);

const SVGAge = memo(SvgComponent);
export default SVGAge;
