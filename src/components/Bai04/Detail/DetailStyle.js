import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 283,
        paddingTop: 14,
        paddingLeft: 12,
        paddingRight: 22,
        backgroundColor: "#fff"

    },
    header: {
        flexDirection: "row",
        gap: 25
    },
    infor: {
        gap: 11
    },
    textTitle: {
        color: '#000',
        fontWeight: 700,
        fontSize:12
    },
    textPrice: {
        color: "#EE0D0D",
        fontWeight: 700
    }, textOldPrice: {
            color:'#808080',
            fontSize:11,
            textDecorationLine:'line-through'
    },
    actions:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    actionLeft:{
            flexDirection:'row',
            alignItems:'center',
           
            gap:10
    },
actionRight:{   
    fontSize:12,
    color:'#134FEC',
    fontWeight:700  
}
,buttonAction:{
     width:15,
     height:15,
     backgroundColor:'gray',
     alignItems: 'center',
     justifyContent: 'center',
}   
,
wpCodePrice:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center"
},
codeBox:{
  width:220,
  height:45,
  fontWeight:'700',
  backgroundColor:"#fff",
  flexDirection:'row',
  alignItems:"center",
  paddingLeft:13,
  borderWidth:1,
  borderColor:'#0xFF808080',
  flexDirection:'row',
alignItems:"center",
display:'flex'
},
btnActive:{

    height:45,
   paddingLeft:12,
   paddingRight:12,
   backgroundColor:"#0A5EB7",
   justifyContent:"center",

},
textBtn:{
color:"#FFFFFF",
fontSize:20,
fontWeight:700
},
yellowBox:
{
    width:25,
    height:13,
     backgroundColor:'#F2DD1B'
}
,inputCode:{
    fontSize:18,
    color:'0xFF011627',
    width:'100%',
    outlineStyle: 'none',
    paddingRight:10,
    paddingLeft:10

}
})

export default styles