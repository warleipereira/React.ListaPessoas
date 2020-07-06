import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground ,  ScrollView,SafeAreaView} from 'react-native';
import Header from '../components/header';
import Pessoas from '../components/pessoas';
import axios from 'axios';
import Constants from 'expo-constants';


const image = { uri: 'https://thumbs.dreamstime.com/b/red-beet-soup-sour-cream-ukrainian-cuisine-borsch-top-view-free-space-your-text-rustic-style-183992158.jpg'};


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
            .get('https://randomuser.me/api/?nat=br&results=10')
            .then(response =>{
                const {results} =  response.data;
                this.setState({pessoas : results});
            })
    }



    render (){
      return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                  <Header label="Lista de Contatos" qtde={this.state.pessoas.length}/>             
                    <ScrollView style={styles.scrollView}>
                      <View style={styles.boxpeople}>                    
                            <Pessoas pessoas={this.state.pessoas}/>                 
                      </View>           
                      <StatusBar style="auto" />
                    </ScrollView>
                    </ImageBackground>
            </SafeAreaView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
 
  },
  scrollView: {
    marginHorizontal: 10
  },
  text: {
    color: "blue",
    fontSize: 25,
    fontWeight: "bold"
  },
  boxpeople: {
    flexDirection: "column",
    backgroundColor:"transparent",
    width:'100%',
    height: '95%'
    //,opacity: 0.8,

    ,alignItems: 'center'
  },
});

