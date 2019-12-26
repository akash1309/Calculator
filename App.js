import React, { Component } from 'react';
import { View,
         Text,
         TextInput,
         StyleSheet,
         ImageBackground,
         Button,
         TouchableOpacity
       } from 'react-native';

export default class Calculator extends Component{
  render(){

    return(
      <View style={styles.view}>
          <ImageBackground source={require('./back.jpg')} style={styles.background} >
              <View style={styles.innerview}>
                  <TextInput style={styles.textinput}
                   placeholder='Type here for calculation'
                   keyboardType='phone-pad'
                  />
                  <Text>{"\n"}</Text>
                  <TextInput style={styles.textinput}
                   placeholder='Result'
                   keyboardType='phone-pad'
                   editable={false}
                  />
                  <Text>{"\n"}</Text>
                  <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                        <Text style={styles.button}>Reset</Text>
                        </TouchableOpacity>
                        <Text>{"                       "}</Text>
                        <TouchableOpacity>
                        <Text style={styles.button}>Compute</Text>
                        </TouchableOpacity>
                  </View>
                  <Text>{"\n"}</Text>
                  <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                        <Text style={styles.calculation}>+</Text>
                        </TouchableOpacity>
                        <Text>{"                 "}</Text>
                        <TouchableOpacity>
                        <Text style={styles.calculation}>-</Text>
                        </TouchableOpacity>
                        <Text>{"                 "}</Text>
                        <TouchableOpacity>
                        <Text style={styles.calculation}>x</Text>
                        </TouchableOpacity>
                        <Text>{"                 "}</Text>
                        <TouchableOpacity>
                        <Text style={styles.calculation}>/</Text>
                        </TouchableOpacity>
                  </View>
              </View>
          </ImageBackground>
      </View>

    )
  }

}

const styles = StyleSheet.create({
  textinput: {
    fontSize:18,
    height: 40,
    width: 250,
    borderColor: 'black',
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderWidth: 1,
    padding: 2,
    textAlign:'center',
    backgroundColor:'white'
  },

   view: {
     flex: 1,
     alignItems:'center',
     width:'100%',
     height:'100%',

  },

  innerview: {
    alignItems:'center',
    top:100
  },

  background: {
    flex:1,
    width:'100%',
    height:'100%'
  },

  button: {
    fontSize:18,
    color:'white'
  },

  calculation: {
    fontSize:18,
    color:'white',
    borderWidth:1,
    borderColor:'white',
    width:30,
    textAlign:'center'
  }
})
