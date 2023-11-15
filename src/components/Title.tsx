import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const Title: React.FC<ChildrenStyleProps<TextStyle>> = ({children, style}) => {
  return <AppText style={[styles.title, style]}> {children}</AppText>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`,
  },
});

export default Title;
