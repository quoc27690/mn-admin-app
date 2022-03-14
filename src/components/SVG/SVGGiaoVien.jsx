import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 12 13"
        {...props}>
        <G
            stroke="#212121"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#clip0_1597_16635)">
            <Path d="M3.375 4.625v7.5M2.25 3.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM7.125 4.625h-6a.75.75 0 00-.75.75v6.75" />
            <Path d="M5.625 2.375h6v6.75h-6M7.875 9.125l1.5 3M7.125.875v1.5" />
        </G>
        <Defs>
            <ClipPath id="clip0_1597_16635">
                <Path fill="#fff" d="M0 0H12V12H0z" transform="translate(0 .5)" />
            </ClipPath>
        </Defs>
    </Svg>
);

const SVGGiaoVien = memo(SvgComponent);
export default SVGGiaoVien;
