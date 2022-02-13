import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    headericon: {
        height:30, 
        width:30,
        margin:10
    },
    buttonbg1: {
        borderWidth:3,
        borderRadius: 15,
        margin:10,
        width:150,
        height:50,
        borderColor:'white',
        backgroundColor:'navy',
        justifyContent:'center'
    },
    buttonbg2: {
        borderWidth:3,
        borderRadius: 15,
        margin:10,
        width:150,
        height:50,
        borderColor:'navy',
        backgroundColor:'white',
        justifyContent:'center'
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
        width:300,
        height:50,
        borderColor:'navy',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
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
        backgroundColor:'#f0f0f0',
        borderColor:'navy',
        borderWidth:3,
        borderRadius:10,
        height:106,
        margin: 10,
        padding: 10,
        alignItems:'stretch',
        flexDirection:'column'
    },
    estlistTextV:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        fontWeight:'bold'
    },
    estlistText:{
        fontWeight:'bold'
    },
    estlistTitle: {
        color:'navy',
        fontSize:20,
        fontWeight: 'bold',
        textAlign:'center',
    }
});