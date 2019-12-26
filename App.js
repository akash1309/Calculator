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

  constructor(props){
    super(props);
    this.state = {
      firstValue:'',
      secondValue:'',
      selectedSymbol:null,
      resultValue:''
    };
  }



  render(){

    return(
      <View style={styles.view}>
          <ImageBackground source={require('./back.jpg')} style={styles.background} >
              <View style={styles.innerview}>
                  <View style={{flexDirection:'row'}}>
                        <TextInput style={styles.textinput}
                         placeholder='Ist Number'
                         keyboardType='phone-pad'
                         onChangeText={(firstValue) => this.setState({firstValue})}
                         value={this.state.firstValue}
                        />
                        <Text>{"    "}</Text>
                        <TextInput style={styles.textinput}
                         placeholder='Operator'
                         editable={false}
                         value={this.state.selectedSymbol}
                        />
                        <Text>{"    "}</Text>
                        <TextInput style={styles.textinput}
                         placeholder='2nd Number'
                         keyboardType='phone-pad'
                         onChangeText={(secondValue) => this.setState({secondValue})}
                         value={this.state.secondValue}
                        />
                  </View>
                  <Text>{"\n"}</Text>
                  <TextInput style={styles.textinput}
                   placeholder='Result'
                   editable={false}
                   value={this.state.resultValue}

                  />
                  <Text>{"\n"}</Text>
                  <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                        <Text style={styles.button} onPress={() => this.handleReset()}>Reset</Text>
                        </TouchableOpacity>
                        <Text>{"                       "}</Text>
                        <TouchableOpacity>
                        <Text style={styles.button} onPress={() => this.handleComputation()}>Compute</Text>
                        </TouchableOpacity>
                  </View>
                  <Text>{"\n"}</Text>
                  <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => this.handleOperator('+')}>
                        <Text style={styles.calculation}>+</Text>
                        </TouchableOpacity>
                        <Text>{"                 "}</Text>
                        <TouchableOpacity onPress={() => this.handleOperator('-')}>
                        <Text style={styles.calculation}>-</Text>
                        </TouchableOpacity>
                        <Text>{"                 "}</Text>
                        <TouchableOpacity onPress={() => this.handleOperator('*')}>
                        <Text style={styles.calculation}>x</Text>
                        </TouchableOpacity>
                        <Text>{"                 "}</Text>
                        <TouchableOpacity onPress={() => this.handleOperator('/')}>
                        <Text style={styles.calculation}>/</Text>
                        </TouchableOpacity>
                  </View>
              </View>
          </ImageBackground>
      </View>

    )
  }

  handleReset(){
    this.setState({
      selectedSymbol:null,
      firstValue:'',
      secondValue:'',
      resultValue:''
    })
  }

  handleOperator(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str
                });
        }
    }

  handleComputation(){
    let symbol = this.state.selectedSymbol,
                 firstValue = parseFloat(this.state.firstValue),
                 secondValue = parseFloat(this.state.secondValue);

                if (!symbol) {
                    return;
                }

                var result = eval(firstValue + symbol + secondValue);
                this.setState({
                    resultValue: result.toString()
                });


  }

}

const styles = StyleSheet.create({
  textinput: {
    fontSize:18,
    height: 40,
    width: 100,
    borderColor: 'black',
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
