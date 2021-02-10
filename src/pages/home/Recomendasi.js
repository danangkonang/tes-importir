import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../helper/colors';
const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];
const Recomendasi = (props) => {
  return (
    <View
      style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.secondary,
        paddingTop: 7,
        marginTop: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>New Arrivals</Text>
        <TouchableOpacity
          style={{
            paddingVertical: 7,
            paddingHorizontal: 15,
            backgroundColor: colors.default,
            marginVertical: 10,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 12, color: '#fff'}}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 80}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((item, id) => (
            <TouchableOpacity
              key={id}
              onPress={() => props.navigation.navigate('DetailProduct')}
              activeOpacity={0.8}
              style={{
                height: 250,
                backgroundColor: '#fff',
                width: 150,
                marginLeft: id === 0 ? 20 : 5,
                marginRight: id === images.length - 1 ? 20 : 5,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: '#fff',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: colors.secondary,
                  borderRadius: 10,
                }}>
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                  source={{uri: item}}
                  key={id}
                />
              </View>
              <View style={{paddingVertical: 5}}>
                <Text>Nike Air 2009</Text>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <View
                    style={{
                      backgroundColor: colors.secondary,
                      paddingVertical: 3,
                      paddingHorizontal: 5,
                      borderRadius: 5,
                      marginVertical: 3,
                    }}>
                    <Text style={{fontSize: 12}}>7 Color</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>$150</Text>
                  <View
                    style={{
                      backgroundColor: colors.white,
                      borderColor: colors.secondary,
                      borderWidth: 1,
                      padding: 2,
                      borderRadius: 5,
                      marginRight: 5,
                    }}>
                    <Feather name="plus" size={18} color={colors.dark} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export {Recomendasi};
