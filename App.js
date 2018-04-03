import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called.");
    this.state = {
      number: 0,
      mountButtonTitle: 'UNMOUNT',
    }
    this.showCounter = true;
  };

  incrementNumber() {
    this.setState({number: this.state.number + 1})
  }

  toggleCounter() {
    if(this.showCounter === true){
      this.setState({mountButtonTitle: 'MOUNT'});
      this.showCounter = false;
      this.setState({number: 0});
    }
    else {
      this.setState({mountButtonTitle: 'UNMOUNT'});
      this.showCounter = true;
    }
  }

  componentWillMount() {
    console.log("componentWillMount called.");
  }

  componentDidMount() {
    console.log("componentDidMount called.");
  }

  componentWillReceiveProps(nextProp) {
    console.log("componentWillReceiveProps called.");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("shouldComponentUpdate called.");
    return true;
  }

  componentWillUpdate(nextProp, nextState) {
    console.log("componentWillUpdate called.");
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("componentDidUpdate called.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called.");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch called.");
    //Handle error.
  }

  render() {
    console.log("render called");
    return (
      <View style={styles.container}>
        {this.showCounter ? <Text style={styles.text}>{this.state.number}</Text> : null}
        {this.showCounter ? <Button onPress={this.incrementNumber.bind(this)} title="INCREMENT"/> : null}
        <Button onPress={this.toggleCounter.bind(this)} title={this.state.mountButtonTitle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 31,
    marginBottom: 10,
  }
});
