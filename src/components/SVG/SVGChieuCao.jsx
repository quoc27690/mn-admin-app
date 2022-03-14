import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 17 16"
        {...props}>
        <G stroke={props?.color ? props.color : "#3A3C4B"} strokeMiterlimit={10} clipPath="url(#clip0_1549_14728)">
            <Path
                strokeLinecap="square"
                d="M12.5 13.333v-2M9.167 13.333v-2M5.833 13.333v-2M4.5 13.333c-1.84 0-3.333-.895-3.333-2V4.667c0 1.104 1.492 2 3.333 2h11.333v6.666H4.5z"
            />
            <Path d="M4.5 6.667c1.841 0 3.333-.896 3.333-2 0-1.105-1.492-2-3.333-2-1.84 0-3.333.895-3.333 2 0 1.104 1.492 2 3.333 2z" />
        </G>
        <Defs>
            <ClipPath id="clip0_1549_14728">
                <Path fill="#fff" d="M0 0H16V16H0z" transform="translate(.5)" />
            </ClipPath>
        </Defs>
    </Svg>
);

const SVGChieuCao = memo(SvgComponent);
export default SVGChieuCao;
