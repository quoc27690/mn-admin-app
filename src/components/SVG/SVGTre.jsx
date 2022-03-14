import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 12 11"
        {...props}>
        <Path
            stroke="#00110D"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 3.875c-.084 0-.168.01-.25.03a4.495 4.495 0 00-8.5 0 1.125 1.125 0 10-.25 2.22c.022 0 .044-.005.067-.007a4.494 4.494 0 008.866 0c.023 0 .044.007.067.007a1.125 1.125 0 100-2.25v0z"
        />
        <Path
            fill="#00110D"
            d="M4.125 5.375a.75.75 0 100-1.5.75.75 0 000 1.5zM7.875 5.375a.75.75 0 100-1.5.75.75 0 000 1.5z"
        />
        <Path
            stroke="#00110D"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.795 7.33a2.611 2.611 0 002.41 0M6 .875a1.125 1.125 0 10.796 1.92"
        />
    </Svg>
);

const SVGTre = memo(SvgComponent);
export default SVGTre;
