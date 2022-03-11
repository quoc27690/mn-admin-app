import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 40 40"
        {...props}>
        <Rect width={40} height={40} fill="url(#paint0_linear_2070_314)" rx={20} />
        <Path
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M25.84 30L10 28.552V10.448L25.84 9v21zM13.96 22.033h7.2M13.96 24.93l7.2.363"
        />
        <Path
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit={10}
            d="M17.56 18.775c1.59 0 2.88-1.297 2.88-2.897 0-1.6-1.29-2.896-2.88-2.896a2.888 2.888 0 00-2.88 2.896c0 1.6 1.29 2.897 2.88 2.897zM28 10.811v17.38"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_2070_314"
                x1={20}
                x2={20}
                y1={0}
                y2={40}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#32CD32" />
                <Stop offset={1} stopColor="#018B01" />
            </LinearGradient>
        </Defs>
    </Svg>
);

const SVGThucDon = memo(SvgComponent);
export default SVGThucDon;
