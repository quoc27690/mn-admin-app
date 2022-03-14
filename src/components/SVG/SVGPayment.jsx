import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 38 44"
        {...props}>
        <Path
            fill="url(#paint0_linear_1980_1919)"
            d="M37 44H1a1 1 0 01-1-1V1A1 1 0 011.554.17L7 3.799l5.444-3.63a1 1 0 011.109 0L19 3.799l5.445-3.63a1 1 0 011.109 0L31 3.799l5.445-3.63A1 1 0 0138 1v42a1 1 0 01-1 1z"
        />
        <Path
            fill={props?.dollarColor ? props.dollarColor : `#976231`}
            d="M20 23.223V15c2.243 0 4 1.757 4 4a1 1 0 002 0c0-3.364-2.636-6-6-6v-1a1 1 0 00-2 0v1c-3.364 0-6 2.636-6 6 0 3.928 3.154 5.039 6 5.777V33c-2.243 0-4-1.757-4-4a1 1 0 00-2 0c0 3.364 2.636 6 6 6v1a1 1 0 002 0v-1c3.364 0 6-2.636 6-6 0-3.928-3.154-5.039-6-5.777zM14 19c0-2.243 1.757-4 4-4v7.704c-2.505-.693-4-1.466-4-3.704zm6 14v-7.704c2.505.694 4 1.466 4 3.704 0 2.243-1.757 4-4 4z"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_1980_1919"
                x1={19}
                x2={19}
                y1={0}
                y2={44.001}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor={props?.linearColorFrom ? props.linearColorFrom : `#FFE793`} />
                <Stop
                    offset={1}
                    stopColor={props?.linearColorTo ? props.linearColorTo : `#FFCF87`}
                />
            </LinearGradient>
        </Defs>
    </Svg>
);

const SVGPayment = memo(SvgComponent);
export default SVGPayment;
