import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback , Image, FlexStyle, TouchableOpacity} from 'react-native';

const Pessoas  = props => {
    const {pessoas} = props;

    const textElements = pessoas.map(pessoa =>{
            const {first} = pessoa.name;
            const {md5} = pessoa.login;
            const {thumbnail} = pessoa.picture;
      

            return (
                <TouchableOpacity key={md5} onPress={()=>console.log('clicou em:',  first)}>
                    <View  style={styles.linha}>
                        <Image source={{uri: thumbnail}} style={styles.thumb} />
                        <Text  style={styles.text}>{first}</Text>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View style={styles.container}>
                {textElements}
            </View>
        )

};




const styles = StyleSheet.create({

    container:{
        marginTop:0,
        backgroundColor:"transparent",
        width: '90%'    
    
    },
    linha:{
        
         marginTop:25
        ,borderWidth: 1
        ,borderRadius:5
        ,width: '100%'
        ,height: 60
       
        ,flexDirection: 'row'
        ,backgroundColor: 'white'
        ,alignItems: 'center'
        

    },
    text:{
        fontSize: 30,
        color: "black"
        ,flex:6
        ,marginLeft:5
        
    },
    thumb: {
       
         flex:1
         ,aspectRatio:1
        ,borderRadius: 50
        ,marginLeft:5
        
       
      },
})


export default Pessoas;