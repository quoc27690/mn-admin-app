import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 40 40"
        {...props}>
        <Path
            fill="url(#paint0_linear_1634_16577)"
            d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
        />
        <Path stroke={props?.color ||"#fff" } d="M21.071 14.5a1.071 1.071 0 11-2.142 0 1.071 1.071 0 012.142 0z" />
        <Path
            stroke={props?.color ||"#fff" }
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M20 31c6.075 0 11-4.925 11-11S26.075 9 20 9 9 13.925 9 20s4.925 11 11 11zM20 26.286V20"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_1634_16577"
                x1={20}
                x2={20}
                y1={0}
                y2={40}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor={props?.linearColorFrom ? props.linearColorFrom : "#E335A3"} />
                <Stop
                    offset={1}
                    stopColor={props?.linearColorTo ? props.linearColorTo : "#7E0F55"}
                />
            </LinearGradient>
        </Defs>
    </Svg>
);

const SVGThongTinUngDung = memo(SvgComponent);
export default SVGThongTinUngDung;
