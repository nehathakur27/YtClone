import React,{useState} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,FlatList} from 'react-native';
import Header from '../components/Header'
import styles from './styles'
import Card from '../components/Card'
import {useSelector} from 'react-redux'



const LilCard = ({name}) =>{
    return(
      <View style = {styles.lilCard}>
        <Text style={styles.lilCardText}>{name}</Text>
      </View>
    );
  }

const Explore = () =>{
  const cardData = useSelector(state=>{
     return state.cardData
   })
  return(
    <View style={{flex:1,}}>
      <Header />
       <View style={styles.alignCards}>
                <LilCard name="Gaming"/>
                <LilCard name="Trending" />
                <LilCard name = "Fashion"/>
                <LilCard name = "News"/>
                <LilCard name="Entertainment"/>
                <LilCard name="Music"/>
            </View>
            <Text style={styles.textTrend}>Trending Videos</Text>

              <FlatList  data = {cardData} renderItem = {({item}) => {
                   return <Card   videoId={item.id.videoId}
                              title={item.snippet.title}
                                 channel={item.snippet.channelTitle}/>
                          }}
                           keyExtractor={item=>item.id.videoId} />
    </View>
  );
}

export default Explore;