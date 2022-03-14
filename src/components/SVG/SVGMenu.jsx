import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 32 32"
        {...props}>
        <Rect width={32} height={32} fill="#2175EF" rx={16} />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M16 17.2a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM22.4 17.2a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM9.6 17.2a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
        />
    </Svg>
);

const SVGMenu = memo(SvgComponent);
export default SVGMenu;
