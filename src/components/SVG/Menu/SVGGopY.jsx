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
        <Rect width={40} height={40} fill="url(#paint0_linear_2070_2846)" rx={20} />
        <Path
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M30 10H18.666v9.333L22 16.667h8V10zM26 23.334a2 2 0 100-4 2 2 0 000 4zM14 23.334a2 2 0 100-4 2 2 0 000 4zM18 29.334v-1.989c0-.473-.248-.908-.655-1.15-.649-.383-1.773-.861-3.345-.861-1.592 0-2.71.475-3.35.859-.405.241-.65.675-.65 1.146v1.995h8zM30 29.334v-1.989c0-.473-.248-.908-.655-1.15-.649-.383-1.773-.861-3.345-.861-1.592 0-2.71.475-3.35.859-.405.241-.65.675-.65 1.146v1.995h8z"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_2070_2846"
                x1={20}
                x2={20}
                y1={0}
                y2={40}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#7673FF" />
                <Stop offset={1} stopColor="#390B9B" />
            </LinearGradient>
        </Defs>
    </Svg>
);

const SVGGopY = memo(SvgComponent);
export default SVGGopY;
