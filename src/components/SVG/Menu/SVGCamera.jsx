import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 40 40"
        {...props}>
        <Rect width={40} height={40} fill="url(#paint0_linear_2070_2837)" rx={20} />
        <Path
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M30 28.307h-5.22a1.41 1.41 0 01-1.374-1.093l-.804-3.487M29.727 20.318L12.9 23.45l-1.778-9.552 15.44-2.875a1.41 1.41 0 011.643 1.128l1.52 8.166zM9 15.32l1.423 7.642"
        />
        <Path
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M16.612 18.09a1.057 1.057 0 100-2.113 1.057 1.057 0 000 2.114zM30 25.137v6.342"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_2070_2837"
                x1={20}
                x2={20}
                y1={0}
                y2={40}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#D972FD" />
                <Stop offset={1} stopColor="#791093" />
            </LinearGradient>
        </Defs>
    </Svg>
);

const SVGCamera = memo(SvgComponent);
export default SVGCamera;
