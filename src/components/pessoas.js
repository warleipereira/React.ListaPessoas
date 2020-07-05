import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback , Image} from 'react-native';

const Pessoas  = props => {
    const {pessoas} = props;

    const textElements = pessoas.map(pessoa =>{
            const {first} = pessoa.name;
            return (
                <View key={first} style={styles.linha}>
                    <Text  style={styles.text} >{first}</Text>;
                </View>
            );
        });

        return (
            <View style={styles.container}>
                {textElements}
            </View>
        )

};




const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        color: "black"
    },
    container:{
        backgroundColor: '#ffffff'
    },
    linha:{
        marginTop:25,
        justifyContent: "center", 
        alignItems: 'center',
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
})


export default Pessoas;