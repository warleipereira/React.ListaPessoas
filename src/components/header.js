import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props) =>(
    <View style={styles.container}>
        <Text style={styles.text}>{props.label} - {props.qtde}</Text>
    </View>
);


const styles = {
    text:{
        fontSize: 35,
        color: "#ffffff"
    },
    container:{
   
        justifyContent: 'center'
        ,alignItems: 'center'
        ,flexDirection: 'row'
        
        ,backgroundColor: '#6ca2f7'

    }
}
export default Header;