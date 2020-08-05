import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { useNavigation ,useTheme} from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux'

import Icon from 'react-native-vector-icons/Entypo';
import FA from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style';

export default function Header(){
   const navigation = useNavigation()
   const dispatch = useDispatch()
   const {colors} = useTheme()
   const currentTheme = useSelector(state=>{
      return state.myDarkMode
   })
   return (
         <View style = {{height:45, flexDirection:"row",justifyContent:"space-between",elevation:4,shadowOffset:{  width: 10,  height: 10,  },
                                  shadowColor: 'black',
                                  shadowOpacity: 1.0,backgroundColor:colors.headerColor}}>
           <View style = {styles.left}>
             <Icon style ={styles.icon} name="youtube" size={35} color="red" />
             <Text style={ {fontSize:24, marginLeft:5,marginTop:1,fontWeight:"bold",color: colors.textColor}}>YouTube</Text>
           </View>
           <View style={styles.right}>
              <FA name="video-camera" size={27} color={colors.iconColor} />
              <FA name="search" size={27} color={colors.iconColor} onPress={() => navigation.navigate("search")} />
              <MaterialCommunityIcons name="toggle-switch-off" size={30} color={colors.iconColor}
               onPress={()=>dispatch({type:"changeTheme",payload:!currentTheme})}/>
           </View>
         </View>
       );
};



