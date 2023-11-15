import React from 'react';
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Title from './Title';

type Props = {
  url: string;
  titleText: string;
  accentColor: string;
  style: StyleProp<ViewStyle>;
};

const Thumbnail: React.FC<Props> = ({url, titleText, accentColor, style}) => {
  const imageStyle = {
    backgroundColor: `${accentColor}77`,
  };

  const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

  return (
    <View style={[styles.container, {borderColor: accentColor}, style]}>
      {url.length > 0 ? (
        <ImageBackground style={styles.image} source={{uri: url}}>
          <Title style={styles.title}>{titleText}</Title>
        </ImageBackground>
      ) : (
        <View style={[styles.image, imageStyle]}>{TitleComponent}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderStyle: 'solid',
  },
  image: {
    height: 100,
    justifyContent: 'flex-end',
  },
  title: {
    padding: 5,
  },
});

export default Thumbnail;
