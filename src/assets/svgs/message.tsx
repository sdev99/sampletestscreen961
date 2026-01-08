import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Message = ({
  width = 15,
  height = 15,
  color = '#455468',
  ...props
}: Props) => (
  <Svg width={width} height={height} viewBox="0 0 17 17" fill="none" {...props}>
    <Path
      d="M15.75 7.85526V8.25C15.75 11.7855 15.75 13.5533 14.6517 14.6517C13.5533 15.75 11.7855 15.75 8.25 15.75C4.71447 15.75 2.9467 15.75 1.84835 14.6517C0.75 13.5533 0.75 11.7855 0.75 8.25C0.75 4.71447 0.75 2.9467 1.84835 1.84835C2.9467 0.75 4.71447 0.75 8.25 0.75H8.64474"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.75 10.3333H11.8613C11.1965 10.3333 10.6742 11.0663 10.3812 11.8408C10.0629 12.6824 9.42545 13.4583 8.25 13.4583C7.07455 13.4583 6.43716 12.6824 6.11885 11.8408C5.82586 11.0663 5.3035 10.3333 4.63868 10.3333H0.75"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);

export default Message;
