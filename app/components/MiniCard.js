import React,{Component} from 'react';
import { StyleSheet,ScrollView,View, Text, Image,Dimensions,TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {useNavigation,useTheme} from '@react-navigation/native'

const MiniCard = (props) =>{
 const navigation = useNavigation();
 const {colors} = useTheme()
   return(
    <TouchableOpacity onPress={()=>navigation.navigate("videoPlayer",{videoId:props.videoId,title:props.title})}>
     <View style={styles.miniCardRoot}>
       <Image style={styles.img} source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={styles.imgCard}/>
         <View style={styles.cardBar}>
             <View style={styles.cardTextView}>
             <Text style={{ fontSize:15,width:Dimensions.get("screen").width/2,color:colors.textColor}} ellipsizeMode="tail" numberOfLines={3}>{props.title}</Text>
             <Text  style={{color:colors.textColor,fontSize:12}}>{props.channel}</Text>
          </View>
       </View>
     </View>
     </TouchableOpacity>
   );
}

export default MiniCard;