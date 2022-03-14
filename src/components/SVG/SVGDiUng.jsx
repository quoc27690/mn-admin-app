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
        <G clipPath="url(#clip0_1745_11909)">
            <Path
                stroke={props?.color ? props.color : "#3A3C4B"}
                strokeLinecap="square"
                strokeMiterlimit={10}
                d="M13.313 11.092l-1.48-.592"
            />
            <Path
                fill={props?.color ? props.color : "#3A3C4B"}
                d="M15.167 12.5a.667.667 0 100-1.333.667.667 0 000 1.333zM13.833 15.333a.833.833 0 100-1.666.833.833 0 000 1.666z"
            />
            <Path
                stroke={props?.color ? props.color : "#3A3C4B"}
                strokeLinecap="square"
                strokeMiterlimit={10}
                d="M9.833 12.5l.592 1.48"
            />
            <Path
                fill={props?.color ? props.color : "#3A3C4B"}
                d="M11.167 16.5a.667.667 0 100-1.333.667.667 0 000 1.333z"
            />
            <Path
                stroke={props?.color ? props.color : "#3A3C4B"}
                strokeLinecap="square"
                strokeMiterlimit={10}
                d="M2.955 15.395a2 2 0 01-.894-2.684l.439-.878 2.211 1.106a2 2 0 002.684-.894l.438-.878-1.333-2h3.027l.306-1.334 2.334-.333-1.01-4.376c.261-.41.488-.842.676-1.29M2.5 2.97a4.648 4.648 0 004.596-1.137"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1745_11909">
                <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5 .5)" />
            </ClipPath>
        </Defs>
    </Svg>
);

const SVGDiUng = memo(SvgComponent);
export default SVGDiUng;
