import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';
import styles from'./styles'


const VideoPlayer = ({route}) =>{
  const {videoId,title} = route.params
  return(
    <View style={{flex:1,}}>
    <View style={styles.videoRoot}>
         <WebView
            javaScriptEnabled={true}
            downStorageEnabled={true}
          source={{uri:`https://www.youtube.com/embed/${videoId}`}} />
        </View>
      <Text style={styles.videoText} numberOfLines={2} ellipsizeMode="tail"> {title}</Text>
      <View
        style={{borderBottomWidth:1}}
      />
    </View>
  );
}

export default VideoPlayer;