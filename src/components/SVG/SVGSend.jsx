import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 20 20"
        {...props}>
        <Path
            stroke={props?.color ? props.color : "#2175EF"}
            strokeMiterlimit={10}
            d="M18.666 1.75L5.333 11.333V18l2.917-2.083"
        />
        <Path
            stroke={props?.color ? props.color : "#2175EF"}
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M1.167 8.417l17.5-6.667-3.334 16.667-14.166-10z"
        />
    </Svg>
);

const SVGSend = memo(SvgComponent);
export default SVGSend;
