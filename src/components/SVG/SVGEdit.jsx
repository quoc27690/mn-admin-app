import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 16 16"
        {...props}>
        <Path
            stroke="#2175EF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M13 .5L15.5 3l-8 8L4 12l1-3.5 8-8z"
        />
        <Path
            stroke="#2175EF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M13.5 9.5v5a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1h5"
        />
    </Svg>
);

const SVGEdit = memo(SvgComponent);
export default SVGEdit;
