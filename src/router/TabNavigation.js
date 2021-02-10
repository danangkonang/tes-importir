import React from 'react';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home/Home';
import Feed from '../pages/feed/Feed';
import Cart from '../pages/cart/Cart';
import Message from '../pages/message/Message';
import User from '../pages/user/User';
import colors from '../helper/colors';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'bubbles' : 'bubbles';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'notebook' : 'notebook';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'emotsmile' : 'emotsmile';
          } else if (route.name === 'Message') {
            iconName = focused ? 'grid' : 'grid';
          } else {
            iconName = focused ? 'grid' : 'grid';
          }
          return <SimpleIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.text,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
export default App;
