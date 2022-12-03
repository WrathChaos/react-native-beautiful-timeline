import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import styles from './Point.style';

interface PointProps {
  innerContainer?: StyleProp<ViewStyle>;
  outerContainer?: StyleProp<ViewStyle>;
  pointStyle?: StyleProp<ViewStyle>;
}

const Point: React.FC<PointProps> = ({
  innerContainer,
  outerContainer,
  pointStyle,
}) => {
  return (
    <View
      style={[
        styles.innerContainer,
        styles.shadowStyle,
        innerContainer,
        pointStyle,
      ]}
    >
      <View style={[styles.outerContainer, outerContainer, pointStyle]} />
    </View>
  );
};

export default Point;
