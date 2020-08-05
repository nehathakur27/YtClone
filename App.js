import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Home from './app/screens/Home'
import Search from './app/screens/Search'
import VideoPlayer from './app/screens/VideoPlayer'
import Explore from './app/screens/Explore'
import Subscribe from './app/screens/Subscribe'
import {reducers} from './app/reducers/reducers'
import {themeReducer} from './app/reducers/themeReducer'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer,DarkTheme,DefaultTheme,useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Provider,useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'


const customDefaultTheme = {
  ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      headerColor: "white",
      iconColor:"black",
      textColor:"black",
      tabColor:"red",
    },
}
const customDarkTheme = {
  ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      headerColor: "black",
      iconColor:"white",
      textColor:"white",
      tabColor:"white",
    },
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({
   cardData:reducers,
   myDarkMode:themeReducer
})
const store = createStore(rootReducer)

const RootHome = () =>{
  const {colors} = useTheme()
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home'
                } else if (route.name === 'Explore') {
                  iconName = 'explore'
                }else if(route.name === 'Subscribe'){
                   iconName = 'subscriptions'
                }

                // You can return any component that you like here!
                return <MaterialIcon name={iconName} size={32} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: colors.tabColor,
              inactiveTintColor: 'gray',
            }} >
      <Tab.Screen  name="Home" component={Home} />
      <Tab.Screen  name="Explore" component={Explore} />
      <Tab.Screen  name="Subscribe" component={Subscribe} />
    </Tab.Navigator>
  );
}

export default App = ()=>{
     return(<Provider store={store}>
       <Navigation />
     </Provider>);
}

export function Navigation() {

  let currentTheme =useSelector(state =>{
    return state.myDarkMode
  })

  return (
       <Provider store={store}>
         <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
           <Stack.Navigator headerMode="none">
             <Stack.Screen name="rootHome" component={RootHome} />
             <Stack.Screen name="search" component={Search} />
             <Stack.Screen name="videoPlayer" component={VideoPlayer} />
           </Stack.Navigator>
         </NavigationContainer>
       </Provider>
  );
}




