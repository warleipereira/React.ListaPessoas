import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Header from './src/components/header';
import Pessoas from './src/components/pessoas';
import axios from 'axios';


const image = { uri: 'https://thumbs.dreamstime.com/b/salad-strawberry-avocado-onion-cheese-spinach-gray-plate-table-flat-lay-top-view-summer-healthy-food-vegetarian-189061114.jpg'};


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
            .get('https://randomuser.me/api/?nat=br&results=100')
            .then(response =>{
                const {results} =  response.data;
                //const names = results.map(people => people.name.first);
                this.setState({pessoas : results});
            })
    }

  renderList(){
      const textElements = this.state.pessoas.map(pessoa =>{
                          const {first} = pessoa.name;
                          return <Pessoas texto={first}/>
                          });
      return textElements;
    }

    render (){
      return (
            <View style={styles.container}>
              <Header label="Pessoas!"/>
              <ImageBackground source={image} style={styles.image}>
                <View style={styles.boxpeople}>
                  {this.renderList()}
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
    ,borderRadius:10
    ,opacity: 0.8
  },
});

