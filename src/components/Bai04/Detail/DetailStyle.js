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


})

export default styles