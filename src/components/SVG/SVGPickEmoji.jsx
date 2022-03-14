import * as React from "react";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    x={0}
    y={0}
    enableBackground="new 0 0 112.066 112.066"
    viewBox="0 0 112.066 112.066"
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M56.033 0C25.136 0 0 25.136 0 56.034c0 30.894 25.136 56.032 56.032 56.032 30.895 0 56.033-25.139 56.033-56.032C112.066 25.136 86.927 0 56.033 0zm0 106.464c-27.803 0-50.43-22.627-50.43-50.43 0-27.804 22.626-50.431 50.43-50.431s50.431 22.626 50.431 50.431c-.001 27.803-22.628 50.43-50.431 50.43zm35.924-44.067a2.804 2.804 0 00-2.205-1.066H22.307a2.82 2.82 0 00-2.204 1.066 2.813 2.813 0 00-.524 2.391c4.043 16.931 19.034 28.761 36.447 28.761 17.407 0 32.39-11.818 36.449-28.761a2.774 2.774 0 00-.518-2.391zM56.033 87.946c-13.598 0-25.455-8.481-29.972-21.013h59.937a31.767 31.767 0 01-29.965 21.013zM31.731 36.361a6.946 6.946 0 016.942-6.943 6.941 6.941 0 016.938 6.943 6.945 6.945 0 01-6.938 6.941 6.948 6.948 0 01-6.942-6.941zm34.723 0a6.937 6.937 0 016.938-6.943c3.819 0 6.933 3.105 6.933 6.943 0 3.831-3.127 6.941-6.933 6.941a6.94 6.94 0 01-6.938-6.941z" />
  </Svg>
);

const SVGPickEmoji = memo(SvgComponent);
export default SVGPickEmoji;