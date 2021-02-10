import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../helper/colors';
import {Carousel} from './Carousel';
const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];
const App = () => {
  return (
    <View style={{height: 200, backgroundColor: colors.white}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          zIndex: 1,
        }}
        colors={[colors.light, colors.default]}>
        <View
          style={{
            height: 150,
            // backgroundColor: 'green',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            zIndex: 1,
          }}
        />
      </LinearGradient>
      <View
        style={{
          height: 60,
          backgroundColor: colors.secondary,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          marginLeft: 10,
          marginRight: 40,
          marginTop: -23,
        }}>
        <Text>Baner</Text>
      </View>
      <View
        style={{
          // backgroundColor: 'rgba(0,0,0, 0.3)',
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: 200,
          padding: 20,
        }}>
        <View
          style={{backgroundColor: colors.white, flex: 1, borderRadius: 10}}>
          {/* <Text>image</Text> */}
          <Carousel images={images} />
        </View>
      </View>
    </View>
  );
};
export default App;
