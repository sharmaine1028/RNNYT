import React from 'react';
import {StyleSheet, View} from 'react-native';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

type Props = {
  date: Date;
  author: string;
  location: string;
};

const ByLine: React.FC<Props> = ({date, author, location}) => (
  <View>
    <View style={styles.row}>
      <SmallText>{date.toLocaleDateString()}</SmallText>
      <SmallText>{author}</SmallText>
    </View>

    {location ? (
      <View style={styles.row}>
        <SmallText style={styles.location}>{location}</SmallText>
      </View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  location: {
    color: globalStyles.MUTED_COLOR,
  },
});

export default ByLine;
