import React from 'react';
import {View, Text} from 'react-native';
import colors from '../../helper/colors';
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.default,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.white, fontSize: 18}}>Halo Nadia..</Text>
    </View>
  );
};
export default App;
