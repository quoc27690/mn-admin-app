import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { memo } from "react";

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 153 153"
        {...props}>
        <Rect width={153} height={153} fill="#F8F8FF" rx={76.5} />
        <Path
            fill="#fff"
            stroke="url(#paint0_linear_1022_7892)"
            d="M70.3 100.789h0c1.408 3.151-.013 6.862-3.166 8.27l.204.456-.204-.456a6.237 6.237 0 01-2.541.544 6.27 6.27 0 01-5.729-3.711s0 0 0 0L47.55 80.54l13.358-.799 9.393 21.048z"
        />
        <Path fill="url(#paint1_linear_1022_7892)" d="M113.813 68.674h-9.628v3.21h9.628v-3.21z" />
        <Path
            fill="url(#paint2_linear_1022_7892)"
            d="M109.671 53.215l-1.605-2.78-8.338 4.814 1.605 2.78 8.338-4.814z"
        />
        <Path
            fill="url(#paint3_linear_1022_7892)"
            d="M109.671 87.341l-8.338-4.814-1.605 2.78 8.338 4.814 1.605-2.78z"
        />
        <Path
            fill="url(#paint4_linear_1022_7892)"
            d="M91.348 65.465v9.628a4.814 4.814 0 100-9.628z"
        />
        <Path
            fill="#fff"
            stroke="url(#paint5_linear_1022_7892)"
            d="M40.5 70.278c0-5.916 4.816-10.732 10.732-10.732h2.71V81.01h-2.71c-5.916 0-10.732-4.816-10.732-10.733z"
        />
        <Path
            fill="#fff"
            stroke="url(#paint6_linear_1022_7892)"
            d="M89.157 43.668h0a1.106 1.106 0 011.69.936v51.348a1.106 1.106 0 01-1.69.936h0L63.874 81.086l-.122-.076h-8.81V59.546h8.81l.122-.076 25.283-15.802z"
        />
        <Path fill="url(#paint7_linear_1022_7892)" d="M56.046 59.046h-3.209V81.51h3.21V59.046z" />
        <Path
            fill="url(#paint8_linear_1022_7892)"
            d="M36 40l2.036 5.964L44 48l-5.964 2.036L36 56l-2.036-5.964L28 48l5.964-2.036L36 40z"
        />
        <Path
            fill="url(#paint9_linear_1022_7892)"
            d="M130 56l1.08 4.13 4.116-1.13-3.036 3 3.036 3-4.116-1.13L130 68l-1.08-4.13-4.116 1.13 3.036-3-3.036-3 4.116 1.13L130 56z"
        />
        <Path
            fill="url(#paint10_linear_1022_7892)"
            d="M110.172 115.172l6.692 1.793-4.899 4.899-1.793-6.692z"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_1022_7892"
                x1={70.366}
                x2={48.689}
                y1={94.472}
                y2={94.403}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_1022_7892"
                x1={113.429}
                x2={104.927}
                y1={70.259}
                y2={70.157}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint2_linear_1022_7892"
                x1={105.489}
                x2={104.076}
                y1={55.481}
                y2={53.025}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint3_linear_1022_7892"
                x1={108.546}
                x2={101.234}
                y1={88.522}
                y2={84.183}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint4_linear_1022_7892"
                x1={95.97}
                x2={91.718}
                y1={70.219}
                y2={70.211}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint5_linear_1022_7892"
                x1={53.866}
                x2={41.112}
                y1={70.139}
                y2={70.107}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint6_linear_1022_7892"
                x1={89.877}
                x2={57.282}
                y1={69.941}
                y2={69.853}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint7_linear_1022_7892"
                x1={55.918}
                x2={53.084}
                y1={70.139}
                y2={70.138}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint8_linear_1022_7892"
                x1={43.362}
                x2={29.232}
                y1={47.901}
                y2={47.845}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint9_linear_1022_7892"
                x1={135.522}
                x2={124.924}
                y1={61.926}
                y2={61.884}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
            <LinearGradient
                id="paint10_linear_1022_7892"
                x1={115.568}
                x2={110.552}
                y1={115.362}
                y2={120.338}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#17DFFB" stopOpacity={0.46} />
                <Stop offset={1} stopColor="#44F" />
            </LinearGradient>
        </Defs>
    </Svg>
);

const SVGEmptyNotification = memo(SvgComponent);
export default SVGEmptyNotification;
