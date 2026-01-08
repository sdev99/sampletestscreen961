import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const MegaCreater = ({ width = 15, height = 15 }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
    <G clipPath="url(#clip0)">
      <Path
        d="M11.5992 9.85291L9.71569 7.70217L6.89044 10.1838V14.4853L11.5992 9.85291Z"
        fill="url(#paint0)"
      />
      <Path
        d="M6.26262 6.87496L5.32087 5.38599L3.59433 7.04041L4.22216 8.19849L5.94871 7.53673L6.26262 6.87496Z"
        fill="url(#paint1)"
      />
      <Path
        d="M7.20444 4.88967V1.24996L9.08794 5.88231L7.20444 4.88967Z"
        fill="url(#paint2)"
      />
      <Path
        d="M9.08794 5.88236L7.20444 4.88971L3.43744 10.3493L5.94877 13.1618L9.08794 5.88236Z"
        fill="url(#paint3)"
      />
      <Path
        d="M9.7157 7.70217V6.2132L11.5992 9.8529L9.7157 7.70217Z"
        fill="url(#paint4)"
      />
      <Path
        d="M5.32087 5.38599L5.94871 2.90437L3.59433 7.0404L5.32087 5.38599Z"
        fill="url(#paint5)"
      />
    </G>

    <Defs>
      <LinearGradient
        id="paint0"
        x1="11.9803"
        y1="5.72416"
        x2="3.90406"
        y2="6.67864"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF0206" />
        <Stop offset={0.79} stopColor="#DB0206" />
        <Stop offset={1} stopColor="#7D0709" />
      </LinearGradient>

      <LinearGradient
        id="paint1"
        x1="10.38"
        y1="7.3693"
        x2="3.47026"
        y2="8.20573"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8B0204" />
        <Stop offset={0.31} stopColor="#E70408" />
        <Stop offset={1} stopColor="#BA0104" />
      </LinearGradient>

      <LinearGradient
        id="paint2"
        x1="3.61448"
        y1="1.24996"
        x2="6.91099"
        y2="15.8488"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FD1216" />
        <Stop offset={1} stopColor="#FC393C" />
      </LinearGradient>

      <LinearGradient
        id="paint3"
        x1="9.80807"
        y1="1.47765"
        x2="5.05619"
        y2="13.8558"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF0105" />
        <Stop offset={1} stopColor="#FF1F23" />
      </LinearGradient>

      <LinearGradient
        id="paint4"
        x1="3.9547"
        y1="2.97055"
        x2="9.60106"
        y2="14.649"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D82B2E" />
        <Stop offset={1} stopColor="#EA5C5E" />
      </LinearGradient>

      <LinearGradient
        id="paint5"
        x1="6.08306"
        y1="3.1393"
        x2="3.42523"
        y2="6.75018"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F0161A" />
        <Stop offset={1} stopColor="#FF4346" />
      </LinearGradient>

      <ClipPath id="clip0">
        <Rect width="15" height="15" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MegaCreater;
