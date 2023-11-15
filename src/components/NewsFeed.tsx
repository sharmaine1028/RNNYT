import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  FlatList,
  ListRenderItem,
} from 'react-native';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';
import NewsItem from './NewsItem';
import {WebView} from 'react-native-webview';

type News = {
  imageUrl: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  location: string;
  url: string;
};

type Props = typeof NewsFeed.defaultProps & {
  news: News[];
  listStyles?: StyleProp<ViewStyle>;
};

type State = {
  modalVisible: boolean;
  modalUrl: string;
};

export default class NewsFeed extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      modalVisible: false,
      modalUrl: '',
    };
  }

  static defaultProps = {
    news: [
      {
        title: 'React Native',
        imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
        description: 'Build Native Mobile Apps using JavaScript and React',
        date: new Date(),
        author: 'Facebook',
        location: 'Menlo Park, California',
        url: 'https://facebook.github.io/react-native',
      },
      {
        title: 'Packt Publishing',
        imageUrl: 'https://www.packtpub.com/sites/default/files/packt_logo.png',
        description: 'Stay Relevant',
        date: new Date(),
        author: 'Packt Publishing',
        location: 'Birmingham, UK',
        url: 'https://www.packtpub.com/',
      },
    ],
  };

  onModalClose = () => {
    this.setState({
      modalVisible: false,
      modalUrl: '',
    });
  };

  onModalOpen = (url: string) => {
    this.setState({
      modalVisible: true,
      modalUrl: url,
    });
  };

  renderModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}>
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView
            source={{uri: this.state.modalUrl}}
            onNavigationStateChange={navState => {
              if (navState.canGoBack) {
                console.log('hi');
              }
            }}
          />
        </View>
      </Modal>
    );
  };

  renderRow: ListRenderItem<News> = ({item, index}) => {
    return (
      <NewsItem
        onPress={() => this.onModalOpen(item.url)}
        style={styles.newsItem}
        index={index}
        {...item}
      />
    );
  };

  render = () => {
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <FlatList
          data={this.props.news}
          renderItem={this.renderRow}
          style={this.props.listStyles}
        />
        {this.renderModal()}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR,
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});
