import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 16 17"
        {...props}>
        <Path
            stroke="#212121"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 2.5l12 12M14 2.5l-12 12"
        />
    </Svg>
);

const SVGClose = memo(SvgComponent);
export default SVGClose;
