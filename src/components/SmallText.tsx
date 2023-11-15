import React from 'react';
import AppText from './AppText';
import {StyleSheet, TextStyle} from 'react-native';

const SmallText: React.FC<ChildrenStyleProps<TextStyle>> = ({
  children,
  style,
  ...rest
}) => (
  <AppText style={[styles.small, style]} {...rest}>
    {children}
  </AppText>
);

const styles = StyleSheet.create({
  small: {
    fontSize: 11,
  },
});
export default SmallText;
