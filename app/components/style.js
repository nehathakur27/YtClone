import {StyleSheet,Dimensions} from 'react-native'

export default StyleSheet.create({
        left:{
          flexDirection:"row",
          alignItems:"center",
        },

        icon:{
          marginLeft:10,

        },
        right:{
          flexDirection:"row",
          width:150,
          justifyContent:"space-around",
          alignItems:"center",
        },

        //Card
        cardRoot:{
          marginBottom:10,
        },
        img:{
           width:"100%",
           height:200,
        },
        cardBar:{
          flexDirection:"row",
          margin:5,
        },
        cardTextView:{
          marginLeft:10,
        },

        //minicard

        imgCard:{
            width:"45%",
            height:100,
            },

        miniCardRoot:{
          flexDirection:"row",
          margin:10,
          marginBottom:0,
        },


});