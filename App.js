import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Header from './src/components/header';
import Pessoas from './src/components/pessoas';
import axios from 'axios';


const image = { uri: 'https://thumbs.dreamstime.com/b/happy-family-sitting-green-grass-playing-park-concept-185548143.jpg'};


export default class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        pessoas:[]
      }
    }

  componentDidMount()
    {
        axios
            .get('https://randomuser.me/api/?nat=br&results=5')
            .then(response =>{
                const {results} =  response.data;
                this.setState({pessoas : results});
            })
    }



    render (){
      return (
            <View style={styles.container}>
              <Header label="Pessoas!"/>
              <ImageBackground source={image} style={styles.image}>
                <View style={styles.boxpeople}>
                  <Pessoas pessoas={this.state.pessoas}/>
                </View>
                <StatusBar style="auto" />
              
              </ImageBackground>
            </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center'
  },
  text: {
    color: "blue",
    fontSize: 25,
    fontWeight: "bold",
  },
  boxpeople: {
    marginTop:0,
    flexDirection: "column",
    backgroundColor:"white",
    //justifyContent: "center",
    alignItems: 'center',
    width:'100%',
    height: '100%'
    
    ,opacity: 0.8
  },
});

