import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../helper/colors';
const App = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.light, colors.default]}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>
            SHOPIN
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderRadius: 7,
            marginLeft: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 7,
            }}>
            <Feather name="search" size={20} color={colors.text} />
          </View>
          <View
            style={{
              flex: 1,
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.text}}>Search</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            margin: 10,
            borderRadius: 7,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Feather name="camera" size={20} color={colors.text} />
        </View>
      </View>
    </LinearGradient>
  );
};
export default App;
