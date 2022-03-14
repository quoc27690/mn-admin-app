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
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M6 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM3.188 3a1.313 1.313 0 100-2.625 1.313 1.313 0 000 2.625zM4.5 11.625V9.75h3v1.875M2.25 8.25l2.25 1.5M9.75 8.25L7.5 9.75M.375 9.375v-3a2.25 2.25 0 012.25-2.25H3.75c.554 0 1.088.203 1.5.573M8.813 3a1.313 1.313 0 100-2.625 1.313 1.313 0 000 2.625zM11.625 9.375v-3a2.25 2.25 0 00-2.25-2.25H8.25c-.554 0-1.088.203-1.5.573"
        />
    </Svg>
);

const SVGHocSinh = memo(SvgComponent);
export default SVGHocSinh;
