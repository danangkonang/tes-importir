import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../helper/colors';
import {BackgroundCarousel} from './BackgroundCarousel';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];
let size = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
let {width} = Dimensions.get('window');
const App = () => {
  const [state, setState] = React.useState({
    size: 6.5,
  });
  return (
    <View style={{flex: 1, backgroundColor: colors.secondary}}>
      <ScrollView>
        <View style={{height: 230, backgroundColor: colors.white}}>
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
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                zIndex: 1,
              }}
            />
          </LinearGradient>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              height: 230,
              padding: 20,
            }}>
            <View
              style={{
                backgroundColor: colors.white,
                flex: 1,
                borderRadius: 10,
              }}>
              <BackgroundCarousel images={images} />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            backgroundColor: colors.white,
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 19, fontWeight: '700'}}>$150</Text>
            <Text style={{fontSize: 16}}>Nike Air</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.white,
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                backgroundColor: colors.secondary,
                padding: 5,
                margin: 3,
                borderRadius: 5,
              }}>
              <Feather name="search" size={20} color={colors.text} />
            </View>
            <View
              style={{
                backgroundColor: colors.secondary,
                padding: 5,
                margin: 3,
                borderRadius: 5,
              }}>
              <Feather name="search" size={20} color={colors.text} />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#fff',
            paddingTop: 5,
            paddingBottom: 10,
            paddingHorizontal: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: colors.lightDefault,
                width: (width - 50) / 3,
                height: (width - 50) / 3,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 13,
              }}>
              <Image
                style={{
                  width: (width - 50) / 3,
                  height: (width - 50) / 3,
                  borderRadius: 13,
                }}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                }}
              />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: colors.lightDefault,
                width: (width - 50) / 3,
                height: (width - 50) / 3,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 13,
              }}>
              <Image
                style={{
                  width: (width - 50) / 3,
                  height: (width - 50) / 3,
                  borderRadius: 13,
                }}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                }}
              />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: colors.lightDefault,
                width: (width - 50) / 3,
                height: (width - 50) / 3,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 13,
              }}>
              <Image
                style={{
                  width: (width - 50) / 3,
                  height: (width - 50) / 3,
                  borderRadius: 13,
                }}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                }}
              />
            </View>
          </View>
        </View>

        <View style={{padding: 15, backgroundColor: colors.white}}>
          <Text style={{marginLeft: 5, fontWeight: 'bold'}}>Select Size</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {size.map((item, id) => (
              <View
                key={id}
                style={{
                  width: (width - 30) / 5,
                  marginBottom: 5,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    setState({
                      ...state,
                      size: item,
                    })
                  }
                  style={{
                    backgroundColor:
                      state.size === item ? colors.dark : colors.white,
                    width: (width - 60) / 5,
                    height: (width - 60) / 5,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: colors.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: state.size === item ? colors.white : colors.dark,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold'}}>Description</Text>
          <Text>
            Enim nisi velit eiusmod enim laborum incididunt fugiat laborum
            tempor. Ea et eu nostrud voluptate irure in dolor culpa id velit
            quis laboris ad. Nulla voluptate enim fugiat mollit quis esse elit
            laborum eiusmod ea dolor. Minim magna sit duis velit Lorem sit
            consequat irure minim culpa. Sit minim consequat deserunt enim anim
            occaecat commodo non tempor. Est nulla id adipisicing duis laboris.
            Cupidatat esse ea eiusmod id nostrud ex eu anim proident officia
            aliquip.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.white,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <View
          style={{
            backgroundColor: colors.secondary,
            flex: 1,
            marginRight: 10,
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 7,
          }}>
          <Text style={{fontWeight: 'bold'}}>Add To Cart</Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
            marginLeft: 10,
            paddingVertical: 10,
            borderRadius: 7,
          }}
          colors={[colors.light, colors.default]}>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', color: colors.white}}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
export default App;
