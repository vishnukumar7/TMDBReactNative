import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    dashboardContainer:{
        flex:1,
        backgroundColor:'black',
        padding:10,
    },
    topHeightSpacer:{
        marginTop: 10,
    },
    taskListContainer: {
        paddingHorizontal: 20,
        paddingBottom: 60,
      },
      centerLay:{
        alignItems:'center',
      },
      image:{ width: 200, height: 200 ,resizeMode: 'stretch'},
      imageBanner:{ width: '90%', height: 300 ,},
    textLabel:{
        textAlign:'center',
        fontSize:14,
        width: '80%',
        multiline: true,
        color:'white',
    },
    textLabelHeader:{
        textAlign: 'left',
        fontSize: 18,
        margin:10,
        fontWeight: 'bold',
        color: 'white',
    },
    card:{
        backgroundColor: 'black',
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
});
