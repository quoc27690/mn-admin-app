import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
            d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
            fill="white"
            stroke={props?.color ? props.color : "#2175EF"}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path d="M17 23L25 16L17 9V13H7V19H17V23Z" fill={props?.color ? props.color : "#2175EF"} />
    </Svg>
);

const SVGCircleArrowRight = memo(SvgComponent);
export default SVGCircleArrowRight;
