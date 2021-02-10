import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../helper/colors';
const App = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 10,
      }}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.lightDefault,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }}>
          <Feather name="camera" size={23} color={colors.default} />
        </View>
        <Text style={{textAlign: 'center', fontSize: 12, color: colors.dark}}>
          Category
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.lightDefault,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }}>
          <Feather name="camera" size={23} color={colors.default} />
        </View>
        <Text style={{textAlign: 'center', fontSize: 12, color: colors.dark}}>
          Compare
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.lightDefault,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }}>
          <Feather name="camera" size={23} color={colors.default} />
        </View>
        <Text style={{textAlign: 'center', fontSize: 12, color: colors.dark}}>
          Sales Event
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.lightDefault,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }}>
          <Feather name="camera" size={23} color={colors.default} />
        </View>
        <Text style={{textAlign: 'center', fontSize: 12, color: colors.dark}}>
          Offers
        </Text>
      </View>
    </View>
  );
};
export default App;
