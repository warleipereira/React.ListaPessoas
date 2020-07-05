import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props) =>(
    <View style={styles.container}>
        <Text style={styles.text}>{props.label}</Text>
    </View>
);


const styles = {
    text:{
        fontSize: 50,
        color: "#ffffff"
    },
    container:{
        marginTop:24,
        justifyContent: "center", 
        alignItems: 'center',
        backgroundColor: '#6ca2f7'

    }
}
export default Header;