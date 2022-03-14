import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";
/**
 *
 * @param color set màu cho icon
 * @returns
 */
const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 17 16"
        {...props}>
        <Path
            stroke={props?.color ? props.color : "#fff"}
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M13.167 2.666H2.5v12.667h10.667V2.666z"
        />
        <Path
            stroke={props?.color ? props.color : "#fff"}
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M3.833.666h11.334v13.333M5.167 6H10.5M5.167 8.666H10.5M5.167 11.332h2.666"
        />
    </Svg>
);

const SVGCopy = memo(SvgComponent);
export default SVGCopy;
