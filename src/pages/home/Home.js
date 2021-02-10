import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import Header from './Header';
import Menu from './Menu';
import {Recomendasi} from './Recomendasi';
import Banner from './Banner';
import colors from '../../helper/colors';
const App = (props) => {
  // console.log(props);
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <Banner />
          <Menu />
          <Recomendasi {...props} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default App;
