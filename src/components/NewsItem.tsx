import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import Thumbnail from './Thumbnail';
import ByLine from './ByLine';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  location: string;
  index: number;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export default class NewsItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onLongPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Bookmark', 'Cancel'],
        cancelButtonIndex: 1,
        title: this.props.title,
      },
      buttonIndex => console.log('Button selected', buttonIndex),
    );
  };

  render() {
    const {
      style,
      imageUrl,
      title,
      author,
      date,
      location,
      description,
      onPress,
    } = this.props;
    const accentColor =
      globalStyles.ACCENT_COLORS[
        this.props.index % globalStyles.ACCENT_COLORS.length
      ];
    return (
      <TouchableOpacity
        style={style}
        onLongPress={this.onLongPress}
        onPress={onPress}>
        <View>
          <Thumbnail
            url={imageUrl}
            titleText={title}
            accentColor={accentColor}
            style={styles.thumbnail}
          />
          <View style={styles.content}>
            <ByLine author={author} date={date} location={location} />
            <AppText>{description}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: 5,
  },
});
