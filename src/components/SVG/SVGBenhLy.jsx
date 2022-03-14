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
        <G
            stroke={props?.color ? props.color : "#3A3C4B"}
            strokeMiterlimit={10}
            clipPath="url(#clip0_1745_11889)">
            <Path d="M5.05 5.5h6.9M4.5 3h8M5.05 11.5h6.9M4.5 14h8" />
            <Path strokeLinecap="square" d="M12.5 16v-2.5c0-4.775-8-5.225-8-10V1" />
            <Path strokeLinecap="square" d="M4.5 16v-2.5c0-4.775 8-5.225 8-10V1" />
        </G>
        <Defs>
            <ClipPath id="clip0_1745_11889">
                <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5 .5)" />
            </ClipPath>
        </Defs>
    </Svg>
);

const SVGBenhLy = memo(SvgComponent);
export default SVGBenhLy;
