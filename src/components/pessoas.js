import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground , Image} from 'react-native';



//https://randomuser.me/api/?nat=br&results=5




class Pessoas extends React.Component{
  
    render(){
        return(  
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.texto}</Text>
            </View>
        );
    }
}


const styles = {
    text:{
        fontSize: 30,
        color: "black"
    },
    container:{
        marginTop:24,
        justifyContent: "center", 
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius:10,
        width: '95%',
        height: 50

    },
    image: {
       width: 100,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
      }
}
export default Pessoas;