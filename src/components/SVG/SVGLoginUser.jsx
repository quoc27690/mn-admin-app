import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 22 24"
        {...props}>
        <Path
            stroke="#2175EF"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.75 19.464a1.5 1.5 0 00-.639-1.23A15.55 15.55 0 0011 15.75a15.55 15.55 0 00-9.111 2.484 1.5 1.5 0 00-.639 1.23v3.786h19.5v-3.786zM11 11.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z"
        />
    </Svg>
);

const SVGLoginUser = memo(SvgComponent);
export default SVGLoginUser;
