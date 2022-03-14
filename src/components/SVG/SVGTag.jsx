import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 12 12"
        {...props}>
        <Path
            stroke="#3A3C4B"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.625 3.375H.375v8.25h11.25v-8.25zM2.625 3.375L6 .375l3.375 3M3.375 6.375h5.25M3.375 8.625h5.25"
        />
    </Svg>
);

const SVGTag = memo(SvgComponent);
export default SVGTag;
