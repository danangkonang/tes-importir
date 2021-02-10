import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './TabNavigation';
import SplachSceen from '../pages/auth/SplachSceen';
import DetailProduct from '../pages/product/DetailProduct';

export const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const Stack = createStackNavigator();

export default function App(props) {
  const [state, dispatch] = React.useState({
    isLoading: true,
  });

  React.useEffect(() => {
    const auth = () => {
      setTimeout(() => {
        dispatch({
          ...state,
          isLoading: false,
        });
      }, 3000);
    };
    auth();
  });

  if (state.isLoading) {
    return <SplachSceen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNav"
        screenOptions={{
          headerShown: false,
        }}>
        <React.Fragment>
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen
            name="DetailProduct"
            component={DetailProduct}
            options={horizontalAnimation}
          />
        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
