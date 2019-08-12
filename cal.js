import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class FixedDimensionsBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tmp: '',
      output: '0',
      opr: 0,
      blkh: '',
      ans: 0
    };
  }
  onClear(cmd, num) {
    if (cmd == 'AC') {
      this.setState({ output: '0' });
      this.setState({ tmp: '' });
      this.setState({ opr: 0 });
      this.setState({ blkh: '' });
      this.setState({ ans: 0 });
    }
  }
  onPut(opr) {
    this.setState({ opr: 1 });
    this.setState({ blkh: opr });
    this.setState({ tmp: this.state.output });
    // console.log('blkh ' + this.state.blkh);
    var ss;
    if (this.state.opr == 1) {
      if (this.state.blkh == '+') {
        ss = Number(this.state.tmp) + Number(this.state.output);
      }
      if (this.state.blkh == '-') {
        ss = Number(this.state.tmp) - Number(this.state.output);
      }
      if (this.state.blkh == '*') {
        ss = Number(this.state.tmp) * Number(this.state.output);
      }
      if (this.state.blkh == '/') {
        ss = Number(this.state.tmp) / Number(this.state.output);
      }
      this.setState({ tmp: ss.toString() });
      this.setState({ output: ss.toString() });
    }
    if (opr == '=') {
      this.setState({ opr: 0 });
      this.setState({ ans: 1 });
      if (this.state.blkh == '+') {
        ss = Number(this.state.tmp) + Number(this.state.output);
      }
      if (this.state.blkh == '-') {
        ss = Number(this.state.tmp) - Number(this.state.output);
      }
      if (this.state.blkh == '*') {
        ss = Number(this.state.tmp) * Number(this.state.output);
      }
      if (this.state.blkh == '/') {
        ss = Number(this.state.tmp) / Number(this.state.output);
      }
      this.setState({ output: ss.toString() });
    }
  }
  onNum(n) {
    if (this.state.opr == 0) {
      //1
      if (this.state.output == '0' || this.state.ans == 1) {
        this.setState({ ans: 0 });
        this.setState({ output: n });
      } else {
        this.setState({ output: this.state.output + n });
      }
    } else if (this.state.opr == 1) {
      //2
      if (this.state.output == '0') {
        this.setState({ output: n });
      } else if (this.state.output == this.state.tmp) {
        this.setState({ output: n });
      } else {
        this.setState({ output: this.state.output + n });
      }
    } //else if (this.state.blkh == '=') {
    //   //2
    //   if (this.state.output == '0') {
    //     this.setState({ output: n });
    //   } else if (this.state.output == this.state.tmp) {
    //     this.setState({ output: n });
    //   } else {
    //     this.setState({ output: this.state.output + n });
    //   }
    // }
    
  }

  render() {
    return (
      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#000000', '#000000']}
        style={{ height: 570 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }} />

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text
              style={{
                flex: 1,
                textAlign: 'right',
                fontSize: 60,
                color: 'white',
                paddingRight: 30,
              }}>
              {this.state.output}
            </Text>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.onClear('AC', '0')}>
              <Text style={styles.txtIn1}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.onPut()}>
              <Text style={styles.txtIn1}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.onPut()}>
              <Text style={styles.txtIn1}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn3}
              onPress={() => this.onPut('/')}>
              <Text style={styles.txtIn2}>÷</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('7')}>
              <Text style={styles.txtIn2}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('8')}>
              <Text style={styles.txtIn2}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('9')}>
              <Text style={styles.txtIn2}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn3}
              onPress={() => this.onPut('*')}>
              <Text style={styles.txtIn2}>X</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('4')}>
              <Text style={styles.txtIn2}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('5')}>
              <Text style={styles.txtIn2}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('6')}>
              <Text style={styles.txtIn2}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn3}
              onPress={() => this.onPut('-')}>
              <Text style={styles.txtIn2}>-</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('1')}>
              <Text style={styles.txtIn2}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('2')}>
              <Text style={styles.txtIn2}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('3')}>
              <Text style={styles.txtIn2}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn3}
              onPress={() => this.onPut('+')}>
              <Text style={styles.txtIn2}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.btn4}
              onPress={() => this.onNum('0')}>
              <Text style={styles.txtIn2}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => this.onNum('.')}>
              <Text style={styles.txtIn2}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn3}
              onPress={() => this.onPut('=')}>
              <Text style={styles.txtIn2}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    width: 72,
    height: 70,
    backgroundColor: '#BDC3C7',
    margin: 4,
    borderRadius: 100,
    borderWidth: 1,
  },
  btn2: {
    alignItems: 'center',
    width: 72,
    height: 70,
    backgroundColor: '#4D5656',
    margin: 4,
    borderRadius: 100,
    borderWidth: 1,
  },
  btn3: {
    alignItems: 'center',
    width: 72,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#F39C12',
    borderColor: 'black',
    borderWidth: 1,
    margin: 4,
  },
  btn4: {
    alignItems: 'center',
    width: 155,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#4D5656',
    borderColor: 'black',
    borderWidth: 1,
    margin: 4,
  },
  txtIn1: {
    alignItems: 'center',
    height: 70,
    padding: 7,
    margin: 5,
    fontSize: 35,
    // fontWeight: 'bold'
  },
  txtIn2: {
    alignItems: 'center',
    height: 70,
    padding: 15,
    margin: 0,
    fontSize: 35,
    color: 'white',
  },
});
