import React,{useState} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,FlatList,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FA from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import MiniCard from '../components/MiniCard'
import {useSelector,useDispatch} from 'react-redux'
import {useTheme} from '@react-navigation/native'


const Search = ({navigation}) =>{
  const [value,setValue] = useState("")
  const {colors} = useTheme()
  //const [miniCardData, setMiniCard] = useState([])
  const miniCardData = useSelector(state =>{
    return state.cardData
  })
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()


  const fetchData = () =>{
    setLoading(true)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${value}&type=video&key=AIzaSyDpYgSFSYJBYWeq6_Qv_efj0M7stfgmvmI`)
    .then(res=>res.json())
    .then(data=>{
          console.log(data)
          setLoading(false)
          dispatch({type:"add" ,payload:data.items})
        })
    }

  return(

     <View style={{flex:1}}>
       <View style={styles.searchBar}>
         <MaterialIcon  name="arrow-back" color={colors.textColor} size={32} onPress={() =>navigation.goBack()}/>
         <TextInput style={styles.textBar} value={value} onChangeText={(text)=>setValue(text)} />
         <MaterialIcon name="send" size={32}   color={colors.textColor} onPress={() => fetchData()} />
       </View>

        {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null }
       <FlatList
          data={miniCardData}
           renderItem={({item})=>{
             return <MiniCard
                       videoId={item.id.videoId}
                       title={item.snippet.title}
                      channel={item.snippet.channelTitle}
                    />
           }}
           keyExtractor={item=>item.id.videoId}
           />

     </View>
  );

};

export default Search;