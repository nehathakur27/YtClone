import React,{Component} from 'react';
import { StyleSheet,ScrollView,View, Text, Image,Dimensions,TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {useNavigation,useTheme} from '@react-navigation/native'

const Card = (props) => {
  const navigation = useNavigation();
  const {colors} = useTheme()
  return(
    <TouchableOpacity  onPress={()=>navigation.navigate("videoPlayer",{videoId:props.videoId,title:props.title})}>
    <View style={styles.cardRoot} >
       <Image style={styles.img} source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} />
       <View style={styles.cardBar}>
         <MaterialIcon name="account-circle" size={40} color={colors.textColor} />
         <View style={styles.cardTextView}>
           <Text style={{fontSize:20,width:Dimensions.get("screen").width-50,color:colors.textColor}} ellipsizeMode="tail" numberOfLines={1}>{props.title}</Text>
            <Text style={{color:colors.textColor}}>{props.channel}</Text>
         </View>
       </View>
    </View>
    </TouchableOpacity>
  );
}

export default Card;