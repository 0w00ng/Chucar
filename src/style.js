import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    headericon: {
        height:30, 
        width:30,
        margin:10
    },
    buttonbg1: {
        borderWidth:3,
        borderRadius: 20,
        margin:10,
        width:'90%',
        height:90,
        borderColor:'white',
        backgroundColor:'#F8F8FF',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    buttonbg2: {
        borderWidth:3,
        borderRadius: 20,
        margin:10,
        width:'90%',
        height:90,
        borderColor:'navy',
        backgroundColor:'#F8F8FF',
        justifyContent:'center',
        alignItems:'center',

    },
    buttontxt1: {
        textAlign: 'center',
        fontSize: 20,
        margin:5,
        color:'white'
    },
    buttontxt2: {
        textAlign: 'center',
        fontSize: 20,
        margin:5,
        color:'navy'
    },
    tradetitle1: {
        textShadowColor: 'black',
        textShadowRadius: 1,
        textAlign: 'center',
        fontSize: 25,
        marginLeft:10,
    },
    tradeview: {
        margin:10,
        borderWidth:3,
        borderRadius: 15,
        borderColor:'navy',
        backgroundColor:'white',
        justifyContent:"space-between",
        flexDirection:'row',
    },
    tradetxt: {
        margin:10,
        fontSize:18
    },
    buttonbg3: {
        borderWidth:3,
        borderRadius: 10,
        margin:10,
        width:'90%',
        height:50,
        borderColor:'navy',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    buttontxt3: {
        textAlign: 'center',
        fontSize: 20,
        margin:5,
        color:'navy'
    },
    Noticetitle: {
        textShadowColor: 'black',
        textShadowRadius: 1,
        textAlign: "left",
        fontSize: 25,
        margin:10,
    },
    Noticeview: {
        margin:10,
        borderWidth:3,
        borderRadius: 15,
        borderColor:'navy',
        backgroundColor:'white',
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        fontSize: 20,
        margin: 10,
    },
    label2: {
        fontSize: 20,
        marginRight: 20,
      },
    title: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color:'navy'
    },
    titleS: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color:'navy',
        textAlign:'center'
    },
    title2: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color:'white'
    },
    inputL: {
        selectionColor: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        labelSize: 20,
        margin: 20,
        width:'90%',
      },
    inputS: {
        selectionColor: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        labelSize: 20,
        margin: 10,
        width:'50%',
      textAlign: 'right',
      },
    rowcontainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    estlistContainer: {
        backgroundColor:'#F8F8FF',
        borderColor:'navy',
        borderWidth:0.2,
        borderRadius:10,
        margin: 10,
        padding: 10,
        alignItems:'stretch',
        flexDirection:'column'
    },
    estlistContainer_Dead: {
        backgroundColor:'#e0e0e0',
        borderColor:'black',
        borderWidth:0,
        borderRadius:10,
        margin: 10,
        padding: 10,
        alignItems:'stretch',
        flexDirection:'column'
    },
    estlistVContainer: {
        borderColor:'navy',
        borderWidth:1,
        borderRadius:10,
        margin: 10,
        padding: 10,
        alignItems:'stretch',
        flexDirection:'column'
    },
    estlistTextV:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontWeight:'bold'
    },
    estlistText:{
        fontWeight:'bold'
    },
    estlistTitle: {
        color:'navy',
        fontSize:15,
        fontWeight: 'bold',
        textAlign:'center',
    },
    imageBox: {
        margin:2,
        width:90,
        height:90,
        borderWidth:0.2,
        borderColor:'navy',
    },
    imageStyle: {
        width:'100%',
        height:'100%',
    },
});
