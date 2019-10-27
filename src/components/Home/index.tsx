import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TransactionList from '../TransactionList';
import Client, { Transaction } from '../../lib';

const styles = StyleSheet.create({
  marginizedView: {
    marginTop: 8
  },
  topView: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
    color: "black"
  },
  divider: {
    backgroundColor: "#fafafa",
    height: 8
  }
});

const client = new Client();

interface HomeProp {
  navigation: any
}

interface HomeState {
  data: Transaction[]
}

export default class Home extends Component<HomeProp, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null
    };
    this.navigate = this.navigate.bind(this);
  }
  async componentDidMount() {
    const data = await client.fetchTransactions();
    console.log("Transactions", data);
    this.setState({data});
  }

  navigate(id: any) {
    this.props.navigation.navigate("Details", {
      id
    });
  }
  render() {
    return(
      <View>
        <View style={styles.divider}></View>
        <View style={styles.marginizedView}>
          <TransactionList data={this.state.data} handler={this.navigate}/>
        </View>
      </View>
    );
  }
}
