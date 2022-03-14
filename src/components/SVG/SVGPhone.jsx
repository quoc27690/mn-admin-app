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
        <G clipPath="url(#clip0_1745_11851)">
            <Path
                stroke={props?.color ? props.color : "#3A3C4B"}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.014 10.264l-1.222 1.528a12.89 12.89 0 01-4.584-4.584l1.528-1.222a1.038 1.038 0 00.3-1.232L5.643 1.617a1.038 1.038 0 00-1.21-.583l-2.652.687a1.046 1.046 0 00-.771 1.154A15.407 15.407 0 0014.125 15.99a1.044 1.044 0 001.153-.771l.688-2.651a1.038 1.038 0 00-.583-1.21l-3.137-1.393a1.04 1.04 0 00-1.232.299v0z"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1745_11851">
                <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5 .5)" />
            </ClipPath>
        </Defs>
    </Svg>
);

const SVGPhone = memo(SvgComponent);
export default SVGPhone;
