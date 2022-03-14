import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 15 16"
        {...props}
    >
        <Path
            stroke={
                props.color || props.stroke
                    ? props.color || props.stroke
                    : "#2175EF"
            }
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M1.5 6.5v7a2 2 0 002 2h8a2 2 0 002-2v-7M.5 3.5h14M5.5 3.5v-3h4v3M7.5 7.5v5M10.5 7.5v5M4.5 7.5v5"
        />
    </Svg>
);

const SVGRemove = memo(SvgComponent);
export default SVGRemove;
