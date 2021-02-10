import * as React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import colors from '../../helper/colors';

const {width} = Dimensions.get('window');

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
  }

  setSelectedIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({selectedIndex});
  };

  render() {
    const {images} = this.props;
    const {selectedIndex} = this.state;
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {images.map((image) => (
            <Image
              style={styles.backgroundImage}
              source={{uri: image}}
              key={image}
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                {opacity: i === selectedIndex ? 0.5 : 1},
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}>
          <Text style={{color: colors.white, fontWeight: 'bold'}}>
            {this.state.selectedIndex + 1}/{images.length}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: width - 40,
    borderRadius: 10,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#fff',
  },
});

export {BackgroundCarousel};
