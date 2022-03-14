import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill={props.color ? props.color : "#222"}
        className="bi bi-reply-fill"
        viewBox="0 0 16 16"
        {...props}
    >
        <Path d="M5.921 11.9L1.353 8.62a.719.719 0 010-1.238L5.921 4.1A.716.716 0 017 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
    </Svg>
);

const SVGReply = memo(SvgComponent);
export default SVGReply;
