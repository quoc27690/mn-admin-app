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
            stroke="#3A3C4B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M.5 8.5S3.5 3 8 3s7.5 5.5 7.5 5.5S12.5 14 8 14 .5 8.5.5 8.5zM5 8.5a3 3 0 013-3M11 8.5a3 3 0 01-3 3M1 15.5l14-14"
        />
    </Svg>
);

const SVGHidePassword = memo(SvgComponent);
export default SVGHidePassword;
