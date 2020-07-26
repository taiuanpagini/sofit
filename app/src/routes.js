import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

import New from './pages/Expenses/New';
import Edit from './pages/Expenses/Edit';

import Profile from './pages/Profile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator(
                {
                  Home,
                  Edit,
                },
                {
                  defaultNavigationOptions: () => ({
                    headerTransparent: false,
                    headerStyle: {
                      backgroundColor: '#C6D745',
                    },
                    headerTitleStyle: {
                      fontFamily:
                        Platform.OS === 'android' ? 'Exo Bold' : 'Exo',
                      fontSize: 18,
                      fontWeight: '600',
                      textAlign: 'center',
                    },
                    headerTintColor: '#000',
                    animationEnabled: false,
                  }),
                }
              ),
            },
            New: {
              screen: New,
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: ' ',
                tabBarIcon: () => (
                  <View>
                    <LinearGradient
                      style={styles.iconTabRound}
                      start={{ x: 0, y: 1.5 }}
                      end={{ x: 0, y: 0 }}
                      colors={['#C6D745', '#4b8b45']}
                    >
                      <Icon name="add" size={26} color="#FFF" />
                    </LinearGradient>
                  </View>
                ),
              },
            },
            'Meu Perfil': {
              screen: Profile,
            },
          },
          {
            defaultNavigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Dashboard') {
                  iconName = 'event';
                } else if (routeName === 'Meu Perfil') {
                  iconName = 'person';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={25} color={tintColor} />;
              },
            }),
            resetOnBlur: true,
            navigationOptions: {},
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#4b8b45',
              inactiveTintColor: '#C6D745',
              style: {
                backgroundColor: '#FFF',
              },
              tabStyle: {
                marginTop: 10,
              },
              labelStyle: {
                fontFamily: Platform.OS === 'android' ? 'Exo Regular' : 'Exo',
                letterSpacing: 1,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
