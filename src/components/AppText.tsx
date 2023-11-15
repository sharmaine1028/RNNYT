import React from 'react';
import {Text, TextStyle} from 'react-native';
import * as globalStyles from '../styles/global';

const AppText: React.FC<ChildrenStyleProps<TextStyle>> = ({
  children,
  style,
  ...rest
}: ChildrenStyleProps<TextStyle>) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

export default AppText;
